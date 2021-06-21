import React from 'react'
import { Typography, Container, Button } from '@material-ui/core'
import * as S from './styles'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <Container>
      <S.Title>
        <Typography variant="h4" align="center">
          Teste seus conhecimentos gerais no questionario <br />
          WAPROJECT
        </Typography>
      </S.Title>

      <S.Main>
        <S.WrapperSubtitle>
          <Typography variante="h6">
            Quantas questões você quer responder?
          </Typography>

          <S.InputNumber
            type="number"
            required
            placeholder="digite o numero de questões"
            fullWidth
            margin="dense"
          ></S.InputNumber>
        </S.WrapperSubtitle>

        <S.WrapperButton>
          <Link to="/confirm" style={{ textDecoration: 'none' }}>
            <Button color="primary" variant="contained">
              Proximo
            </Button>
          </Link>
        </S.WrapperButton>
      </S.Main>
    </Container>
  )
}
