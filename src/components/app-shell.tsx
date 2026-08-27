import { Link } from '@tanstack/react-router'
import { Bell, CircleHelp, Moon, Radar, Settings, Sun } from 'lucide-react'
import type { ReactNode } from 'react'
import { Button } from './ui/button'
import { useTheme } from '../contexts/theme-context'
import { useI18n } from '../contexts/i18n-context'

export function AppShell({ children }: { children: ReactNode }) {
  const { theme, toggleTheme } = useTheme(); const { locale, setLocale, t } = useI18n()
  return <div className="min-h-screen bg-mist dark:bg-slate-950"><header className="border-b bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4"><Link to="/" className="flex items-center gap-3"><span className="rounded-xl bg-brand-600 p-2 text-white"><Radar size={21} /></span><span className="text-lg font-extrabold tracking-tight">{t('appName')}</span></Link><div className="flex items-center gap-1"><Button variant="ghost" size="sm" aria-label="Help"><CircleHelp size={18} /></Button><Button variant="ghost" size="sm" aria-label="Notifications"><Bell size={18} /></Button><Button variant="ghost" size="sm" onClick={toggleTheme} aria-label="Toggle theme">{theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}</Button><Button variant="ghost" size="sm" onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}>{locale === 'en' ? 'عربي' : 'EN'}</Button></div></div></header><div className="mx-auto flex max-w-7xl gap-8 px-5 py-8"><aside className="hidden w-52 shrink-0 md:block"><nav className="sticky top-8 space-y-1"><NavLink to="/" icon={<Radar size={17} />} label={t('dashboard')} /><NavLink to="/details" icon={<CircleHelp size={17} />} label={t('details')} /><NavLink to="/settings" icon={<Settings size={17} />} label={t('settings')} /></nav></aside><main className="min-w-0 flex-1">{children}</main></div></div>
}
function NavLink({ to, icon, label }: { to: '/' | '/details' | '/settings'; icon: ReactNode; label: string }) { return <Link to={to} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-500 transition hover:bg-white hover:text-brand-600 dark:hover:bg-slate-900">{icon}{label}</Link> }
