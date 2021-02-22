import React, { ReactNode } from 'react';
import CustomButton from '@material-ui/core/Button';

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: Props) {
  return (
    <CustomButton onClick={onClick} variant="contained" color="primary">
      {children}
    </CustomButton>
  );
}

export default Button;
