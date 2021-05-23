import { useStyles } from './DogDetailsView.styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import PetsIcon from '@material-ui/icons/Pets';
import { capitalize } from 'lodash';
import Button from '../button/Button';

interface Props {
  name: string;
  image: string;
  onScold: () => void;
  onBark: () => void;
  disabled: boolean;
}

function DogDetailsView({ name, image, onScold, onBark, disabled }: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" component="h1" className={classes.typography}>
          {capitalize(name) ? capitalize(name) : 'Name of breed'}
        </Typography>
      </CardContent>
      <Avatar className={classes.avatar} alt={name} src={image}>
        <PetsIcon className={classes.icon} />
      </Avatar>
      <CardActions className={classes.cardActions}>
        <Button label="Scold!" onClick={onScold} disabled={disabled} />
        <Button label="Bark!" onClick={onBark} disabled={disabled} />
      </CardActions>
    </Card>
  );
}

export default DogDetailsView;
