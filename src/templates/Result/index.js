import React from "react";
import useStore from "../../services/store";
import { Container } from "../../components/container";
import { Link } from 'react-router-dom'
import * as S from "./styles";
import Lottie from "react-lottie";
import animationData from "../../assets/imgs/trofeu.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export function Result() {
  const arrayResults = useStore((state) => state.finalResult);
  const acertos = useStore((state) => state.questionsRight);
  const erros = useStore((state) => state.questionsFail);

  console.log(arrayResults);

  return (
    <Container>
      <S.WrapperResults>
        <S.WrapperButtonBack>
        <Link to="/" style={{textDecoration: "none"}}>
        <S.ButtonBack>INICIAR NOVO QUIZ</S.ButtonBack>
        </Link>
        </S.WrapperButtonBack>

        <S.WrapperLottie>
          <Lottie options={defaultOptions} />
        </S.WrapperLottie>

        <S.WrapperTitle>
          <S.Title>Pontuação</S.Title>
        </S.WrapperTitle>

        <S.WrapperScore>
          <span style={{ color: "green" }}>Acertos: {acertos}</span>{" "}
          <span style={{ color: "red" }}>Erros: {erros}</span>
        </S.WrapperScore>

        <S.WrapperQuestion>
          {arrayResults.map((item) => {
            return (
              <S.CorrectQuestion>
                <S.WrapperQuestionTitle>
                  <S.QuestionTitle>
                    <p>
                      <strong>
                        Questao {item.number}: {item.title}
                      </strong>
                    </p>
                  </S.QuestionTitle>
                </S.WrapperQuestionTitle>

                <S.WrapperAnswer>
                  <span>
                    <strong>Resposta correta: </strong>
                  {item.correctResponse}
                  </span>

                  <span>
                    <strong >Resposta escolhida: </strong>
                  {item.responseSelected}
                  </span>
                </S.WrapperAnswer>
              </S.CorrectQuestion>
            );
          })}
        </S.WrapperQuestion>
      </S.WrapperResults>
    </Container>
  );
}
