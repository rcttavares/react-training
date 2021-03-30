import React from 'react';
import ButtonView from './ButtonView';

interface Props {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
}

function Button(props: Props) {
  const { label, onClick, disabled } = props;

    return (
        <ButtonView
            label={label}
            onClick={onClick}
            disabled={disabled}
        />
    );
}

export default Button;
