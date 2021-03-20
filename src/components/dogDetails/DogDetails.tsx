import React, { useCallback, useState } from 'react';
import { useSnackbar } from 'notistack';
import DogDetailsView from './DogDetailsView';

interface Props {
    name: string;
    image: string;
}

function DogDetails(props: Props) {
    const { name, image } = props;
    const { enqueueSnackbar } = useSnackbar();

    const [count, setCount] = useState(0);

    const scold = useCallback(() => {
        setCount(count + 1)
    },[count]);

    const bark = useCallback(() => {
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
            onScold={scold}
            onBark={bark}
        >
            <p>Scold: {count}</p>
        </DogDetailsView>
    );
}

export default DogDetails;
