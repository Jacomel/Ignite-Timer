import styled from "styled-components";

export type ButtonVariants = "primary" | "secondary" | "danger" | "success";

interface ButtonCntainerProps {
  variant: ButtonVariants;
}

const ButtonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonCntainer = styled.button<ButtonCntainerProps>`
  width: 100px;
  height: 50px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
`;
