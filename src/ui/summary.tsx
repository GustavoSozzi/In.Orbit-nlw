import { CheckCircle, CheckCircle2, Plus } from 'lucide-react'
import { DialogTrigger } from './dialog'
import { Button } from './button'
import { InOrbiticon } from './in-orbit.icon'
import { Progress, ProgressIndicator } from './progress-bar'
import { Separator } from './separator'
import { OutlineButton } from './outline-button'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from '../http/get-summary'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
import { PendingGoals } from './pending-goals'

dayjs.locale(ptBR)

const style = { width: 200 }

export function Summary() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 60 seconds
  })

  if (!data) {
    return null
  }
  const FirstDayOfWeek = dayjs().startOf('week').format('D MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('D MMM')

  const completedPercentage = Math.round((data.completed * 100) / data.total)

  return (
    <div className="py-10 max-w-[400px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbiticon />
          <span className="text-lg font-semibold">5 a 10 de Agosto</span>
          {FirstDayOfWeek} - {lastDayOfWeek}
        </div>

        <DialogTrigger asChild>
          <Button size="sm">
            <Plus size={16} /> Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={15} max={100}>
          <ProgressIndicator style={{ width: `${completedPercentage}` }} />
        </Progress>

        <div className="flex items-center justify-between text-as text-zinc-400">
          <span>
            Você completou{' '}
            <span className="text-zinc-100">{data?.completed}</span> de{' '}
            <span className="text-zinc-100">{data?.total}</span>
          </span>
          <span>58%</span>
        </div>
      </div>

      <Separator />

      <PendingGoals/>

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>

        {Object.entries(data.goalsPerDay).map(([date, goals]) => {
          const weekDay = dayjs(date).format('dddd')
          const formattedDate = dayjs(date).format('DD [de] MMMM')

          return (
            <div key={date} className="flex flex-col gap-3">
              <h3 className="font-medium">
                <span className="capitalize">{weekDay}</span>{' '}
                <span className="text-zinc-400 text-xs">{formattedDate}</span>
              </h3>

              <ul className="flex flex-col gap-3">
                {goals.map(goal => {
                  const time = dayjs(goal.completedAt).format('HH:mm')

                  return (
                    <li key={goal.id} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-pink-500" />
                      <span className="text-sm text-zinc-400">
                        Você completou{' '}
                        <span className="text-zinc-100">{goal.title}</span> às{' '}
                        <span className="text-zinc-100">{time}</span>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
