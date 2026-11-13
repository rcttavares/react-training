import Avatar from '@mui/material/Avatar';
import Button from '../button/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { DogDetailsProps } from './DogDetails.types';
import PetsIcon from '@mui/icons-material/Pets';
import Typography from '@mui/material/Typography';
import { capitalize } from 'lodash';
import { styles } from './DogDetailsView.styles';

function DogDetailsView({
  name,
  image,
  onScold,
  onBark,
  disabled,
}: DogDetailsProps) {
  return (
    <Card sx={styles.card}>
      <CardContent sx={styles.cardContent}>
        <Typography variant='h5' component='h1' sx={styles.typography}>
          {capitalize(name) ? capitalize(name) : 'Name of breed'}
        </Typography>
      </CardContent>
      <Avatar sx={styles.avatar} alt={name} src={image}>
        <PetsIcon sx={styles.icon} />
      </Avatar>
      <CardActions sx={styles.cardActions}>
        <Button label='Scold!' onClick={onScold} disabled={disabled} />
        <Button label='Bark!' onClick={onBark} disabled={disabled} />
      </CardActions>
    </Card>
  );
}

export default DogDetailsView;
