import React from 'react';
import { useStyles } from './DogDetailsView.styles';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import ButtonView from '../button/ButtonView';

interface Props {
    name: string;
    image: string;
    onScold: () => void;
    onBark: () => void;
    children: React.ReactElement;
}

function DogDetailsView(props: Props) {
    const classes = useStyles();
    const { name, image, onScold, onBark, children } = props;

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
            </CardContent>
            <CardMedia className={classes.cardMedia} component="img" image={image} alt="Dog" title="Dog" />
            <CardActions className={classes.cardActions}>
                <ButtonView label="Scold!" onClick={onScold} />
                <ButtonView label="Bark!" onClick={onBark} />
            </CardActions>
            <CardActions className={classes.cardActions}>
                {children}
            </CardActions>
        </Card>
    );
}

export default DogDetailsView;
