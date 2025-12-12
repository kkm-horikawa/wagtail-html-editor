/**
 * Wagtail HTML Editor - CodeMirror 6 Integration
 *
 * This module provides an enhanced HTML editing experience for Wagtail CMS
 * with syntax highlighting, Emmet support, and fullscreen mode.
 */

import './styles.css'

import {
  acceptCompletion,
  autocompletion,
  closeBrackets,
  completionKeymap,
} from '@codemirror/autocomplete'
import {
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
} from '@codemirror/commands'
import { html, htmlLanguage } from '@codemirror/lang-html'
import { bracketMatching, indentUnit } from '@codemirror/language'
import { Compartment, type Extension } from '@codemirror/state'
import { EditorState } from '@codemirror/state'
import {
  EditorView,
  highlightActiveLine,
  highlightActiveLineGutter,
  keymap,
  lineNumbers,
} from '@codemirror/view'
import {
  abbreviationTracker,
  emmetCompletionSource,
} from '@emmetio/codemirror6-plugin'
import { detectWagtailDarkMode, observeThemeChanges } from './theme-detection'
import { getTheme } from './themes'

/** Data attribute used to mark textareas for auto-initialization */
const DATA_ATTR = 'data-wagtail-html-editor'

/** Data attribute to mark textareas that have been initialized */
const DATA_INITIALIZED = 'data-wagtail-html-editor-initialized'

/**
 * Server-side configuration from Django settings
 */
export interface ServerConfig {
  emmet?: boolean
  indent_size?: number
  indent_with_tabs?: boolean
  theme?: 'auto' | 'light' | 'dark'
}

/**
 * Editor configuration options
 */
export interface EditorOptions {
  /** Enable dark theme */
  darkMode?: boolean
  /** Enable Emmet abbreviation expansion */
  emmet?: boolean
  /** Enable fullscreen mode toggle */
  fullscreen?: boolean
  /** Indent size (2 or 4 spaces) */
  indentSize?: number
  /** Use tabs instead of spaces */
  indentWithTabs?: boolean
}

/**
 * Parse server config from data-config attribute
 */
function parseServerConfig(textarea: HTMLTextAreaElement): ServerConfig {
  const configAttr = textarea.getAttribute('data-config')
  if (!configAttr) {
    return {}
  }
  try {
    return JSON.parse(configAttr) as ServerConfig
  } catch {
    console.warn('WagtailHtmlEditor: Invalid data-config JSON')
    return {}
  }
}

/**
 * Merge server config with provided options
 */
function mergeConfig(
  serverConfig: ServerConfig,
  options: EditorOptions,
): EditorOptions {
  const merged: EditorOptions = { ...options }

  // Apply server config as defaults (options override)
  if (merged.emmet === undefined && serverConfig.emmet !== undefined) {
    merged.emmet = serverConfig.emmet
  }
  if (
    merged.indentSize === undefined &&
    serverConfig.indent_size !== undefined
  ) {
    merged.indentSize = serverConfig.indent_size
  }
  if (
    merged.indentWithTabs === undefined &&
    serverConfig.indent_with_tabs !== undefined
  ) {
    merged.indentWithTabs = serverConfig.indent_with_tabs
  }
  if (merged.darkMode === undefined && serverConfig.theme !== undefined) {
    if (serverConfig.theme === 'dark') {
      merged.darkMode = true
    } else if (serverConfig.theme === 'light') {
      merged.darkMode = false
    }
    // 'auto' leaves darkMode undefined for auto-detection
  }

  return merged
}

// SVG icons for fullscreen button
const ICON_EXPAND = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>`
const ICON_COMPRESS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>`

/**
 * Create fullscreen toggle button and attach to container
 * Returns cleanup function to remove event listeners
 */
function createFullscreenButton(container: HTMLElement): {
  button: HTMLButtonElement
  cleanup: () => void
} {
  const button = document.createElement('button')
  button.type = 'button'
  button.className = 'wagtail-html-editor__fullscreen-toggle'
  button.innerHTML = `${ICON_EXPAND}<span>Fullscreen</span>`
  button.setAttribute('aria-label', 'Toggle fullscreen mode')

  let isFullscreen = false

  // Create a placeholder element to mark the original position
  const placeholder = document.createElement('span')
  placeholder.style.display = 'none'
  placeholder.setAttribute('data-wagtail-html-editor-placeholder', 'true')

  // ResizeObserver for side panel width changes
  let resizeObserver: ResizeObserver | null = null

  const updateSidePanelWidth = () => {
    const formSide = document.querySelector('.form-side')
    if (formSide && formSide instanceof HTMLElement) {
      const isOpen = formSide.classList.contains('form-side--open')
      if (isOpen) {
        container.style.setProperty(
          '--form-side-width',
          `${formSide.offsetWidth}px`,
        )
      } else {
        container.style.setProperty('--form-side-width', '0px')
      }
    }
  }

  const exitFullscreen = () => {
    // Stop watching side panel resize
    if (resizeObserver) {
      resizeObserver.disconnect()
      resizeObserver = null
    }

    // Remove ESC key listener
    document.removeEventListener('keydown', handleKeyDown)

    // Restore container to original position (before placeholder)
    container.classList.remove(
      'wagtail-html-editor--fullscreen',
      'wagtail-html-editor--fullscreen-exit',
    )
    placeholder.parentNode?.insertBefore(container, placeholder)
    placeholder.remove()

    container.style.removeProperty('--form-side-width')
    button.innerHTML = `${ICON_EXPAND}<span>Fullscreen</span>`
    button.setAttribute('aria-label', 'Toggle fullscreen mode')
  }

  const triggerExit = () => {
    if (!isFullscreen) return
    isFullscreen = false
    container.classList.add('wagtail-html-editor--fullscreen-exit')
    setTimeout(exitFullscreen, 150)
  }

  // ESC key handler
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isFullscreen) {
      e.preventDefault()
      triggerExit()
    }
  }

  button.addEventListener('click', () => {
    if (!isFullscreen) {
      // Enter fullscreen
      isFullscreen = true
      container.classList.add('wagtail-html-editor--fullscreen')

      // Insert placeholder before container to mark original position
      container.parentNode?.insertBefore(placeholder, container)

      // Set initial side panel width
      updateSidePanelWidth()

      // Watch for side panel resize
      const formSide = document.querySelector('.form-side')
      if (formSide) {
        resizeObserver = new ResizeObserver(() => {
          updateSidePanelWidth()
        })
        resizeObserver.observe(formSide)
      }

      // Move container to body to escape any transform/contain contexts
      document.body.appendChild(container)

      // Add ESC key listener
      document.addEventListener('keydown', handleKeyDown)

      button.innerHTML = `${ICON_COMPRESS}<span>Exit</span>`
      button.setAttribute('aria-label', 'Exit fullscreen mode')
    } else {
      triggerExit()
    }
  })

  // Insert button inside container (floating at top-right via CSS)
  container.appendChild(button)

  return {
    button,
    cleanup: () => {
      document.removeEventListener('keydown', handleKeyDown)
      button.remove()
    },
  }
}

/**
 * Editor instance returned by initEditor
 */
export interface EditorInstance {
  /** The original textarea element */
  textarea: HTMLTextAreaElement
  /** The CodeMirror EditorView instance */
  view: EditorView
  /** Configuration options */
  options: EditorOptions
  /** Destroy the editor and restore the textarea */
  destroy: () => void
}

/**
 * Create base extensions for the editor
 * @param options - Editor configuration options
 */
function createBaseExtensions(options: EditorOptions = {}): Extension[] {
  // Determine indent string based on options
  const indentSize = options.indentSize ?? 2
  const indentWithTabs = options.indentWithTabs ?? false
  const indentStr = indentWithTabs ? '\t' : ' '.repeat(indentSize)

  const extensions: Extension[] = [
    lineNumbers(),
    highlightActiveLine(),
    highlightActiveLineGutter(),
    history(),
    bracketMatching(),
    closeBrackets(),
    indentUnit.of(indentStr),
    html(),
    autocompletion(),
  ]

  // Add Emmet support if enabled (default: true)
  if (options.emmet !== false) {
    extensions.push(abbreviationTracker())
    // Add Emmet completions to HTML language data
    extensions.push(
      htmlLanguage.data.of({ autocomplete: emmetCompletionSource }),
    )
  }

  // Add keymaps
  // Priority: 1. Completion keymap (Enter/arrows for popup)
  //           2. Default keymap + history
  //           3. Tab: try acceptCompletion first, then indent
  extensions.push(
    keymap.of([
      ...completionKeymap,
      ...defaultKeymap,
      ...historyKeymap,
      // Tab: accept completion if popup open, otherwise indent
      {
        key: 'Tab',
        run: (view) => {
          if (acceptCompletion(view)) return true
          return indentWithTab.run?.(view) ?? false
        },
        shift: indentWithTab.shift,
      },
    ]),
  )

  return extensions
}

/**
 * Initialize the HTML editor on a textarea element.
 * @param textarea - The textarea to enhance
 * @param options - Editor configuration options
 * @returns Editor instance
 */
export function initEditor(
  textarea: HTMLTextAreaElement,
  options: EditorOptions = {},
): EditorInstance {
  // Check if already initialized
  if (textarea.hasAttribute(DATA_INITIALIZED)) {
    throw new Error('Editor already initialized on this textarea')
  }

  // Parse server config and merge with options
  const serverConfig = parseServerConfig(textarea)
  const mergedOptions = mergeConfig(serverConfig, options)

  // Auto-detect dark mode if not explicitly set
  const resolvedOptions: EditorOptions = {
    ...mergedOptions,
    darkMode: mergedOptions.darkMode ?? detectWagtailDarkMode(),
  }

  // Hide the original textarea
  textarea.style.display = 'none'
  textarea.setAttribute(DATA_INITIALIZED, 'true')

  // Create a container for the editor
  const container = document.createElement('div')
  container.className = 'wagtail-html-editor'
  textarea.parentNode?.insertBefore(container, textarea.nextSibling)

  // Set up sync from editor to textarea
  const syncToTextarea = EditorView.updateListener.of((update) => {
    if (update.docChanged) {
      textarea.value = update.state.doc.toString()
    }
  })

  // Create a compartment for the theme so it can be changed dynamically
  const themeCompartment = new Compartment()

  // Create the editor state
  const state = EditorState.create({
    doc: textarea.value,
    extensions: [
      ...createBaseExtensions(resolvedOptions),
      themeCompartment.of(getTheme(resolvedOptions.darkMode ?? false)),
      syncToTextarea,
    ],
  })

  // Create the editor view
  const view = new EditorView({
    state,
    parent: container,
  })

  // Create fullscreen toggle button
  const { cleanup: cleanupFullscreen } = createFullscreenButton(container)

  // Set up theme change observer (only if darkMode wasn't explicitly set)
  let stopObserving: (() => void) | null = null
  if (options.darkMode === undefined) {
    stopObserving = observeThemeChanges((isDarkMode) => {
      // Reconfigure only the theme compartment
      view.dispatch({
        effects: themeCompartment.reconfigure(getTheme(isDarkMode)),
      })
    })
  }

  return {
    textarea,
    view,
    options: resolvedOptions,
    destroy: () => {
      stopObserving?.()
      cleanupFullscreen()
      view.destroy()
      container.remove()
      textarea.removeAttribute(DATA_INITIALIZED)
      textarea.style.display = ''
    },
  }
}

/**
 * Initialize editor on a textarea found by CSS selector.
 * @param selector - CSS selector to find the textarea
 * @param options - Editor configuration options
 * @returns Editor instance or null if element not found
 */
export function initEditorBySelector(
  selector: string,
  options: EditorOptions = {},
): EditorInstance | null {
  const element = document.querySelector(selector)

  if (!element) {
    console.warn(
      `WagtailHtmlEditor: No element found for selector "${selector}"`,
    )
    return null
  }

  if (!(element instanceof HTMLTextAreaElement)) {
    console.warn(`WagtailHtmlEditor: Element "${selector}" is not a textarea`)
    return null
  }

  return initEditor(element, options)
}

/**
 * Initialize editors on all textareas with the data-wagtail-html-editor attribute.
 * @param options - Editor configuration options (applied to all editors)
 * @returns Array of editor instances
 */
export function initAll(options: EditorOptions = {}): EditorInstance[] {
  const textareas = document.querySelectorAll<HTMLTextAreaElement>(
    `textarea[${DATA_ATTR}]:not([${DATA_INITIALIZED}])`,
  )
  const instances: EditorInstance[] = []

  for (const textarea of textareas) {
    try {
      const instance = initEditor(textarea, options)
      instances.push(instance)
    } catch (error) {
      console.error('WagtailHtmlEditor: Failed to initialize editor', error)
    }
  }

  return instances
}

/**
 * Public API exposed to window for IIFE builds
 */
export const WagtailHtmlEditor = {
  initEditor,
  initEditorBySelector,
  initAll,
}

// Expose to window for IIFE usage
if (typeof window !== 'undefined') {
  ;(
    window as unknown as { WagtailHtmlEditor: typeof WagtailHtmlEditor }
  ).WagtailHtmlEditor = WagtailHtmlEditor
}

// Import telepath adapter to ensure it's registered
import './telepath'
