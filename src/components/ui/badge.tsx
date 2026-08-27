import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & { variant?: 'default' | 'success' | 'warning' | 'danger' }
export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = { default: 'bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300', success: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300', warning: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300', danger: 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300' }
  return <span className={cn('inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold', variants[variant], className)} {...props} />
}