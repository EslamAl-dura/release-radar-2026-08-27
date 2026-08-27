import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { ThemeProvider } from './contexts/theme-context'
import { I18nProvider } from './contexts/i18n-context'
import { router } from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><ThemeProvider><I18nProvider><RouterProvider router={router} /></I18nProvider></ThemeProvider></React.StrictMode>)