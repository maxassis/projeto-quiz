import React from 'react'
import { Typography, Container, Button } from '@material-ui/core'
import * as S from './styles'

export function Questions() {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      <S.WrapperQuestions>
        <Typography variant="h4">
          <strong>Questao 1:</strong>
          fjdksfndskljfnlsdjfnsladfndslfdslkfnsdkjfnfkjfkds
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
