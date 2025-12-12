import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { detectWagtailDarkMode, observeThemeChanges } from './theme-detection'

describe('detectWagtailDarkMode', () => {
  beforeEach(() => {
    // Reset html element's theme classes
    document.documentElement.classList.remove(
      'w-theme-dark',
      'w-theme-light',
      'w-theme-system',
    )
  })

  it('should return true when w-theme-dark class is present', () => {
    document.documentElement.classList.add('w-theme-dark')

    expect(detectWagtailDarkMode()).toBe(true)
  })

  it('should return false when w-theme-light class is present', () => {
    document.documentElement.classList.add('w-theme-light')

    expect(detectWagtailDarkMode()).toBe(false)
  })

  it('should return false when w-theme-system is set (fallback to system preference)', () => {
    document.documentElement.classList.add('w-theme-system')
    // jsdom doesn't support matchMedia properly, so this tests the fallback
    expect(detectWagtailDarkMode()).toBe(false)
  })

  it('should return false when no theme class is set (fallback)', () => {
    // jsdom doesn't support matchMedia properly, so this tests the fallback
    expect(detectWagtailDarkMode()).toBe(false)
  })
})

describe('observeThemeChanges', () => {
  beforeEach(() => {
    document.documentElement.classList.remove(
      'w-theme-dark',
      'w-theme-light',
      'w-theme-system',
    )
  })

  afterEach(() => {
    document.documentElement.classList.remove(
      'w-theme-dark',
      'w-theme-light',
      'w-theme-system',
    )
  })

  it('should call callback when theme changes from light to dark', async () => {
    document.documentElement.classList.add('w-theme-light')
    const callback = vi.fn()

    const cleanup = observeThemeChanges(callback)

    // Change theme to dark
    document.documentElement.classList.remove('w-theme-light')
    document.documentElement.classList.add('w-theme-dark')

    // Wait for MutationObserver to fire
    await new Promise((resolve) => setTimeout(resolve, 0))

    expect(callback).toHaveBeenCalledWith(true)

    cleanup()
  })

  it('should call callback when theme changes from dark to light', async () => {
    document.documentElement.classList.add('w-theme-dark')
    const callback = vi.fn()

    const cleanup = observeThemeChanges(callback)

    // Change theme to light
    document.documentElement.classList.remove('w-theme-dark')
    document.documentElement.classList.add('w-theme-light')

    // Wait for MutationObserver to fire
    await new Promise((resolve) => setTimeout(resolve, 0))

    expect(callback).toHaveBeenCalledWith(false)

    cleanup()
  })

  it('should not call callback when theme does not change', async () => {
    document.documentElement.classList.add('w-theme-dark')
    const callback = vi.fn()

    const cleanup = observeThemeChanges(callback)

    // Add unrelated class (theme doesn't change)
    document.documentElement.classList.add('some-other-class')

    // Wait for MutationObserver to fire
    await new Promise((resolve) => setTimeout(resolve, 0))

    expect(callback).not.toHaveBeenCalled()

    cleanup()
    document.documentElement.classList.remove('some-other-class')
  })

  it('should return a cleanup function that stops observing', async () => {
    document.documentElement.classList.add('w-theme-light')
    const callback = vi.fn()

    const cleanup = observeThemeChanges(callback)
    cleanup()

    // Change theme after cleanup
    document.documentElement.classList.remove('w-theme-light')
    document.documentElement.classList.add('w-theme-dark')

    // Wait for MutationObserver to fire
    await new Promise((resolve) => setTimeout(resolve, 0))

    expect(callback).not.toHaveBeenCalled()
  })
})
