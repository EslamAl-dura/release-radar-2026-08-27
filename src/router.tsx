import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router'
import { AppShell } from './components/app-shell'
import { Dashboard } from './pages/dashboard'
import { SignalDetails } from './pages/signal-details'
import { Settings } from './pages/settings'

const rootRoute = createRootRoute({ component: () => <AppShell><Outlet /></AppShell> })
const dashboardRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Dashboard })
const detailsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/details', component: SignalDetails })
const settingsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/settings', component: Settings })
const routeTree = rootRoute.addChildren([dashboardRoute, detailsRoute, settingsRoute])
export const router = createRouter({ routeTree })
declare module '@tanstack/react-router' { interface Register { router: typeof router } }
