import { cn } from '@/lib/utils'
import type { ComponentProps, PropsWithChildren } from 'react'
import type { ISidebarItemLabelProps } from '../../interfaces/side-bar-interfaces'
import { NavLink } from 'react-router'

export function SideBarItem({
  children,
  className,
  ...props
}: PropsWithChildren<ComponentProps<'div'>>) {
  return (
    <div className={cn('space-y-1', className)} {...props}>
      {children}
    </div>
  )
}

export function SideBarItemLabel({
  text,
  className,
  ...props
}: React.ComponentProps<'h3'> & ISidebarItemLabelProps) {
  return (
    <h3 className={cn('px-2 text-sm font-semibold capitalize', className)} {...props}>
      {text}
    </h3>
  )
}

export function SideBarItemContent({
  children,
  className,
  ...props
}: PropsWithChildren<ComponentProps<'div'>>) {
  return (
    <div className={cn('space-y-1', className)} {...props}>
      {children}
    </div>
  )
}

export function SideBarItemNavLink({
  children,
  ...props
}: PropsWithChildren<ComponentProps<typeof NavLink>>) {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          'hover:bg-muted flex w-full items-center rounded-md px-4 py-2 text-sm transition-[background] duration-250 ease-in-out',
          isActive && 'bg-muted font-semibold'
        )
      }
      {...props}
    >
      {children}
    </NavLink>
  )
}

export function AvatarUserLabel({
  className,
  children,
  ...props
}: PropsWithChildren<ComponentProps<'div'>>) {
  return (
    <div
      className={cn(
        'mr-2 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-xs text-white',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
