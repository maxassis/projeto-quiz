import React from "react";
import useStore from "../../services/store";
import { Container } from "@material-ui/core";

export function Result() {
  const arrayResults = useStore((state) => state.finalResult);

  return (
    <Container>
      <h1>Resultado</h1>
    </Container>
  );
}
