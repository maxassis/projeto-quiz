import React from "react";
import useStore from "../../services/store";
import { Container } from "@material-ui/core";


export function Result() {
  const arrayResults = useStore((state) => state.finalResult);

  console.log(arrayResults)

  return (
    <Container>
      <h1>Resultado</h1> 
    </Container>
  );
}


// const addQuestion = {
//   number: next + 1,
//   title: questions[next]?.question,
//   responseSelected: data.userResponse,
//   correctResponse: questions[next]?.correct_answer,
// };