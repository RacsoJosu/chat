// import { AuthLayout } from "./auth/auth.layout";
// import ChatLayout from "./chat/layout/chat-layout";
// import ChatPage from "./chat/page";
// import LoginPage from "./auth/login/page";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import LoginPage from './auth/login/page'
import { AuthLayout } from './auth/auth.layout'
import RegisterPage from './auth/register/page'
import { lazy, Suspense } from 'react'
import { sleep } from './lib/sleep.ts'
const ChatLayoutLazy = lazy(() => import('./chat/layout/chat-layout.tsx'))

const ChatPageLazy = lazy(async () => {
  await sleep(5000)
  return import('./chat/page.tsx')
})

const ChatEmptyContainerLazy = lazy(async () => {
  return import('./chat/components/empty-chat-container.tsx')
})

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>

        <Route
          path="/chat"
          element={
            <Suspense fallback={<div>Cargando...</div>}>
              <ChatLayoutLazy />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<div>cargando...</div>}>
                <ChatEmptyContainerLazy />
              </Suspense>
            }
          />
          <Route
            path="/chat/:clientId"
            element={
              <Suspense fallback={<div>cargando...</div>}>
                <ChatPageLazy />
              </Suspense>
            }
          />

          {/* <Route path="/" element={<Navigate to="/chat" />} /> */}
        </Route>

        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  )
}
