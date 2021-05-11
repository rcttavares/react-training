import Button from '@material-ui/core/Button';

interface Props {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

function ButtonView({ label, onClick, disabled }: Props) {
  return (
    <Button onClick={onClick} disabled={disabled} type="submit" variant="contained" color="primary">
      {label}
    </Button>
  );
}

export default ButtonView;
