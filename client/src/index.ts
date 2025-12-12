/**
 * Wagtail HTML Editor - CodeMirror 6 Integration
 *
 * This module provides an enhanced HTML editing experience for Wagtail CMS
 * with syntax highlighting, Emmet support, and fullscreen mode.
 */

import { defaultKeymap, history, historyKeymap } from '@codemirror/commands'
import { html } from '@codemirror/lang-html'
import type { Extension } from '@codemirror/state'
import { EditorState } from '@codemirror/state'
import {
  EditorView,
  highlightActiveLine,
  highlightActiveLineGutter,
  keymap,
  lineNumbers,
} from '@codemirror/view'

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
 */
function createBaseExtensions(): Extension[] {
  return [
    lineNumbers(),
    highlightActiveLine(),
    highlightActiveLineGutter(),
    history(),
    keymap.of([...defaultKeymap, ...historyKeymap]),
    html(),
  ]
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
  // Hide the original textarea
  textarea.style.display = 'none'

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
    extensions: [...createBaseExtensions(), syncToTextarea],
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
      textarea.style.display = ''
    },
  }
}
