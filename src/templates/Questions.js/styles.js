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

  @media (max-width: 600px) {
    margin-top: 5rem;
  }

`

export const WrapperQuestions = styled.div`
  display: flex;
  width:100%;
  max-width: 80%;
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

  @media (max-width: 600px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    padding: 2rem;
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

    @media (max-width: 480px) {
    gap: 1.7rem;
  }
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
    transition: all 0.3s;

    :hover{
      background-color: #FF7600;
      color: white;
    }
`

export const WrapperButton = styled.div`
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  justify-content: flex-end;
  padding-right: 3.75rem;
`
