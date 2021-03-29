import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    card: {
        textAlign: 'center'
    },
    cardContent: {
        padding: 20
    },
    title: {
        fontWeight: 600
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
        padding: 20
    }
});
