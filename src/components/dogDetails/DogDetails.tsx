import React, { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import DogDetailsView from './DogDetailsView';

interface Props {
    name: string;
    image: string;
    onScold: () => void;
    disabled: boolean;
}

function DogDetails(props: Props) {
    const { name, image, onScold, disabled } = props;
    const { enqueueSnackbar } = useSnackbar();

    const onBark = useCallback(() => {
        enqueueSnackbar("Woof! Woof!", {
            anchorOrigin: {
                vertical: "top",
                horizontal: "center"
            },
        }
    )},[enqueueSnackbar]);

    return (
        <DogDetailsView
            name={name}
            image={image}
            onScold={onScold}
            onBark={onBark}
            disabled={disabled}
        />
    );
}

export default DogDetails;
