import React from 'react';
import { useStyles } from './DogDetailsView.styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
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
            <CardActionArea>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5" component="h2">
                        {name}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    image={image}
                    alt="Dog"
                    title="Dog"
                />
            </CardActionArea>
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
