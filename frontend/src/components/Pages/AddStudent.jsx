import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
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

const AddStudent = () => {
    const navigate = useNavigate();
    const [newStudent, setNewStudent] = useState({
        name: "",
        fname: "",
        roll: "",
        classs: "",
        phnum: "",
        addresss: "",
    })
    const changeHandler = (e) => {
        const {name, value} = e.target;
        setNewStudent({
          ...newStudent,
          [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/add_student', newStudent)
        .then(res => {
            alert(res.data.status)
            navigate('/students');
        })
    }
    const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
                <h1 className={classes.heading}>
                    Add new Student
                </h1>
            <div className={classes.btn}>
            <Button onClick={() => {window.localStorage.removeItem("isLogged")}} href='/login' color="inherit" className={classes.button2}>Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
    <div className="bg-gray-900">
        <div className="px-6 mx-auto h-screen pt-6">
                    <div className="p-6 space-y-6">
                        <form className="space-y-6" action="post">
                            <div className='flex justify-between'>
                                <div className='w-full mr-4'>
                                    <label for="name" style={{fontStyle:'Helventica',color:'white',fontSize:'20px',marginBottom:'10px'}}>Student's Name</label>
                                    <input type="text" name="name" value={newStudent.name} onChange={changeHandler} id="name" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                                </div>
                                <div className='w-full ml-4'>
                                    <label for="fname" style={{fontStyle:'Helventica',color:'white',fontSize:'20px',marginBottom:'10px'}}>Father's Name</label>
                                    <input type="text" name="fname" value={newStudent.fname} onChange={changeHandler} id="fname" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='w-full mr-4'>
                                    <label for="roll" style={{fontStyle:'Helventica',color:'white',fontSize:'20px',marginBottom:'10px'}}>Roll Number</label>
                                    <input type="number" name="roll" value={newStudent.roll} onChange={changeHandler} id="roll" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                                </div>
                                <div className='w-full ml-4'>
                                    <label for="classs" style={{fontStyle:'Helventica',color:'white',fontSize:'20px',marginBottom:'10px'}}>Class</label>
                                    <input type="number" name="classs" value={newStudent.classs} onChange={changeHandler} id="classs" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                                </div>
                            </div>
                            <div>
                                <label for="phnum" style={{fontStyle:'Helventica',color:'white',fontSize:'20px',marginBottom:'10px'}}>Phone Number</label>
                                <input type="number" name="phnum" id="phnum" value={newStudent.phnum} onChange={changeHandler} className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label for="addresss" style={{fontStyle:'Helventica',color:'white',fontSize:'20px',marginBottom:'10px'}}>Address</label>
                                <input type="text" name="addresss" id="addresss" value={newStudent.addresss} onChange={changeHandler} className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                            </div>
                            <div className='flex justify-between'>
                                <button onClick={handleSubmit} type="submit" className="mr-4 w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-primary-700 focus:ring-primary-800">Add</button>
                                <a href='/students' className="ml-4 w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-primary-700 focus:ring-primary-800">Go back</a>
                            </div>
                        </form>
                    </div>
        </div>
    </div></Box>
  )
}

export default AddStudent