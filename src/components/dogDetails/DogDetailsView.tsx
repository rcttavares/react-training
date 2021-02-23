import React from 'react';
import { useStyles } from './DogDetailsView.styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ButtonView from '../button/ButtonView';

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
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent style={{ padding: 10 }}>
                    <Typography variant="h5" component="h2">
                        {name}
                    </Typography>
                </CardContent>
                <img src={image} alt="Dog" style={{ width: 'inherit' }} />
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center' }}>
                <ButtonView label="Scold!" onClick={onScold} />
                <ButtonView label="Bark!" onClick={onBark} />
            </CardActions>
        </Card>
    );
}

export default DogDetailsView;
