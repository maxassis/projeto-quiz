import styled from "styled-components";

export const WrapperMain = styled.div``

export const WrapperButtonBack = styled.div`
    display: flex;
    justify-content: center;

`

export const ButtonBack = styled.button`
    background-color: #f77f00d9;
    padding: 6px 26px;
    border-radius: 9px;
    margin-top: 1rem;
    transition: all 0.3s;

    :hover{
      background-color: #FF7600;
      color: white;
      transform: scale(1.1);
    }


`

export const WrapperLottie = styled.div`
    width: 40%;
    display: flex;
    margin: 0 auto;

    @media (max-width: 480px) {
        width: 55%;
    }
`


export const WrapperResults = styled.div`
    width:100%;
    height: 100vh;

    
`

export const WrapperTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 11rem;

`

export const Title = styled.h1`
    font-size: 3rem;
    color: white;
    font-weight: bold;
`


export const WrapperScore = styled.div`
    height: 2.5rem;
    display: flex;
    justify-content: center;
    gap: 8.75rem;
    margin-bottom: 43px;
    background-color: white;
    width: 100%;
    max-width: 60%;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 40px;
    border-radius: 0.8rem;
    padding: 17px 0px;

    span {
        font-size:2.1875rem;
     
        @media (max-width: 480px) {
        font-size: 1.5rem;
    }
    }

    @media (max-width: 480px) {
        gap:3.75rem;

    }


`

export const WrapperQuestion = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.1875rem;
    gap: 2.1875rem;
    
    :last-child{
      margin-bottom:5rem ;
    }
  
`
export const WrapperQuestionTitle = styled.div``

export const WrapperAnswer = styled.div`
    display: flex;
    flex-direction: column;

    strong{
        font-size: 1.4rem;
    }

`

export const CorrectQuestion = styled.div`
    margin-top: 3.75rem;
    width: 100%;
    max-width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 3rem;
    border-radius: 3rem;
    border: 3px solid green;
    gap: 1.3rem;

    span{ 
        font-size: 1.4rem;
    }

    :last-child{
        margin-bottom: 5rem;
    }

    @media (max-width: 600px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    padding: 2rem;
  }


`

export const QuestionTitle = styled.div`
    strong{
    max-width: 90%;
    font-size: 1.6rem;
    }
`
