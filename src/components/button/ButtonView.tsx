import React from 'react';
import CustomButton from '@material-ui/core/Button';

interface Props {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

function ButtonView(props: Props) {
  const { label, onClick, disabled } = props;

  return (
    <CustomButton onClick={onClick} disabled={disabled} type="submit" variant="contained" color="primary">
      {label}
    </CustomButton>
  );
}

export default ButtonView;
