import styled from "styled-components";


export const WrapperResults = styled.div`
    width:100%;
    height: 100vh;

`

export const WrapperTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 12.5rem;

`

export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 2.5rem;

`


export const WrapperScore = styled.div`
    height: 2.5rem;
    display: flex;
    justify-content: center;
    gap: 8.75rem;

    span {
        font-size:2.1875rem;
    }


`

export const WrapperQuestion = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.1875rem;
    gap: 2.1875rem;

    div:last-child{
      margin-bottom:5rem ;
    }
`



export const CorrectQuestion = styled.div`
    margin-top: 3.75rem;
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;

    span{ 
        font-size: 1.125rem;
    }



`

export const QuestionTitle = styled.h1`
    max-width: 90%;
    font-size: 1.875rem;

`
