import * as S from './styles'
import { ClipboardText } from 'phosphor-react'

export const NotFoundTasks = () => {
  return (
    <S.ContainerNotFoundTasks>
      <div>
        <ClipboardText weight="thin" size={100} />
      </div>
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </S.ContainerNotFoundTasks>
  )
}
