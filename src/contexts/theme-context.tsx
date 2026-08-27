import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

type Theme = 'light' | 'dark'
type ThemeContextValue = { theme: Theme; toggleTheme: () => void }
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('release-radar-theme') as Theme) || 'light')
  useEffect(() => { document.documentElement.classList.toggle('dark', theme === 'dark'); localStorage.setItem('release-radar-theme', theme) }, [theme])
  const value = useMemo(() => ({ theme, toggleTheme: () => setTheme(current => current === 'light' ? 'dark' : 'light') }), [theme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
export function useTheme(): ThemeContextValue { const value = useContext(ThemeContext); if (!value) throw new Error('useTheme must be used within ThemeProvider'); return value }
