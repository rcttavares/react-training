import React from 'react';
import CustomButton from '@material-ui/core/Button';

interface Props {
  label: string;
  onClick?: () => void;
}

function Button(props: Props) {
  const { label, onClick } = props;

  return (
    <CustomButton onClick={onClick} variant="contained" color="primary">
      {label}
    </CustomButton>
  );
}

export default Button;
