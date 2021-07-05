import React, { useState } from 'react'
import * as S from './styles'
import useStore from '../../services/store'
import { useHistory } from 'react-router-dom'
import {Container} from '../../components/container'
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

export function Home() {
  const [num, setNum] = useState(null)

  const history = useHistory()
  const numberStore = useStore((state) => state.addNum)

  function nextPage() {
    if (num > 0 && num !== null) {
      numberStore(num)
      history.push('/confirm')
    }
  }

  return (
    <S.WrapperMain>
    <Container>
      <S.WrapperLottie>
      <Lottie options={defaultOptions} />
      </S.WrapperLottie>
      <S.Main>
        <form>
          <S.WrapperSubtitle>
            <h3 variante="h6">
              Quantas questões você quer responder?
            </h3>

            <S.InputNumber
              type="number"
              required
              placeholder="digite o numero de questões"
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
          </S.WrapperSubtitle>

          <S.WrapperButton>
            <button
              color="primary"
              variant="contained"
              onClick={nextPage}
              type="submit"
            >
              Proximo
            </button>
          </S.WrapperButton>
        </form>
      </S.Main>
    </Container>
    </S.WrapperMain>
  )
}
