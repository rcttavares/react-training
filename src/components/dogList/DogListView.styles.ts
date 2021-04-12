import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    paper: {
        maxHeight: '336px', 
        overflow: 'auto'
    },
    list: {
        padding: 0,
        '&:hover': {
            background: '#EAECEE'
        }
    }
});
