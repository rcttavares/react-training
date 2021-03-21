import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    card: {
        textAlign: 'center'
    },
    cardContent: {
        padding: '10px !important' 
    },
    avatar: {
        margin: '0 auto',
        width: '200px !important',
        height: '200px !important'
    },
    icon: {
        width: '120px',
        height: '120px'
    },
    cardActions: {
        justifyContent: 'center',
        margin: 16
    }
});
