import styled from 'styled-components'

export const ContainerNotFoundTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme['gray-300']};
  line-height: 140%;
  border-top: solid 1px ${(props) => props.theme['gray-300']};
  width: 100%;
  padding: 4rem 1.5rem;
`
