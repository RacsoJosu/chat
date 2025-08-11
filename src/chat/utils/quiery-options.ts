import { queryOptions } from '@tanstack/react-query'
import { getClients } from '../service/fake-data'

export function getClientQueryOptions() {
  return queryOptions({
    queryKey: ['getClients'],
    queryFn: getClients,
  })
}
