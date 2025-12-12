import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { initAll, initEditor, initEditorBySelector } from './index'

describe('initEditor', () => {
  let textarea: HTMLTextAreaElement
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)

    textarea = document.createElement('textarea')
    textarea.value = '<h1>Hello World</h1>'
    container.appendChild(textarea)
  })

  afterEach(() => {
    container.remove()
  })

  it('should initialize editor on textarea', () => {
    const instance = initEditor(textarea)

    expect(instance).toBeDefined()
    expect(instance.textarea).toBe(textarea)
    expect(instance.view).toBeDefined()
    expect(instance.options.darkMode).toBeDefined()
  })

  it('should hide the original textarea', () => {
    initEditor(textarea)

    expect(textarea.style.display).toBe('none')
  })

  it('should set initialized attribute', () => {
    initEditor(textarea)

    expect(textarea.hasAttribute('data-wagtail-html-editor-initialized')).toBe(
      true,
    )
  })

  it('should create editor container', () => {
    initEditor(textarea)

    const editorContainer = container.querySelector('.wagtail-html-editor')
    expect(editorContainer).not.toBeNull()
  })

  it('should initialize with textarea content', () => {
    const instance = initEditor(textarea)

    expect(instance.view.state.doc.toString()).toBe('<h1>Hello World</h1>')
  })

  it('should throw error if already initialized', () => {
    initEditor(textarea)

    expect(() => initEditor(textarea)).toThrow(
      'Editor already initialized on this textarea',
    )
  })

  it('should accept emmet option', () => {
    const instance = initEditor(textarea, { emmet: false })

    expect(instance.options.emmet).toBe(false)
  })

  it('should accept darkMode option', () => {
    const instance = initEditor(textarea, { darkMode: true })

    expect(instance.options.darkMode).toBe(true)
  })

  it('should sync editor content to textarea', () => {
    const instance = initEditor(textarea)

    // Simulate typing in the editor
    instance.view.dispatch({
      changes: {
        from: 0,
        to: instance.view.state.doc.length,
        insert: '<p>New content</p>',
      },
    })

    expect(textarea.value).toBe('<p>New content</p>')
  })

  describe('destroy', () => {
    it('should restore textarea visibility', () => {
      const instance = initEditor(textarea)
      instance.destroy()

      expect(textarea.style.display).toBe('')
    })

    it('should remove initialized attribute', () => {
      const instance = initEditor(textarea)
      instance.destroy()

      expect(
        textarea.hasAttribute('data-wagtail-html-editor-initialized'),
      ).toBe(false)
    })

    it('should remove editor container', () => {
      const instance = initEditor(textarea)
      instance.destroy()

      const editorContainer = container.querySelector('.wagtail-html-editor')
      expect(editorContainer).toBeNull()
    })

    it('should allow re-initialization after destroy', () => {
      const instance1 = initEditor(textarea)
      instance1.destroy()

      const instance2 = initEditor(textarea)
      expect(instance2).toBeDefined()
    })
  })
})

describe('initEditorBySelector', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    container.remove()
  })

  it('should initialize editor by selector', () => {
    const textarea = document.createElement('textarea')
    textarea.id = 'test-textarea'
    container.appendChild(textarea)

    const instance = initEditorBySelector('#test-textarea')

    expect(instance).not.toBeNull()
    expect(instance?.textarea).toBe(textarea)
  })

  it('should return null if element not found', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    const instance = initEditorBySelector('#nonexistent')

    expect(instance).toBeNull()
    expect(warnSpy).toHaveBeenCalledWith(
      'WagtailHtmlEditor: No element found for selector "#nonexistent"',
    )

    warnSpy.mockRestore()
  })

  it('should return null if element is not a textarea', () => {
    const div = document.createElement('div')
    div.id = 'not-textarea'
    container.appendChild(div)

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    const instance = initEditorBySelector('#not-textarea')

    expect(instance).toBeNull()
    expect(warnSpy).toHaveBeenCalledWith(
      'WagtailHtmlEditor: Element "#not-textarea" is not a textarea',
    )

    warnSpy.mockRestore()
  })
})

describe('initAll', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    container.remove()
  })

  it('should initialize all marked textareas', () => {
    const textarea1 = document.createElement('textarea')
    textarea1.setAttribute('data-wagtail-html-editor', '')
    container.appendChild(textarea1)

    const textarea2 = document.createElement('textarea')
    textarea2.setAttribute('data-wagtail-html-editor', '')
    container.appendChild(textarea2)

    const instances = initAll()

    expect(instances).toHaveLength(2)
  })

  it('should skip already initialized textareas', () => {
    const textarea1 = document.createElement('textarea')
    textarea1.setAttribute('data-wagtail-html-editor', '')
    container.appendChild(textarea1)

    const textarea2 = document.createElement('textarea')
    textarea2.setAttribute('data-wagtail-html-editor', '')
    textarea2.setAttribute('data-wagtail-html-editor-initialized', 'true')
    container.appendChild(textarea2)

    const instances = initAll()

    expect(instances).toHaveLength(1)
  })

  it('should return empty array if no textareas found', () => {
    const instances = initAll()

    expect(instances).toHaveLength(0)
  })

  it('should apply options to all editors', () => {
    const textarea = document.createElement('textarea')
    textarea.setAttribute('data-wagtail-html-editor', '')
    container.appendChild(textarea)

    const instances = initAll({ emmet: false })

    expect(instances[0].options.emmet).toBe(false)
  })

  it('should not re-initialize already initialized textareas', () => {
    const textarea = document.createElement('textarea')
    textarea.setAttribute('data-wagtail-html-editor', '')
    container.appendChild(textarea)

    // First call initializes
    const instances1 = initAll()
    expect(instances1).toHaveLength(1)

    // Second call should not initialize again (already has initialized attr)
    const instances2 = initAll()
    expect(instances2).toHaveLength(0)
  })
})
