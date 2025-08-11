import { QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { AppRouter } from './AppRouter'
import { queryClient } from './lib/query-client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
