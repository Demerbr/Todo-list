import * as S from './styles'
import { AddTaskBar, NewTaskFormData } from '../../components/addTaskBar'
import { Header } from '../../components/header'
import { Task } from '../../components/task'
import { useEffect, useState } from 'react'
import { NotFoundTasks } from '../../components/notFoundTasks'

export interface TaskProps {
  id: string
  created_at: Date
  description: string
  finished: boolean
}

export const Home = () => {
  const [task, setTask] = useState<TaskProps[]>([])
  const [finishedTasks, setFinishedTasks] = useState<TaskProps[]>([])

  useEffect(() => {
    const completed = task.filter((t) => t.finished)
    setFinishedTasks(completed)
  }, [task])

  const handleNewTask = (data: NewTaskFormData) => {
    const id = String(new Date().getTime())

    const newTask: TaskProps = {
      id,
      created_at: new Date(),
      description: data.description,
      finished: false,
    }

    setTask((state) => [...state, newTask])
  }

  const handleFinishTask = (taskId: string) => {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, finished: !task.finished } : task,
      ),
    )
  }

  const handleDeleteTask = (taskId: string) => {
    setTask((prevTasks) => prevTasks.filter((item) => item.id !== taskId))
  }

  useEffect(() => {
    console.log(task)
  }, [task])

  return (
    <>
      <Header />
      <S.ContainerHome>
        <AddTaskBar handleNewTask={handleNewTask} />

        <S.BarInfoListTask>
          <S.TotalTasks>
            <span>Tarefas criadas</span>
            <S.NumberTotalTask>{task.length}</S.NumberTotalTask>
          </S.TotalTasks>
          <S.TotalTasksConcluded>
            <span>Tarefas concluidas</span>
            <S.NumberTotalTaskConcluded>
              {task.length > 0
                ? `${finishedTasks.length} de ${task.length}`
                : '0'}
            </S.NumberTotalTaskConcluded>
          </S.TotalTasksConcluded>
        </S.BarInfoListTask>
        {task.length > 0 ? (
          <S.ListTaskContainer>
            {task &&
              task.map((item) => {
                return (
                  <Task
                    key={item.id}
                    task={item}
                    handleFinishTask={handleFinishTask}
                    handleDeleteTask={handleDeleteTask}
                  />
                )
              })}
          </S.ListTaskContainer>
        ) : (
          <NotFoundTasks />
        )}
      </S.ContainerHome>
    </>
  )
}
