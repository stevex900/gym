import styled from "styled-components";

export const MainContainer = styled.div`
  /* background-color: red; */
`;
export const PrimaryContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 290px;
  /* background-color: red; */
`;
export const SecondaryContainer = styled.div``;
export const TertiaryContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const InputContainer = styled.div``;
export const QuinaryContainer = styled.div`
  margin-left: 7px;
`;

export const Form = styled.form``;
export const Input = styled.input`
  background-color: #e9e9e9;
  height: 35px;
  width: 250px;
  margin-bottom: 10px;
  border: none;
  &:focus {
    outline: none;
  }
`;
export const Textarea = styled.textarea``;
export const ButtonContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  /* bottom: 50px; */
  display: flex;
`;
export const Button = styled.button`
  margin-left: 4px;
  margin-right: 4px;
  margin-top: 8px;
  display: block;
  height: 40px;
  width: 120px;
  background-color: black;
  font-size: 15px;
  color: white;
  border: none;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
`;
export const P = styled.p``;
