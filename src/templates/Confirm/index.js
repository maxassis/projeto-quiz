import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'
import {Container} from '../../components/container'

export function Confirm() {
  return (
    <Container>
      <S.ContainerForm>    

        <S.WrapperConfirmButtons>
        <h1>Confirmar</h1>

          <Link to="/questions" style={{ textDecoration: 'none' }}>
            <S.ButtonConfirm
              color="primary"
              variant="contained"
              size="large"
              style={{ width: '100%' }}
            >
              Iniciar
            </S.ButtonConfirm>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <S.ButtonCancel
              variant="contained"
              color="secondary"
              size="large"
              style={{ width: '100%' }}
            >
              Cancelar
            </S.ButtonCancel>
          </Link>
        </S.WrapperConfirmButtons>
      </S.ContainerForm>
    </Container>
  )
}
