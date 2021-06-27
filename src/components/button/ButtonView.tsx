import Button from "@material-ui/core/Button";
import { ButtonProps } from "./Button.types";

function ButtonView({ label, onClick, disabled }: ButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      type="submit"
      variant="contained"
      color="primary"
    >
      {label}
    </Button>
  );
}

export default ButtonView;
