import './index.css' // Verifique o caminho
import { Summary } from './ui/summary'
import { Dialog } from './ui/dialog'
import { CreateGoal } from './ui/cretate-goal'
import { EmptyGoals } from './ui/empty-goals'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60 // 60 seconds
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary/> : <EmptyGoals/>}
    </Dialog>
  )
}
