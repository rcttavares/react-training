import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  card: {
    textAlign: 'center',
    padding: '20px',
  },
  cardContent: {
    padding: '0 !important',
  },
  typography: {
    fontWeight: 600,
    marginBottom: '20px',
  },
  avatar: {
    margin: '0 auto',
    width: '188px !important',
    height: '188px !important',
  },
  icon: {
    width: '120px',
    height: '120px',
  },
  cardActions: {
    justifyContent: 'center',
    padding: '0 !important',
    marginTop: '20px',
  },
});
