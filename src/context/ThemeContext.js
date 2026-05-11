import { createContext, useContext } from 'react'

const ThemeContext = createContext({ isDark: true, setIsDark: () => {} })

export const useTheme = () => useContext(ThemeContext)

export default ThemeContext
