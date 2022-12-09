import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import CommonBar from './CommonBar/CommonBar';
import { makeStyles } from '@material-ui/styles';
import { Grid,Button } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
    heading:{
        fontSize: '50px',
        fontFamily: 'Roboto',
        color:'white',
        fontStyle: 'bold'
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
        fontStyle:'bold',
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
}))

const SignUpPage = () => {
    const navigate = useNavigate();
    const [userdetails, setUserdetails] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const goBack = ()=>{
        navigate('/Front');
    }
    const changeHandler = (e) => {
        const {name, value} = e.target;
        setUserdetails({
            ...userdetails,
            [name]: value,
        })
    }

    const registerHandle = async (e)=> {
        e.preventDefault();
        const {name, email, password, confirmPassword} = userdetails;
        if(password !== confirmPassword) {
            alert('Incorrect Password');
            setUserdetails({...userdetails, password: "", confirmPassword: ""});
        }
        else {
            if(name && email && password && (password === confirmPassword)) {
                axios.post('http://localhost:5000/register', userdetails)
                .then(res => {
                    alert(res.data.status);  
                    navigate('/login');
                })
            }
        }
    }
    const classes=useStyles();
  return (
    <div className={classes.main}>
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 pb-2 right-column">
            <CommonBar />
        </div>
        <Grid container spacing={0} direction="column" className='' style={{margin: '80px'}}>
            <div >
                <div className="p-6 space-y-4">
                <Button href='/' variant='outlined' startIcon={<ExitToApp />} className={classes.backbtn}>Back</Button>
                    <h1 className={classes.heading}>
                        Sign Up
                    </h1>
                    <form className="space-y-6" action="post">
                        <div>
                            <label for="name" className={classes.subheading}>Your name</label>
                            <input type="text" name="name" id="name" value={userdetails.name} onChange={changeHandler} className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Full Name" required />
                        </div>
                        <div>
                            <label for="email" className={classes.subheading}>Your email</label>
                            <input type="email" name="email" id="email" value={userdetails.email} onChange={changeHandler} className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="E-mail " required />
                        </div>
                        <div>
                            <label for="password" className={classes.subheading}>Password</label>
                            <input type="password" name="password" id="password" value={userdetails.password} onChange={changeHandler} placeholder="••••••••" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                        </div>
                        <div>
                            <label for="confirm-password" className={classes.subheading}>Confirm password</label>
                            <input type="password" name="confirmPassword" id="confirm-password" value={userdetails.confirmPassword} onChange={changeHandler} placeholder="••••••••" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" type="checkbox" className="mr-2 w-4 h-4 border rounded focus:ring-3 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" />
                            </div>
                            <div classNameName="ml-3 text-sm">
                                <label for="terms" className="font-light text-gray-300">I accept the <a className='hover:underline' style={{color:'whitesmoke', fontSize:'15px'}} href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" onClick={registerHandle} className={classes.btn}>Create an account</button>
                        <p className={classes.last}>
                            Already have an account? <a href="/login" className="hover:underline" style={{color:'wheat'}}>Login here</a>
                        </p>
                    </form>
                </div>
            </div>
        </Grid>
    </div>
  )
}

export default SignUpPage