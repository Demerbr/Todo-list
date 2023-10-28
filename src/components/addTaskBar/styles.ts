import styled from 'styled-components'

export const ContainerAdddTaskBar = styled.div`
  height: 3.275rem;
  max-width: 56rem;

  form {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 8px;
    margin: 0;
  }
`

export const InputTask = styled.input`
  width: 39rem;
  border-radius: 8px;
  background: ${(props) => props.theme['gray-500']};
  border: solid 1px ${(props) => props.theme['gray-700']};

  padding: 16px;

  color: ${(props) => props.theme['gray-100']};

  &::placeholder {
    color: ${(props) => props.theme['gray-300']};
  }
`

export const ButtonCreateTask = styled.button`
  width: 5.625rem;
  height: 3.25rem;
  padding: 16px;
  border-radius: 8px;
  border: none;

  background: ${(props) => props.theme['blue-dark']};
  color: ${(props) => props.theme['gray-100']};

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme.blue};
  }
`
