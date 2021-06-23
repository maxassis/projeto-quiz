import React from "react";
import useStore from "../../services/store";
import { Container } from "@material-ui/core";
import * as S from './styles'


export function Result() {
  const arrayResults = useStore((state) => state.finalResult);
  const acertos = useStore((state) => state.questionsRight)
  const erros = useStore((state) => state.questionsFail)

  console.log(arrayResults)

  return (
    <Container>
      <S.WrapperResults>

      <S.WrapperTitle>
      <S.Title>Resultado</S.Title>
      </S.WrapperTitle> 
      
      <S.WrapperScore>
      <span style={{color: 'green'}}>Acertos: {acertos}</span> <span style={{color: 'red'}}>Erros: {erros}</span>
      </S.WrapperScore>


      <S.WrapperQuestion>

      {arrayResults.map((item) => {
        return(
          <S.CorrectQuestion>
        <div style={{width:'100%'}}>
         <S.QuestionTitle>
           <strong>Questao {item.number}: {item.title}</strong>
         </S.QuestionTitle>
         </div> 
   
         <span><strong>Resposta correta: </strong>{item.correctResponse}</span>
   
         <span><strong>Resposta escolhida: </strong>{item.responseSelected}</span>  
         </S.CorrectQuestion> 
        )
      })}
      </S.WrapperQuestion>

      </S.WrapperResults>
    </Container>
  );
}


// const addQuestion = {
//   number: next + 1,
//   title: questions[next]?.question,
//   responseSelected: data.userResponse,
//   correctResponse: questions[next]?.correct_answer,
// };