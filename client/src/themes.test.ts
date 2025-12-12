import { describe, expect, it } from 'vitest'
import { darkTheme, getTheme, lightTheme } from './themes'

describe('themes', () => {
  describe('lightTheme', () => {
    it('should be defined', () => {
      expect(lightTheme).toBeDefined()
    })

    it('should be an array of extensions', () => {
      expect(Array.isArray(lightTheme)).toBe(true)
      expect(lightTheme.length).toBeGreaterThan(0)
    })
  })

  describe('darkTheme', () => {
    it('should be defined', () => {
      expect(darkTheme).toBeDefined()
    })

    it('should be an array of extensions', () => {
      expect(Array.isArray(darkTheme)).toBe(true)
      expect(darkTheme.length).toBeGreaterThan(0)
    })
  })

  describe('getTheme', () => {
    it('should return light theme when darkMode is false', () => {
      const theme = getTheme(false)
      expect(theme).toBe(lightTheme)
    })

    it('should return dark theme when darkMode is true', () => {
      const theme = getTheme(true)
      expect(theme).toBe(darkTheme)
    })
  })
})
