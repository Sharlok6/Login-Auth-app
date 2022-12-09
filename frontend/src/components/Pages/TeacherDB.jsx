import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { AppBar,Box,Toolbar,Button,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { PersonAdd } from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
  btn:{
    display:'flex',
    marginLeft:'750px',
    //marginRight:'50px'
  },
  navs:{
    display:'flex',
    marginTop:'10px'
  },
  heads:{
    marginRight:'30px',
  },
  button1:{
    border:'2px solid white',
    BorderRadius:'5px',
    margin:'10px',
    padding:'5px 15px',
    '&:hover':{
      color:'wheat',
      border:'2px solid wheat',
      BorderRadius:'5px'
    }
  },
  button2:{
    margin:'10px',
    padding:'5px 15px',
    '&:hover':{
      color:'wheat',
    }
  },
  link:{
    '&:hover':{
      color:'wheat',
    }
  }
}));

const TeacherDB = () => {
  const [datafound, setDatafound] = useState(false);
  const [data, setData] = useState([]);
  const getting = async () => {
    try {
      let res = await axios.get('http://localhost:5000/teachers');
      console.log(res.data)
      setData(res.data);
      setDatafound(true);
    } catch (error) {
      console.log("Error", error);
    }
  }
  useEffect(() => {
    getting();
  },[])

  const deleteTeacher = async (_id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/teacher/${_id}`);
      alert(res.data.status);
    } catch (error) {
      alert('Error while deleting');
    }
    getting();
  }
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div className='flex'>
          <div className={classes.navs}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={classes.heads}>
            <Link to='/teachers' className={classes.link}>Teachers</Link>
          </Typography >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={classes.heads}>
            <Link to='/students' className={classes.link}>Students</Link>
          </Typography >
          </div>
          <div className={classes.btn}>
            <Button startIcon={<PersonAdd />} href='/add_teacher' color="inherit" className={classes.button1} >Add</Button>
            <Button onClick={() => {window.localStorage.removeItem("isLogged")}} href='/login' color="inherit" className={classes.button2}>Logout</Button>
          </div>
          </div>
        </Toolbar>
      </AppBar>
    
    <div className="flex bg-gray-900">
      <div className="px-6 mx-auto h-screen pt-6">
      <div>
        <Typography variant='h5' style={{color:'white', marginTop:'20px'}}>Teacher's DataBase</Typography>
      </div>
          {
            datafound ?
              data.length !== 0 ?
              <table class="mt-5 text-white w-full text-center table-fixed">
                <thead className='border-b-2 text-lg'>
                  <tr>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Class</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {
                    data.map((el, ind) => {
                      const {_id, type, name, subject, ph, addresss, classs} = el;
                      if(type === 'teacher') {
                        return (
                            <tr key={ind} className='my-2'>
                              <td>{name}</td>
                              <td>{subject}</td>
                              <td>{classs}</td>
                              <td>{ph}</td>
                              <td>{addresss}</td>
                              <td>
                                <a href={`/teacher/edit/${_id}`} className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-3 py-1 text-center text-md mr-2'>Edit</a>
                                <button onClick={() => deleteTeacher(_id)} className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-3 py-1 text-center text-md ml-2'>Delete</button>
                              </td>
                            </tr>
                          )
                      }
                    })
                  }
                </tbody>
              </table>
              :
              <h1 className='text-2xl font-bold text-white text-center mt-20'>No Teacher Added</h1>
            :
            <h1 className='text-2xl font-bold text-white text-center mt-20'>Loading...</h1>
          }
      </div>
    </div></Box>
  )
}

export default TeacherDB