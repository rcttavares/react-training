import Avatar from '@material-ui/core/Avatar';
import Button from '../button/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { DogDetailsProps } from './DogDetails.types';
import PetsIcon from '@material-ui/icons/Pets';
import Typography from '@material-ui/core/Typography';
import { capitalize } from 'lodash';
import { useStyles } from './DogDetailsView.styles';

function DogDetailsView({
  name,
  image,
  onScold,
  onBark,
  disabled,
}: DogDetailsProps) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant='h5' component='h1' className={classes.typography}>
          {capitalize(name) ? capitalize(name) : 'Name of breed'}
        </Typography>
      </CardContent>
      <Avatar className={classes.avatar} alt={name} src={image}>
        <PetsIcon className={classes.icon} />
      </Avatar>
      <CardActions className={classes.cardActions}>
        <Button label='Scold!' onClick={onScold} disabled={disabled} />
        <Button label='Bark!' onClick={onBark} disabled={disabled} />
      </CardActions>
    </Card>
  );
}

export default DogDetailsView;
