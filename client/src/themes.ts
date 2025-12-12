/**
 * CodeMirror 6 themes for Wagtail HTML Editor
 *
 * Light and dark themes that match Wagtail admin's color palette.
 */

import { HighlightStyle, syntaxHighlighting } from '@codemirror/language'
import type { Extension } from '@codemirror/state'
import { EditorView } from '@codemirror/view'
import { tags } from '@lezer/highlight'

/**
 * Wagtail-inspired light theme colors
 */
const lightColors = {
  // Editor background and text
  background: '#ffffff',
  foreground: '#1a1a1a',
  selection: '#d9e4f5',
  cursor: '#1a1a1a',
  lineHighlight: '#f5f5f5',
  // Gutter
  gutterBackground: '#f8f8f8',
  gutterForeground: '#999999',
  gutterBorder: '#e0e0e0',
  // Syntax highlighting - matches common IDE conventions
  keyword: '#7928a1', // purple
  string: '#2e7d32', // green
  number: '#1565c0', // blue
  comment: '#757575', // gray
  tag: '#d32f2f', // red
  attribute: '#ff6f00', // orange
  value: '#2e7d32', // green
  bracket: '#1a1a1a',
  operator: '#1a1a1a',
}

/**
 * Wagtail-inspired dark theme colors
 */
const darkColors = {
  // Editor background and text
  background: '#1a1a1a',
  foreground: '#e0e0e0',
  selection: '#3d5a80',
  cursor: '#e0e0e0',
  lineHighlight: '#2a2a2a',
  // Gutter
  gutterBackground: '#1a1a1a',
  gutterForeground: '#666666',
  gutterBorder: '#333333',
  // Syntax highlighting
  keyword: '#c792ea', // purple
  string: '#c3e88d', // green
  number: '#82aaff', // blue
  comment: '#757575', // gray
  tag: '#f07178', // red
  attribute: '#ffcb6b', // orange
  value: '#c3e88d', // green
  bracket: '#e0e0e0',
  operator: '#89ddff',
}

/**
 * Create editor theme (non-syntax styles)
 */
function createEditorTheme(colors: typeof lightColors, isDark: boolean) {
  return EditorView.theme(
    {
      '&': {
        backgroundColor: colors.background,
        color: colors.foreground,
      },
      '.cm-content': {
        caretColor: colors.cursor,
      },
      '.cm-cursor, .cm-dropCursor': {
        borderLeftColor: colors.cursor,
      },
      '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
        {
          backgroundColor: colors.selection,
        },
      '.cm-activeLine': {
        backgroundColor: colors.lineHighlight,
      },
      '.cm-gutters': {
        backgroundColor: colors.gutterBackground,
        color: colors.gutterForeground,
        borderRight: `1px solid ${colors.gutterBorder}`,
      },
      '.cm-activeLineGutter': {
        backgroundColor: colors.lineHighlight,
      },
      '.cm-lineNumbers .cm-gutterElement': {
        padding: '0 8px',
      },
    },
    { dark: isDark },
  )
}

/**
 * Create syntax highlighting style
 */
function createHighlightStyle(colors: typeof lightColors) {
  return HighlightStyle.define([
    // Keywords (if, else, for, etc.)
    { tag: tags.keyword, color: colors.keyword },
    { tag: tags.controlKeyword, color: colors.keyword },
    // Strings
    { tag: tags.string, color: colors.string },
    // Numbers
    { tag: tags.number, color: colors.number },
    // Comments
    { tag: tags.comment, color: colors.comment, fontStyle: 'italic' },
    { tag: tags.lineComment, color: colors.comment, fontStyle: 'italic' },
    { tag: tags.blockComment, color: colors.comment, fontStyle: 'italic' },
    // HTML tags
    { tag: tags.tagName, color: colors.tag },
    { tag: tags.angleBracket, color: colors.bracket },
    // Attributes
    { tag: tags.attributeName, color: colors.attribute },
    { tag: tags.attributeValue, color: colors.value },
    // Operators
    { tag: tags.operator, color: colors.operator },
    { tag: tags.punctuation, color: colors.bracket },
    // CSS
    { tag: tags.propertyName, color: colors.attribute },
    { tag: tags.className, color: colors.tag },
    // JavaScript
    { tag: tags.function(tags.variableName), color: colors.keyword },
    { tag: tags.definition(tags.variableName), color: colors.foreground },
    { tag: tags.variableName, color: colors.foreground },
    { tag: tags.bool, color: colors.number },
    { tag: tags.null, color: colors.number },
  ])
}

/**
 * Light theme extension for CodeMirror
 */
export const lightTheme: Extension = [
  createEditorTheme(lightColors, false),
  syntaxHighlighting(createHighlightStyle(lightColors)),
]

/**
 * Dark theme extension for CodeMirror
 */
export const darkTheme: Extension = [
  createEditorTheme(darkColors, true),
  syntaxHighlighting(createHighlightStyle(darkColors)),
]

/**
 * Get theme extension based on dark mode setting
 * @param darkMode - Whether to use dark theme
 */
export function getTheme(darkMode: boolean): Extension {
  return darkMode ? darkTheme : lightTheme
}
