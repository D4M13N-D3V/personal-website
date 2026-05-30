// Adds custom jest matchers like toBeInTheDocument()
import '@testing-library/jest-dom'

// MUI's useMediaQuery relies on window.matchMedia, which jsdom does not implement.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated but referenced by some libs
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  })
})
