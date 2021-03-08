import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    card: {
        textAlign: 'center'
    },
    cardContent: {
        padding: '10px !important' 
    },
    cardMedia: {
        width: '16em !important',
        height: 'auto',
        margin: '0 auto',
        border: '2px solid black',
        borderRadius: '4px'
    },
    cardActions: {
        justifyContent: 'center'
    }
});
