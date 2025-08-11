import { cn } from '@/lib/utils'
import { type ComponentProps, type PropsWithChildren } from 'react'
type PropsDivWithChildren = PropsWithChildren<ComponentProps<'div'>>
export function PanelCard({ className, children, ...props }: PropsDivWithChildren) {
  return (
    <div className={cn('w-80 border-l', className)} {...props}>
      {children}
    </div>
  )
}

export function PanelCardHeader({ className, children, ...props }: PropsDivWithChildren) {
  return (
    <div className={cn('flex h-13 items-center border-b px-4', className)} {...props}>
      {children}
    </div>
  )
}

export function PanelCardHeaderTitle({
  className,
  children,
  ...props
}: PropsWithChildren<ComponentProps<'h2'>>) {
  return (
    <h2 className={cn('font-medium', className)} {...props}>
      {children}
    </h2>
  )
}

export function PanelCardContent({ className, children, ...props }: PropsDivWithChildren) {
  return (
    <div className={cn('p-4', className)} {...props}>
      {children}
    </div>
  )
}

export function PanelCardFooter({ className, children, ...props }: PropsDivWithChildren) {
  return (
    <div
      className={cn(
        'flex min-h-[100px] flex-col items-center justify-center border-t px-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
export default PanelCard
