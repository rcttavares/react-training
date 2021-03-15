import React from 'react';
import { useStyles } from './DogListView.styles';
import { List, ListItem, ListItemText, Paper } from '@material-ui/core';
import { capitalize } from 'lodash';

interface Props {
    dogList: string[];
}

function DogListView(props: Props) {
    const classes = useStyles();
    const { dogList } = props;

    return (
        <Paper className={classes.paper}>
            {dogList.map(dog => {
                return (
                    <List key={dog} className={classes.list}>
                        <ListItem button>
                            <ListItemText primary={capitalize(dog)} />
                        </ListItem>
                    </List>
                )
            })}
        </Paper>
    )
}

export default DogListView;
