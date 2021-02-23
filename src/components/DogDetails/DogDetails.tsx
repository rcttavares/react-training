import React from 'react';
import { useStyles } from './DogDetails.styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '../Button/Button';

interface Props {
    name: string;
    image: string;
    onBark: () => void;
}

function DogDetails(props: Props) {
    const classes = useStyles();
    const { name, image, onBark } = props;

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
                <Button label="Bark!" onClick={onBark} />
            </CardActions>
        </Card>
    );
}

export default DogDetails;
