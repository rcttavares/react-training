import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    loading: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white !important'
    }
});
