import ButtonView from "./ButtonView";
import { ButtonProps } from "./Button.types";

function Button({ label, onClick, disabled }: ButtonProps) {
  return <ButtonView label={label} onClick={onClick} disabled={disabled} />;
}

export default Button;
