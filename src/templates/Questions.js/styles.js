import styled from 'styled-components'
import {Container} from "../../components/container"

export const WrapperMain = styled.div``

export const ContainerMain = styled(Container)`
  display:flex;
  flex-direction: column;
  align-items: center;
`

export const WrapperLottie = styled.div`
  width: 50%;
  margin-top: 1rem;

`

export const WrapperQuestions = styled.div`
  display: flex;
  width: 80%;
  height: 100vh;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  border: 3px solid green;
  padding: 3rem;
  background-color: white;
  height: auto;
  margin-top: 2rem;

  p{
    font-size: 1.9rem;
  }

  strong{
    font-size: 2.1rem;
  }

`
export const WrapperInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;

  form{
    gap: 0.7rem;
    display: flex;
    flex-direction: column;
  }



`
export const Label = styled.label`
  font-size: 1.4375rem;
  margin-left: 0.625rem;
`

export const ButtonNext = styled.button`
    background-color: #f77f00d9;
    padding: 0.6rem 2.6rem;
    border-radius: 0.9rem;


`

export const WrapperButton = styled.div`
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  justify-content: flex-end;
  padding-right: 3.75rem;
`
