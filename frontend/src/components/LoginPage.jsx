import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import CommonBar from './CommonBar/CommonBar';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
    // formBox:{
    //     border:'2px solid black',
    //     borderRadius:'5px'
    // },
    heading:{
        fontSize: '50px',
        fontFamily: 'Roboto',
        color:'white',
        fontStyle: 'bold',
    },
    subheading:{
        fontSize:'20px',
        color:'white',
        paddingBottom:'10px'
    },
    btn:{
        width:'520px',
        height:'60px',
        backgroundColor:'white',
        opacity:'0.9',
        borderRadius:' 8px',
        fontSize:'20px',
        fontFamily:'Times New Roman',
        '&:hover':{
            cursor:'pointer',
            color:'black',
            opacity:'1.0'
        }
    },
    last:{
        fontSize:'20px',
        color:'white',
        fontFamily:'Georgia'
    },
    backbtn:{
        border:'2px solid white',
        borderRadius:'5px',
        color:'white',
        float:'right',
        '&:hover':{
            color:'wheat',
            border:'2px solid wheat'
        }
    },
    main:{
        display:'flex',
        background: 'linear-gradient(45deg, #141e30  50%, #243b55 80%)',
    }
}));

const LoginPage = () => {
    const classes = useStyles();
    const [logged, setLogged] = useState(true);
    const navigate = useNavigate();

    const [userdetails, setUserdetails] = useState({
        email: "",
        password: "",
    });

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setUserdetails({
            ...userdetails,
            [name]: value,
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/login', userdetails)
        .then(res => {
            alert(res.data.status)
            const {status} = res.data;
            if(status === 'login successful') {
                navigate('/home');
            }
            if(status === 'user not found') {
                navigate('/register');
            }
            if(status == 'incorrect password') {
                setUserdetails({...userdetails, password: ""});
            }
        })
    }

    const handleCheck = () => {
        setLogged(!logged);
        window.localStorage.setItem("isLogged", logged);
    }

    

  return (
    <div className={classes.main}>
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 pb-2 right-column">
            <CommonBar />
        </div>
    {/* <div className="bg-gray-900"> */}
        <Grid container spacing={0} direction="column" className='' style={{margin: '80px'}}>
            <div className={classes.formBox} >
                <div className="p-6 space-y-4">
                    <Button href='/' variant='outlined' startIcon={<ExitToApp />} className={classes.backbtn}>Back</Button>
                    <h1 className={classes.heading}>
                        Login
                    </h1>
                    <form className="space-y-6" action="post">
                        <div>
                            <label for="email" className={classes.subheading}>Your email</label>
                            <input type="email" name="email" id="email" value={userdetails.email} onChange={changeHandler} className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="e-mail address" required />
                        </div>
                        <div>
                            <label for="password" className={classes.subheading}>Password</label>
                            <input type="password" name="password" id="password" value={userdetails.password} onChange={changeHandler} placeholder="••••••••" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                        </div>
                        <div>
                            <a href="#" className='hover:underline' style={{color:'whitesmoke', fontSize:'15px'}}>Forgot password?</a>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" onClick={handleCheck} type="checkbox" className="mr-2 w-4 h-4 border rounded focus:ring-3 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" required />
                            </div>
                            <div classNameName="ml-3 text-sm">
                                <label for="terms" className="font-light text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <button type="submit" onClick={handleLogin} className={classes.btn}>Login in</button>
                        <p className={classes.last}>
                            Doesn't have an account? 
                            <a href="/register" className="hover:underline" style={{color:'wheat'}}> Sign Up here</a>
                        </p>
                    </form>
                </div>
            </div>
        </Grid>
    {/* </div> */}
    </div>
  )
}

export default LoginPage