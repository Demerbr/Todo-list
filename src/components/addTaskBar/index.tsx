import { PlusCircle } from 'phosphor-react'
import * as zod from 'zod'

import * as S from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const newTaskValidationSchema = zod.object({
  description: zod.string().min(4, 'minimo 4 caracteres'),
})

export type NewTaskFormData = zod.infer<typeof newTaskValidationSchema>

interface AddTaskBarProps {
  handleNewTask: (data: NewTaskFormData) => void
}

export const AddTaskBar = ({ handleNewTask }: AddTaskBarProps) => {
  const { register, handleSubmit, reset } = useForm<NewTaskFormData>({
    resolver: zodResolver(newTaskValidationSchema),
    defaultValues: {
      description: '',
    },
  })

  const handleCreateNewTask = (data: NewTaskFormData) => {
    handleNewTask(data)
    reset()
  }

  return (
    <S.ContainerAdddTaskBar>
      <form onSubmit={handleSubmit(handleCreateNewTask)}>
        <S.InputTask
          {...register('description')}
          placeholder="Adicione uma nova tarefa"
        />
        <S.ButtonCreateTask>
          Criar
          <PlusCircle size={16} />
        </S.ButtonCreateTask>
      </form>
    </S.ContainerAdddTaskBar>
  )
}
