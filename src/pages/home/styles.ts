import styled from 'styled-components'

export const ContainerHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 46rem;
  margin: -27px auto 0;
`

export const ListTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const BarInfoListTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 4rem 0 1.5rem;
`

export const TotalTasks = styled.div`
  display: flex;
  gap: 8px;
  span {
    font-size: 0%.875rem;
    color: ${(props) => props.theme.blue};
  }
`

export const NumberTotalTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['gray-400']};
  padding: 0 8px;
  border-radius: 8px;
  color: ${(props) => props.theme['gray-200']};
  font-size: 0.75rem;
  font-weight: 700;

  span {
  }
`

export const TotalTasksConcluded = styled.div`
  display: flex;
  gap: 8px;
  span {
    font-size: 0%.875rem;
    color: ${(props) => props.theme.purple};
  }
`

export const NumberTotalTaskConcluded = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['gray-400']};
  padding: 0 8px;
  border-radius: 8px;
  color: ${(props) => props.theme['gray-200']};
  font-size: 0.75rem;
  font-weight: 700;
`
