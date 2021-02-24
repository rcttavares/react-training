import React from 'react';
import CustomButton from '@material-ui/core/Button';

interface Props {
  label: string;
  onClick?: () => void;
}

function ButtonView(props: Props) {
  const { label, onClick } = props;

  return (
    <CustomButton onClick={onClick} type="submit" variant="contained" color="primary">
      {label}
    </CustomButton>
  );
}

export default ButtonView;
