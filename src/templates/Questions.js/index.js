import React, { useEffect, useState } from "react";
import * as S from "./styles";
import useStore from "../../services/store";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../assets/imgs/quiz.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export function Questions() {
  const [questions, setQuestions] = useState([]);
  const [next, setNext] = useState(0);
  const { register, handleSubmit, reset } = useForm();
  const history = useHistory();
  const numberSelected = useStore((state) => state.numSelect);
  const addResult = useStore((state) => state.addQuestion);
  const contCorrectAnswer = useStore((state) => state.contQuestionsRight);
  const contIncorrectAnswer = useStore((state) => state.contQuestionsFail);
  const resetResult = useStore((state) => state.resetResult);

  useEffect(() => {
    async function fetch() {
      const { data } = await api.get(`api.php?amount=${numberSelected}`);
      setQuestions(data.results);
      resetResult();
    }
    fetch();
  }, [numberSelected, resetResult]);

  function onSubmit(data) {
    data.userResponse === questions[next]?.correct_answer
      ? contCorrectAnswer()
      : contIncorrectAnswer();

    const addQuestion = {
      number: next + 1,
      title: questions[next]?.question,
      responseSelected: data.userResponse,
      correctResponse: questions[next]?.correct_answer,
    };

    addResult(addQuestion);
    next < questions.length - 1 ? setNext(next + 1) : history.push("/result");
    reset();
  }

  return (
    <S.WrapperMain>
      <S.ContainerMain>

      <S.WrapperLottie>
      <Lottie options={defaultOptions} />
      </S.WrapperLottie>

        <S.WrapperQuestions>
          <p>
            <strong>Questão {next + 1} : </strong>
            {questions[next]?.question}
          </p>

          <S.WrapperInputs>
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
                      value={item}
                      {...register("userResponse", { required: true })}
                    ></input>
                    <S.Label htmlFor={index + 1}>{item}</S.Label>
                  </div>
                );
              })}
              <S.WrapperButton>
                <S.ButtonNext type="submit">
                  Proxima
                </S.ButtonNext>
              </S.WrapperButton>
            </form>
          </S.WrapperInputs>
        </S.WrapperQuestions>
      </S.ContainerMain>
    </S.WrapperMain>
  );
}
