import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    rowRecClass: {
        display: 'flex',
        marginTop: 100,
        marginLeft: 60,
        marginRight: 60,
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    angleClass: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        marginTop: 40,
        marginLeft: 60,
        marginRight: 60
    }
}));

export default useStyles;