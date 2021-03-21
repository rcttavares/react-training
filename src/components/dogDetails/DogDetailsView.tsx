import React from 'react';
import { useStyles } from './DogDetailsView.styles';
import { Avatar, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import ButtonView from '../button/ButtonView';
import { capitalize } from 'lodash';

interface Props {
    name: string;
    image: string;
    onScold: () => void;
    onBark: () => void;
    disabled: boolean;
}

function DogDetailsView(props: Props) {
    const classes = useStyles();
    const { name, image, onScold, onBark, disabled } = props;

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography variant="h5" component="h2">
                    {capitalize(name) ? capitalize(name) : 'No dog selected!'}
                </Typography>
            </CardContent>
            <Avatar className={classes.avatar} alt={name} src={image}>
                <PetsIcon className={classes.icon} />
            </Avatar>
            <CardActions className={classes.cardActions}>
                <ButtonView label="Scold!" onClick={onScold} disabled={disabled} />
                <ButtonView label="Bark!" onClick={onBark} disabled={disabled} />
            </CardActions>
        </Card>
    );
}

export default DogDetailsView;
