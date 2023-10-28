import styled from 'styled-components'

export const ContainerTask = styled.div`
  height: 4.5rem;
  width: 46rem;
  background: ${(props) => props.theme['gray-500']};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 12px;
  padding: 16px;
`

export const DescriptionTask = styled.span`
  flex: 1;
  color: ${(props) => props.theme['gray-100']};
`

export const DescriptionTaskCheked = styled.span`
  flex: 1;
  color: ${(props) => props.theme['gray-100']};
  text-decoration: line-through;
`

export const ContainerCheck = styled.div`
  color: ${(props) => props.theme.blue};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['blue-dark']};
    padding: 0;
  }
`

export const ContainerDelete = styled.div`
  color: ${(props) => props.theme['gray-300']};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;

  &:hover {
    color: ${(props) => props.theme.danger};
    background: ${(props) => props.theme['gray-400']};
    border-radius: 8px;
  }
`
