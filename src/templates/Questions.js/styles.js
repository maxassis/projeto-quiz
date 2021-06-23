import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const WrapperQuestions = styled.div`
  display: flex;
  width: 80%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const WrapperInputs = styled.div`
  width: 100%;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`
export const Label = styled.label`
  font-size: 1.4375rem;
  margin-left: 0.625rem;
`

export const ButtonNext = styled(Button)``

export const WrapperButton = styled.div`
  width: 100%;
  max-width: 90%;
  margin-top: 2.5rem;
  display: flex;
  justify-content: flex-end;
  padding-right: 3.75rem;
`
