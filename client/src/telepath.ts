/**
 * Wagtail Telepath adapter for EnhancedHTMLWidget
 *
 * This module provides StreamField integration for the HTML editor,
 * allowing editors to be dynamically created when blocks are added.
 */

import { type EditorInstance, initEditor } from './index'

/**
 * Bound widget instance returned by render()
 * Implements Wagtail's BoundWidget interface
 */
class BoundEnhancedHTMLWidget {
  private textarea: HTMLTextAreaElement
  private editor: EditorInstance | null = null

  constructor(textarea: HTMLTextAreaElement) {
    this.textarea = textarea

    // Initialize CodeMirror editor
    try {
      this.editor = initEditor(textarea)
    } catch (error) {
      console.error('WagtailHtmlEditor: Failed to initialize editor', error)
    }
  }

  /**
   * Get the HTML ID for label association
   */
  get idForLabel(): string | null {
    return this.textarea.id || null
  }

  /**
   * Get the current value for form submission
   */
  getValue(): string {
    return this.textarea.value
  }

  /**
   * Get the current state for re-initialization
   */
  getState(): string {
    return this.textarea.value
  }

  /**
   * Set a new state value
   */
  setState(newState: string): void {
    this.textarea.value = newState
    // Update CodeMirror content if editor exists
    if (this.editor) {
      this.editor.view.dispatch({
        changes: {
          from: 0,
          to: this.editor.view.state.doc.length,
          insert: newState,
        },
      })
    }
  }

  /**
   * Focus the editor
   */
  focus(): void {
    if (this.editor) {
      this.editor.view.focus()
    } else {
      this.textarea.focus()
    }
  }
}

/**
 * Widget definition for Wagtail Telepath
 * Creates and manages EnhancedHTMLWidget instances
 */
class EnhancedHTMLWidgetDefinition {
  private html: string

  constructor(html: string) {
    this.html = html
  }

  /**
   * Render the widget into the page
   */
  render(
    placeholder: HTMLElement,
    name: string,
    id: string,
    initialState: string,
  ): BoundEnhancedHTMLWidget {
    // Replace placeholders in the HTML template
    const renderedHtml = this.html
      .replace(/__NAME__/g, name)
      .replace(/__ID__/g, id)

    // Insert the HTML
    placeholder.outerHTML = renderedHtml

    // Find the textarea element
    const textarea = document.getElementById(id) as HTMLTextAreaElement
    if (!textarea) {
      throw new Error(`WagtailHtmlEditor: Textarea with id "${id}" not found`)
    }

    // Set the initial value
    textarea.value = initialState || ''

    // Return bound widget
    return new BoundEnhancedHTMLWidget(textarea)
  }
}

// Register with Wagtail Telepath when available
declare global {
  interface Window {
    telepath?: {
      register: (name: string, cls: unknown) => void
    }
  }
}

if (typeof window !== 'undefined' && window.telepath) {
  window.telepath.register(
    'wagtail_html_editor.widgets.EnhancedHTMLWidget',
    EnhancedHTMLWidgetDefinition,
  )
}

export { EnhancedHTMLWidgetDefinition, BoundEnhancedHTMLWidget }
