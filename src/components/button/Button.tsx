import ButtonView from './ButtonView';

interface Props {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

function Button({ label, onClick, disabled }: Props) {
  return (
    <ButtonView
      label={label}
      onClick={onClick}
      disabled={disabled}
    />
  );
}

export default Button;
