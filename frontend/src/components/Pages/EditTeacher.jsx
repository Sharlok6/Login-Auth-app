import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { AppBar,Box,Toolbar,Button,Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    btn:{
        marginLeft:'800px',
        //marginRight:'50px'
      },
    heading:{
        fontSize:'30px',
        alignSelf:'center',
        marginLeft:'30px'
    },
    button2:{
        margin:'10px',
        padding:'5px 15px',
        '&:hover':{
          color:'wheat',
        }
      },
}))

const EditTeacher = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [dt, setDT] = useState({});
    const {id} = useParams();
    const loadDetails = async () => {
        try {
            const user = await axios.get(`http://localhost:5000/teacher/edit/${id}`);
            setDT(user.data);
        } catch (error) {
            console.log('Error', error);
        }
    }

    useEffect(() => {
        loadDetails();
    },[])

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setDT({
            ...dt,
            [name]: value,
        })
    }

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:5000/teacher/edit/${id}`, dt)
            alert(res.data.status)
        } catch (error) {
            console.log('error while editing teacher', error);
        }
        navigate('/teachers');
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
                <h1 className={classes.heading}>
                    Edit Teacher
                </h1>
            <div className={classes.btn}>
            <Button onClick={() => {window.localStorage.removeItem("isLogged")}} href='/login' color="inherit" className={classes.button2}>Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
    <section className="bg-gray-900">
        <div className="px-6 mx-auto h-screen pt-6">
                    <div className="p-6 space-y-6">
                        <form className="space-y-6" action="post">
                            <div className='flex justify-between'>
                                <div className='w-full mr-4'>
                                    <label for="name" style={{fontStyle:'Helventica',color:'white',fontSize:'20px',marginBottom:'10px'}}>Teacher's Name</label>
                                    <input type="text" value={dt.name} onChange={(e) => changeHandler(e)} name="name" id="name" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                                </div>
                                <div className='w-full ml-4'>
                                    <label for="subject" style={{fontStyle:'Helventica',color:'white',fontSize:'20px',marginBottom:'10px'}}>Subject</label>
                                    <input type="text" value={dt.subject} onChange={(e) => changeHandler(e)} name="subject" id="subject" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='w-full mr-4'>
                                    <label for="classs" style={{fontStyle:'Helventica',color:'white',fontSize:'20px',marginBottom:'10px'}}>Class</label>
                                    <input type="number" value={dt.classs} onChange={(e) => changeHandler(e)} name="classs" id="classs" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                                </div>
                                <div className='w-full ml-4'>
                                    <label for="ph" style={{fontStyle:'Helventica',color:'white',fontSize:'20px',marginBottom:'10px'}}>Phone number</label>
                                    <input type="number" value={dt.ph} onChange={(e) => changeHandler(e)} name="ph" id="ph" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required/>
                                </div>
                            </div>
                            <div>
                                <label for="addresss" style={{fontStyle:'Helventica',color:'white',fontSize:'20px',marginBottom:'10px'}}>Address</label>
                                <input type="text" value={dt.addresss} onChange={(e) => changeHandler(e)} name="addresss" id="addresss" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                            </div>
                            <div className='flex justify-between'>
                                <button type="submit" onClick={handleSave} className="mr-4 w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-primary-700 focus:ring-primary-800">Save</button>
                                <a href='/teachers' className="ml-4 w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-primary-700 focus:ring-primary-800">Go back</a>
                            </div>
                        </form>
                    </div>
        </div>
    </section>
    </Box>
  )
}

export default EditTeacher