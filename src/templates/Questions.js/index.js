import React, { useEffect, useState } from 'react'
import { Typography, Container } from '@material-ui/core'
import * as S from './styles'
import useStore from '../../services/store'
import api from '../../services/api'

export function Questions() {
  const [questions, setQuestions] = useState([])
  const [next, setNext] = useState(0)

  const numberSelected = useStore((state) => state.numSelect)

  useEffect(() => {
    async function fetch() {
      const { data } = await api.get(`api.php?amount=${numberSelected}`)
      setQuestions(data.results)
    }

    fetch()
  }, [numberSelected])

  console.log(questions)

  function nextQuestion() {
    if (next < questions.length - 1) setNext(next + 1)
    else alert('acabou a pagina')
  }

  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      <S.WrapperQuestions>
        <p variant="h4" style={{ maxWidth: '90%', fontSize: '30px' }}>
          <strong>Questão {next + 1} : </strong>
          {questions[next]?.question}
        </p>

        <S.WrapperInputs>
          <form>
            <div>
              <input id="0" type="radio" name="answer" required></input>
              <S.Label for="0">{questions[next]?.correct_answer}</S.Label>
            </div>
            {questions[next]?.incorrect_answers.map((item, index) => {
              return (
                <div key={index}>
                  <input
                    id={index + 1}
                    type="radio"
                    name="answer"
                    required
                  ></input>
                  <S.Label for={index + 1}>{item}</S.Label>
                </div>
              )
            })}
            <S.WrapperButton>
              <S.ButtonNext
                color="primary"
                variant="contained"
                onClick={nextQuestion}
                type="submit"
              >
                Proxima
              </S.ButtonNext>
            </S.WrapperButton>
          </form>
        </S.WrapperInputs>
      </S.WrapperQuestions>
    </Container>
  )
}
