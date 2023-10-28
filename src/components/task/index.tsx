import { CheckCircle, Circle, Trash } from 'phosphor-react'
import * as S from './styles'
import { TaskProps } from '../../pages/home'

interface TaskComponentProps {
  task: TaskProps
  handleFinishTask: (taskId: string) => void
  handleDeleteTask: (taskId: string) => void
}

export const Task = ({
  task,
  handleFinishTask,
  handleDeleteTask,
}: TaskComponentProps) => {
  return (
    <>
      {!task.finished ? (
        <S.ContainerTask>
          <S.ContainerCheck>
            <Circle onClick={() => handleFinishTask(task.id)} size={24} />
          </S.ContainerCheck>
          <S.DescriptionTask> {task.description}</S.DescriptionTask>
          <S.ContainerDelete>
            <Trash onClick={() => handleDeleteTask(task.id)} size={24} />
          </S.ContainerDelete>
        </S.ContainerTask>
      ) : (
        <S.ContainerTask>
          <S.ContainerCheck>
            <CheckCircle
              onClick={() => handleFinishTask(task.id)}
              weight="fill"
              size={24}
            />
          </S.ContainerCheck>
          <S.DescriptionTaskCheked> {task.description}</S.DescriptionTaskCheked>
          <S.ContainerDelete>
            <Trash onClick={() => handleDeleteTask(task.id)} size={24} />
          </S.ContainerDelete>
        </S.ContainerTask>
      )}
    </>
  )
}
