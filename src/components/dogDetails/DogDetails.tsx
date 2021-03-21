import React, { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import DogDetailsView from './DogDetailsView';

interface Props {
    name: string;
    image: string;
    onScold: () => void;
}

function DogDetails(props: Props) {
    const { name, image, onScold } = props;
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
        />
    );
}

export default DogDetails;
