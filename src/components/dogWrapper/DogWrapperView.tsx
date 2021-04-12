import React from 'react';
import { Dog } from '../../types/DogListType';
import { useStyles } from './DogWrapperView.styles';
import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import DogFilter from '../dogFilter/DogFilter';
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
    selectedDogFilter: string;
    onSelectDogFilter: (breedFilter: string) => void;
}

function DogWrapperView(props: Props) {
    const classes = useStyles();
    const { name, image, onScold, disabled, dogList, selectedDog, onSelectDog, loading, selectedDogFilter, onSelectDogFilter } = props;

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DogFilter
                        dogList={dogList}
                        onSelectDogFilter={onSelectDogFilter}
                    />
                </Grid>
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
                        <Skeleton variant="rect" animation="wave" height={336} className={classes.loading} />
                    ) : (
                        <DogList
                            dogList={dogList}
                            selectedDog={selectedDog}
                            onSelectDog={onSelectDog}
                            selectedDogFilter={selectedDogFilter}
                        />
                    )}
                </Grid>
            </Grid>
        </div>
    )
}

export default DogWrapperView;
