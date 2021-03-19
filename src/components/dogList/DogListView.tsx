import React from 'react';
import { useStyles } from './DogListView.styles';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper } from '@material-ui/core';
import { capitalize } from 'lodash';
import { Dog } from '../../types/DogListType';

interface Props {
    dogList: Dog[];
}

function DogListView(props: Props) {
    const classes = useStyles();
    const { dogList } = props;

    return (
        <Paper className={classes.paper}>
            {dogList.map((dog, index) => {
                return (
                    <List key={index} className={classes.list}>
                        <ListItem button>
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
