import { ButtonCntainer } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary" }: ButtonProps) {
  return (
    <div>
      <ButtonCntainer variant={variant}>Enviar</ButtonCntainer>
    </div>
  );
}
