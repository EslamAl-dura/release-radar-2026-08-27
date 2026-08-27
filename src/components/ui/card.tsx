import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) { return <div className={cn('rounded-2xl border bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900', className)} {...props} /> }
export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) { return <div className={cn('flex flex-col gap-1.5 p-6', className)} {...props} /> }
export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) { return <h3 className={cn('text-base font-bold tracking-tight', className)} {...props} /> }
export function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) { return <p className={cn('text-sm text-slate-500 dark:text-slate-400', className)} {...props} /> }
export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) { return <div className={cn('p-6 pt-0', className)} {...props} /> }
