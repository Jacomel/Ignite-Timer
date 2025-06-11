import { ButtonCntainer, ButtonVariants } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariants;
}

export function Button({ variant = "primary" }: ButtonProps) {
  return (
    <div>
      <ButtonCntainer variant={variant}>Enviar</ButtonCntainer>
    </div>
  );
}
