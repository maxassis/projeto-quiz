import styled from "styled-components";

export const WrapperConfirmButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  padding: 4rem;
  border-radius: 3rem;
  border: 3px solid green;
`;

export const ButtonConfirm = styled.button`
  background-color: #f77f00d9;
  padding: 6px 26px;
  border-radius: 9px;
  transition: all 0.3s;

  :hover {
    background-color: #ff7600;
    color: white;
  }
`;

export const ButtonCancel = styled.button`
  background-color: #0c4271;
  padding: 6px 26px;
  border-radius: 9px;
  color: white;
  transition: all 0.3s;

  :hover {
    background-color: #0a1931;
    color: white;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  h1 {
    font-size: 3rem;
  }
`;
