import * as S from './styles'
import rocket from '../../assets/rocket.svg'
import todo from '../../assets/todo.svg'

export const Header = () => {
  return (
    <S.ContainerHeader>
      <img src={rocket} alt="" />
      <img src={todo} alt="" />
    </S.ContainerHeader>
  )
}
