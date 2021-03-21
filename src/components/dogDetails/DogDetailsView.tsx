import React from 'react';
import { useStyles } from './DogDetailsView.styles';
import { Avatar, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import ButtonView from '../button/ButtonView';
import { capitalize } from 'lodash';

interface Props {
    name: string;
    image: string;
    onScold: () => void;
    onBark: () => void;
}

function DogDetailsView(props: Props) {
    const classes = useStyles();
    const { name, image, onScold, onBark } = props;

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography variant="h5" component="h2">
                    {capitalize(name)}
                </Typography>
            </CardContent>
            <Avatar className={classes.avatar} alt={name} src={image} />
            <CardActions className={classes.cardActions}>
                <ButtonView label="Scold!" onClick={onScold} />
                <ButtonView label="Bark!" onClick={onBark} />
            </CardActions>
        </Card>
    );
}

export default DogDetailsView;
