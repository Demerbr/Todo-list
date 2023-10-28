import styled from 'styled-components'

export const ContainerHeader = styled.header`
  width: 100%;
  height: 12.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background: ${(props) => props.theme['gray-700']};
`
