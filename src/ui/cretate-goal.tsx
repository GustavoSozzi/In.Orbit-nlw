import { DialogContent, DialogTitle, DialogClose } from "./dialog"
import { X } from "lucide-react"
import { DialogDescription } from "@radix-ui/react-dialog"
import { Input } from "./input"
import { RadioGroup, RadioGroupIndicator, RadioGroupItem } from "./radio-group"
import { Button } from "./button"
import { Controller, useForm } from "react-hook-form"
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

// Definindo o schema de validação
const createGoalForm = z.object({
  title: z.string().min(1, 'Informe a atividade que deseja realizar'),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

// Inferindo o tipo do formulário a partir do schema do Zod
type CreateGoalForm = z.infer<typeof createGoalForm>

export function CreateGoal() {
  // Uso do useForm e zodResolver para validação do schema
  const { register, control, handleSubmit, formState } = useForm<CreateGoalForm>({
    resolver: zodResolver(createGoalForm)
  })

  // Função para tratar o envio do formulário
  function handleCreateGoal(data: CreateGoalForm){
    console.log(data)
    // Aqui você pode tratar os dados como salvar no backend
  }

  return (
    <DialogContent>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <DialogTitle>Cadastrar meta</DialogTitle>
          <DialogClose>
            <X className="size-5 text-zinc-600" />
          </DialogClose>
        </div>

        <DialogDescription>
          Adicione atividades que te fazem bem e que você quer continuar
          praticando toda semana.
        </DialogDescription>
      </div>

      {/* Formulário com submit tratado */}
      <form onSubmit={handleSubmit(handleCreateGoal)} className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          {/* Campo para o título da atividade */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='title'>Qual a atividade?</label>
            <Input
              id='title'
              autoFocus
              placeholder='Praticar exercícios, meditar, etc...'
              {...register('title')}
            />
          </div>

          {/* Campo para a frequência semanal */}
          <div className='flex flex-col gap-2'>
            <label htmlFor="desiredWeeklyFrequency">Quantas vezes na semana?</label>
            <Controller
              control={control}
              name="desiredWeeklyFrequency"
              render={({ field }) => {
                return (
                  <RadioGroup
                    onValueChange={(value) => field.onChange(Number(value))}  // Converte o valor para número
                    value={field.value?.toString() || ''}
                  >
                    <RadioGroupItem value='1'>
                      <RadioGroupIndicator />
                      1x na semana
                    </RadioGroupItem>

                    <RadioGroupItem value='2'>
                      <RadioGroupIndicator />
                      2x na semana
                    </RadioGroupItem>

                    <RadioGroupItem value='3'>
                      <RadioGroupIndicator />
                      3x na semana
                    </RadioGroupItem>

                    <RadioGroupItem value='4'>
                      <RadioGroupIndicator />
                      4x na semana
                    </RadioGroupItem>

                    <RadioGroupItem value='5'>
                      <RadioGroupIndicator />
                      5x na semana
                    </RadioGroupItem>

                    <RadioGroupItem value='6'>
                      <RadioGroupIndicator />
                      6x na semana
                    </RadioGroupItem>

                    <RadioGroupItem value='7'>
                      <RadioGroupIndicator />
                      7x na semana
                    </RadioGroupItem>
                  </RadioGroup>
                )
              }}
            />
          </div>
        </div>

        {/* Botões de ação */}
        <div className="flex items-center gap-3">
          <DialogClose asChild>
            <Button type="button" className="flex-1" variant="secondary">
              Fechar
            </Button>
          </DialogClose>
          <Button type="submit" className="flex-1">
            Salvar
          </Button>
        </div>
      </form>
    </DialogContent>
  )
}
