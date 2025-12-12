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
import type { Extension } from '@codemirror/state'
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
import { getTheme } from './themes'

/** Data attribute used to mark textareas for auto-initialization */
const DATA_ATTR = 'data-wagtail-html-editor'

/** Data attribute to mark textareas that have been initialized */
const DATA_INITIALIZED = 'data-wagtail-html-editor-initialized'

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
  const extensions: Extension[] = [
    lineNumbers(),
    highlightActiveLine(),
    highlightActiveLineGutter(),
    history(),
    bracketMatching(),
    closeBrackets(),
    indentUnit.of('  '),
    html(),
    getTheme(options.darkMode ?? false),
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

  // Create the editor state
  const state = EditorState.create({
    doc: textarea.value,
    extensions: [...createBaseExtensions(options), syncToTextarea],
  })

  // Create the editor view
  const view = new EditorView({
    state,
    parent: container,
  })

  return {
    textarea,
    view,
    options,
    destroy: () => {
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
