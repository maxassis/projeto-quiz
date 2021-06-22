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
  gap: 10px;
`
export const Label = styled.label`
  font-size: 23px;
  margin-left: 10px;
`

export const ButtonNext = styled(Button)``

export const WrapperButton = styled.div`
  width: 100%;
  max-width: 90%;
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
  padding-right: 60px;
`
