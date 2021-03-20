import React from 'react';
import { useStyles } from './DogListView.styles';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper } from '@material-ui/core';
import { capitalize } from 'lodash';
import { Dog } from '../../types/DogListType';

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
                        <ListItem 
                            button
                            selected={dog.name === selectedDog.name}
                            onClick={() => onSelectDog(dog.name)}
                        >
                            <ListItemAvatar>
                                <Avatar alt={dog.name} src={dog.image} />
                            </ListItemAvatar>
                            <ListItemText primary={capitalize(dog.name)} />
                        </ListItem>
                    </List>
                )
            })}
        </Paper>
    )
}

export default DogListView;
