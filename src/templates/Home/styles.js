import styled from "styled-components";

export const WrapperMain = styled.div`
  width: 100%;
`;

export const WrapperLottie = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 1rem;
`;

export const Main = styled.div`
  background-color: white;
  border: 3px solid green;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0px;
  width: 100%;
  max-width: 77%;
  margin: 2rem auto;
`;

export const WrapperButton = styled.div`
  margin-top: 4.375rem;
  display: flex;
  justify-content: center;

  button {
    background-color: #f77f00d9;
    padding: 6px 26px;
    border-radius: 9px;
  }
`;

export const WrapperSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.375rem;

  h3 {
    color: black;
    font-size: 2rem;
  }
`;

export const InputNumber = styled.input`
  text-align: center;
  font-size: 1.3125rem;
  background-color: #f7cf877a;
  padding: 7px;
  border-radius: 9px;
  margin-top: 8px;
  outline: 0;

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;
