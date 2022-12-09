import { Card,CardContent,Button, Typography } from '@material-ui/core';
import React from 'react';
import CommonBar from '../CommonBar/CommonBar';
import useStyles from '../Home/HomeStyles';
import {Link} from 'react-router-dom';
import './Home.css'
import { Group, GroupOutlined,School,SchoolOutlined ,ArrowForward } from '@material-ui/icons';

const Home = () => {
    const classes = useStyles();
  return (
    <div className={classes.main}>
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 pb-2 right-column">
            <CommonBar />
        </div>
        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 ">
            <div className={classes.rowHeader}>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"></div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    {/* <nav className='flex justify-between'> */}
                        <Button variant='outlined' className={classes.logoutbtn}><Typography><a href='/login' onClick={() => {window.localStorage.removeItem("isLogged")}} >Logout</a></Typography></Button>
                    {/* </nav> */}
                </div>
            </div>
            <div className={classes.rowBody} >
                
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <h1 className='text-3xl font-bold text-white' style={{fontFamily: 'Times New Roman'}}>Access DataBase</h1>
                    {/* <p className='subtitle1'>To begin this journey, tell us what type of account you’d be opening.</p> */}
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                    <Link to={'/students'} style={{textDecoration: 'none'}}>
                            <Card className={classes.card1} id="cardWala">
                                <CardContent className={classes.rowCard}>
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 my-auto">
                                        <div className={classes.changeIcon1} id="icons">
                                            <Group className={classes.accountCircle} id="accountCircle" />
                                            <GroupOutlined className={classes.accountCircle} id="accountOutlined" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                        <Typography className={classes.heading} variant='h5'>Student</Typography>
                                        <span style={{color: 'gray'}}>
                                            Access students database over here!
                                        </span>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 my-auto">
                                        <div id="arrow">
                                            <ArrowForward className={classes.arrowForward} />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link to={'/teachers'} style={{textDecoration: 'none'}}>
                            <Card className={classes.card2} id="cardWala">
                                <CardContent className={classes.rowCard}>
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 my-auto">
                                        <div className={classes.changeIcon1} id="icons">
                                            <School className={classes.busineesCenter} id="bussinessCenter"/>
                                            <SchoolOutlined className={classes.busineesCenter} id="businessOutlined" />
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                        <Typography className={classes.heading} variant='h5'>Teacher</Typography>
                                        <span style={{color: 'gray'}}>
                                            Access Teachers database over here!
                                        </span>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 my-auto">
                                        <div id="arrow">
                                            <ArrowForward className={classes.arrowForward} />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Home