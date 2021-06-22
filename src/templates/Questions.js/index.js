import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import * as S from "./styles";
import useStore from "../../services/store";
import api from "../../services/api";
import { useForm } from "react-hook-form";

export function Questions() {
  const [questions, setQuestions] = useState([]);
  const [next, setNext] = useState(0);

  const { register, handleSubmit, reset } = useForm();
  const numberSelected = useStore((state) => state.numSelect);

  const acerto = useStore((state) => state.questionsRight);
  const erro = useStore((state) => state.questionsFail);

  const contCorrectAnswer = useStore((state) => state.contQuestionsRight);
  const contIncorrectAnswer = useStore((state) => state.contQuestionsFail);

  const questionActive = questions[next]?.question;
  const correctAnswer = questions[next]?.correct_answer;

  useEffect(() => {
    async function fetch() {
      const { data } = await api.get(`api.php?amount=${numberSelected}`);
      setQuestions(data.results);
    }
    fetch();
  }, [numberSelected]);

  function onSubmit(data) {
    console.log(data.userResponse);

    data.userResponse === "incorrect"
      ? contIncorrectAnswer()
      : contCorrectAnswer();

    if (next < questions.length - 1) setNext(next + 1);
    else alert("acabou a pagina");

    reset();
  }

  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <S.WrapperQuestions>
        <p style={{ maxWidth: "90%", fontSize: "30px" }}>
          <strong>Questão {next + 1} : </strong>
          {questions[next]?.question}
        </p>

        <S.WrapperInputs>
          {acerto}
          <br />
          {erro}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                id="0"
                type="radio"
                name="answer"
                required
                value={questions[next]?.correct_answer}
                {...register("userResponse", { required: true })}
              ></input>
              <S.Label htmlFor="0">{questions[next]?.correct_answer}</S.Label>
            </div>
            {questions[next]?.incorrect_answers.map((item, index) => {
              return (
                <div key={index}>
                  <input
                    id={index + 1}
                    type="radio"
                    name="answer"
                    required
                    value="incorrect"
                    {...register("userResponse", { required: true })}
                  ></input>
                  <S.Label htmlFor={index + 1}>{item}</S.Label>
                </div>
              );
            })}
            <S.WrapperButton>
              <S.ButtonNext color="primary" variant="contained" type="submit">
                Proxima
              </S.ButtonNext>
            </S.WrapperButton>
          </form>
        </S.WrapperInputs>
      </S.WrapperQuestions>
    </Container>
  );
}
