import React, { useEffect, useState } from 'react'

type ThemeMode = 'light' | 'dark' | 'auto'

function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'auto'
  }

  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark' || stored === 'auto') {
    return stored
  }

  return 'auto'
}

function applyThemeMode(mode: ThemeMode) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const resolved = mode === 'auto' ? (prefersDark ? 'dark' : 'light') : mode

  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(resolved)

  if (mode === 'auto') {
    document.documentElement.removeAttribute('data-theme')
  } else {
    document.documentElement.setAttribute('data-theme', mode)
  }

  document.documentElement.style.colorScheme = resolved
}

const ThemeContext = React.createContext<{
  mode: ThemeMode
  setMode: React.Dispatch<React.SetStateAction<ThemeMode>>
}>({
  mode: 'auto',
  setMode: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('auto')

  useEffect(() => {
    const initialMode = getInitialMode()
    setMode(initialMode)
    applyThemeMode(initialMode)
  }, [])

  useEffect(() => {
    applyThemeMode(mode)

    if (mode === 'auto') {
      const media = window.matchMedia('(prefers-color-scheme: dark)')
      const onChange = () => applyThemeMode('auto')

      media.addEventListener('change', onChange)
      return () => {
        media.removeEventListener('change', onChange)
      }
    }
  }, [mode])

  const value = { mode, setMode }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return React.useContext(ThemeContext)
}
