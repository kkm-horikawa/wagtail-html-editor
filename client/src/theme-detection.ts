/**
 * Wagtail theme detection utilities
 *
 * Detects Wagtail admin's current theme (light/dark) and provides
 * utilities for reacting to theme changes.
 */

/**
 * Detect if Wagtail admin is currently in dark mode.
 * Checks the w-theme-* CSS class on the html element.
 * Falls back to system preference if not set.
 */
export function detectWagtailDarkMode(): boolean {
  // Check Wagtail's w-theme-* class on html element
  const htmlElement = document.documentElement

  if (htmlElement.classList.contains('w-theme-dark')) {
    return true
  }

  if (htmlElement.classList.contains('w-theme-light')) {
    return false
  }

  // w-theme-system or no theme class: use system preference
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  return false
}

/**
 * Callback type for theme change events
 */
export type ThemeChangeCallback = (isDarkMode: boolean) => void

/**
 * Observe Wagtail theme changes and call callback when theme changes.
 * Returns a cleanup function to stop observing.
 *
 * @param callback - Function to call when theme changes
 * @returns Cleanup function to disconnect the observer
 */
export function observeThemeChanges(callback: ThemeChangeCallback): () => void {
  let currentIsDark = detectWagtailDarkMode()

  // Observe changes to class attribute on html element (Wagtail uses w-theme-* classes)
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'class'
      ) {
        const newIsDark = detectWagtailDarkMode()
        if (newIsDark !== currentIsDark) {
          currentIsDark = newIsDark
          callback(newIsDark)
        }
      }
    }
  })

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })

  // Also listen for system preference changes
  const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)')
  const mediaQueryHandler = () => {
    // Only use system preference if Wagtail is in system theme mode
    const htmlElement = document.documentElement
    const isSystemTheme =
      htmlElement.classList.contains('w-theme-system') ||
      (!htmlElement.classList.contains('w-theme-dark') &&
        !htmlElement.classList.contains('w-theme-light'))
    if (isSystemTheme) {
      const newIsDark = detectWagtailDarkMode()
      if (newIsDark !== currentIsDark) {
        currentIsDark = newIsDark
        callback(newIsDark)
      }
    }
  }

  mediaQuery?.addEventListener?.('change', mediaQueryHandler)

  // Return cleanup function
  return () => {
    observer.disconnect()
    mediaQuery?.removeEventListener?.('change', mediaQueryHandler)
  }
}
