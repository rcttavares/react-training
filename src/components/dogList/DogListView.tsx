import React from 'react';
import { useStyles } from './DogListView.styles';
import { List, Paper } from '@material-ui/core';
import { Dog } from '../../types/DogListType';
import DogListItem from './DogListItem';

interface Props {
    dogList: Dog[];
    selectedDog: Dog;
    onSelectDog: (breed: string) => void;
}

function DogListView(props: Props) {
    const classes = useStyles();
    const { dogList, selectedDog, onSelectDog } = props;

    return (
        <Paper className={classes.paper}>
            {dogList.map((dog, index) => {
                return (
                    <List key={index} className={classes.list}>
                        <DogListItem
                            name={dog.name}
                            image={dog.image}
                            scolded={dog.scolded}
                            selected={dog.name === selectedDog.name}
                            onSelectDog={onSelectDog}
                        />
                    </List>
                )
            })}
        </Paper>
    )
}

export default DogListView;
