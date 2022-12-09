import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme)=>({
    rowBody: {
        marginTop: 100,
        marginLeft: 120,
        marginRight: 60,
        [theme.breakpoints.down('xs')]: {
            marginLeft: 30,
            marginRight: 30,
        },
        //border: '5px solid black',
        width: 600
    },
    rowHeader: {
        display: 'flex',
        marginTop: 30,
        [theme.breakpoints.down('xs')]: {
            marginLeft: 30
        }
    },
    card1: {
        marginTop: 25,
       marginBottom: 25,
       height: 110,
    },
    card2: {
        marginTop: 25,
        marginBottom: 25,
        height: 110
    },
    rowCard: {
        display: 'flex',

    },
    accountCircle: {
        width: 30,
        height: 30,
        color: '#1565D8'
    },
    busineesCenter: {
        width: 30,
        height: 30,
        color: '#1565D8'
    },
    heading2: {
        fontSize: 25,
        fontWeight: 500,
        color: '#FFFFFF',
        fontFamily: 'Roboto'
    },
    // subheading: {
    //     fontSize: 8,
    //     fontWeight: 400
    // },
    arrowForward: {
        color: '#1565D8'
    },
    main:{
        display:'flex',
        background: 'linear-gradient(45deg, #141e30  50%, #243b55 80%)',
    }
}));

export default useStyles;