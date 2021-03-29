import React from 'react';
import { Dog } from '../../types/DogListType';
import { useStyles } from './DogWrapperView.styles';
import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import DogDetails from '../dogDetails/DogDetails';
import DogList from '../dogList/DogList';

interface Props {
    name: string;
    image: string;
    onScold: () => void;
    disabled: boolean;
    dogList: Dog[];
    selectedDog: Dog;
    onSelectDog: (breed: string) => void;
    loading?: boolean;
}

function DogWrapperView(props: Props) {
    const classes = useStyles();
    const { name, image, onScold, disabled, dogList, selectedDog, onSelectDog, loading } = props;

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <DogDetails
                        name={name}
                        image={image}
                        onScold={onScold}
                        disabled={disabled}
                    />
                </Grid>
                <Grid item xs={8}>
                    {loading ? (
                        <Skeleton variant="rect" animation="wave" height={348} className={classes.loading} />
                    ) : (
                        <DogList
                            dogList={dogList}
                            selectedDog={selectedDog}
                            onSelectDog={onSelectDog}
                        />
                    )}
                </Grid>
            </Grid>
        </div>
    )
}

export default DogWrapperView;
