import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { X } from 'lucide-react'
import { Link, Outlet } from 'react-router'
import {
  AvatarUserLabel,
  SideBarItem,
  SideBarItemContent,
  SideBarItemLabel,
  SideBarItemNavLink,
} from './components/side-bar'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getClientQueryOptions } from '../utils/quiery-options'
import { Fragment } from 'react/jsx-runtime'
import { formatFullName, getInitialNameLetters } from '../utils/fullname'
import { Suspense } from 'react'
import ContacDetails from './components/contac-detail'

// Componente Skeleton para la lista de contactos
function ContactListSkeleton({ count = 5 }: { count?: number }) {
  return (
    <Fragment>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="hover:bg-muted/50 flex items-center gap-3 rounded-lg p-2 transition-colors"
        >
          {/* Avatar skeleton */}
          <div className="bg-muted h-8 w-8 animate-pulse rounded-full" />
          {/* Nombre skeleton */}
          <div className="flex-1">
            <div className="bg-muted h-4 w-24 animate-pulse rounded" />
          </div>
        </div>
      ))}
    </Fragment>
  )
}

export default function ChatLayout() {
  return (
    <div className="bg-background flex h-screen">
      {/* Sidebar */}
      <div className="bg-muted/10 w-64 border-r">
        <div className="border-b p-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary h-6 w-6 rounded-full" />
            <Link to={'/chat'} className="font-semibold">
              NexTalk
            </Link>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-64px)]">
          <div className="space-y-4 p-4">
            <SideBarItem>
              <SideBarItemLabel text="Contacts" />
              <SideBarItemContent>
                <Suspense fallback={<ContactListSkeleton count={5} />}>
                  <ContacListSuspense />
                </Suspense>
              </SideBarItemContent>
            </SideBarItem>
          </div>
          <div className="space-y-4 p-4">
            <SideBarItem>
              <SideBarItemLabel text="Recent" className="mb-1 px-2 text-sm font-semibold" />
              <SideBarItemContent>
                <SideBarItemNavLink to={`/chat/5`}>
                  <AvatarUserLabel>TM</AvatarUserLabel>
                  Thomas Miller
                </SideBarItemNavLink>
                <SideBarItemNavLink to={`/chat/6`}>
                  <AvatarUserLabel>SB</AvatarUserLabel>
                  Sara Brown
                </SideBarItemNavLink>
              </SideBarItemContent>
            </SideBarItem>
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col">
          {/* Header */}
          <header className="flex h-14 items-center justify-between border-b px-4">
            <div></div> {/* Empty div to maintain spacing */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                Save conversation
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </header>
          <Outlet />
        </div>

        {/* Right Panel - Contact Details */}
        <ContacDetails />
      </div>
    </div>
  )
}

function ContacListSuspense() {
  const { data } = useSuspenseQuery(getClientQueryOptions())

  return (
    <div className="max-h-[245px] overflow-y-auto">
      {data.map((contact) => (
        <SideBarItemNavLink to={`/chat/${contact.id}`}>
          <AvatarUserLabel className="size-8">
            {getInitialNameLetters(contact.name)}
          </AvatarUserLabel>
          <span className="capitalize">{formatFullName(contact.name)}</span>
        </SideBarItemNavLink>
      ))}
    </div>
  )
}
