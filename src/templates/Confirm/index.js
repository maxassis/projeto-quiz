import React from 'react'
import { Typography, Button } from '@material-ui/core'
import * as S from './styles'
import { Link } from 'react-router-dom'

export function Confirm() {
  return (
    <S.ContainerConfirm>
      <S.ContainerForm>
        <Typography variant="h4">Confirmar</Typography>

        <S.WrapperConfirmButtons>
          <Button
            color="primary"
            variant="contained"
            size="large"
            style={{ width: '100%' }}
          >
            Start
          </Button>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{ width: '100%' }}
            >
              Cancel
            </Button>
          </Link>
        </S.WrapperConfirmButtons>
      </S.ContainerForm>
    </S.ContainerConfirm>
  )
}
