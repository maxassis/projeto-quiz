import React, { useEffect, useState } from 'react'
import { Typography, Container } from '@material-ui/core'
import * as S from './styles'
import useStore from '../../services/store'
import api from '../../services/api'

export function Questions() {
  const [questions, setQuestions] = useState([])

  const numberSelected = useStore((state) => state.numSelect)

  useEffect(() => {
    async function fetch() {
      const { data } = await api.get(`api.php?amount=${numberSelected}`)
      setQuestions(data.results)
    }

    fetch()
  }, [numberSelected])

  console.log(questions)
  console.log(numberSelected)

  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      <S.WrapperQuestions>
        <Typography variant="h4">
          <strong>Questao 1: </strong>
          fjdksfndskljfnlsd {numberSelected}
        </Typography>

        <S.WrapperInputs>
          <div>
            <input id="answer1" type="radio" name="answer"></input>
            <S.Label for="answer">rgvrgtretertertertervtrtervter</S.Label>
          </div>
          <div>
            <input id="answer2" type="radio" name="answer"></input>
            <S.Label for="answer2">rgvrgtretertertertervtrtervter</S.Label>
          </div>
          <div>
            <input id="answer3" type="radio" name="answer"></input>
            <S.Label for="answer3">rgvrgtretertertertervtrtervter</S.Label>
          </div>
          <div>
            <input id="answer4" type="radio" name="answer"></input>
            <S.Label for="answer4">rgvrgtretertertertervtrtervter</S.Label>
          </div>
          <S.WrapperButton>
            <S.ButtonNext color="primary" variant="contained">
              Proxima
            </S.ButtonNext>
          </S.WrapperButton>
        </S.WrapperInputs>
      </S.WrapperQuestions>
    </Container>
  )
}
