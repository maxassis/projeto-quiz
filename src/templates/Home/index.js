import React, { useState } from 'react'
import { Typography, Container, Button } from '@material-ui/core'
import * as S from './styles'
import useStore from '../../services/store'
import { useHistory } from 'react-router-dom'

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
    <Container>
      <S.Title>
        <Typography variant="h4" align="center">
          Teste seus conhecimentos gerais no questionario <br />
          WAPROJECT
        </Typography>
      </S.Title>

      <S.Main>
        <form style={{ textAlign: 'center' }}>
          <S.WrapperSubtitle>
            <Typography variante="h6">
              Quantas questões você quer responder?
            </Typography>

            <S.InputNumber
              type="number"
              required
              placeholder="digite o numero de questões"
              fullWidth
              value={num}
              margin="dense"
              onChange={(e) => setNum(e.target.value)}
            />
          </S.WrapperSubtitle>

          <S.WrapperButton>
            <Button
              color="primary"
              variant="contained"
              onClick={nextPage}
              type="submit"
            >
              Proximo
            </Button>
          </S.WrapperButton>
        </form>
      </S.Main>
    </Container>
  )
}
