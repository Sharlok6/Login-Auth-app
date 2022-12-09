import React from 'react';
import CommonBar from '../CommonBar/CommonBar';
import useStyles from './Styles';
import { Card,CardContent,Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';
import {AccountCircle , AccountCircleOutlined,ArrowForward,PersonOutline, PersonRounded} from '@material-ui/icons';
import './FrontStyles.css';
//flex bg-gray-800
export default function Front () {
    const classes = useStyles();
    return (
    <div className={classes.main}>
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 pb-2 right-column">
            <CommonBar />
        </div>
        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 left-column">

            <div className={classes.rowHeader}>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"></div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <Typography variant='h6' className={classes.heading2}>Welcome to the database!</Typography>
                    </div>
                </div>
            <div className={classes.rowBody} >
                
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <h1 className='text-3xl font-bold text-white' style={{fontFamily: 'Times New Roman'}}>Student-Teacher DataBase</h1>
                    {/* <p className='subtitle1'>To begin this journey, tell us what type of account you’d be opening.</p> */}
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                    <Link to={'/login'} style={{textDecoration: 'none'}}>
                            <Card className={classes.card1} id="cardWala">
                                <CardContent className={classes.rowCard}>
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 my-auto">
                                        <div className={classes.changeIcon1} id="icons">
                                            <AccountCircle className={classes.accountCircle} id="accountCircle" />
                                            <AccountCircleOutlined className={classes.accountCircle} id="accountOutlined" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                        <Typography className={classes.heading} variant='h5'>Login</Typography>
                                        <span style={{color: 'gray'}}>
                                            Personal account to manage all you activities.
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

                        <Link to={'/register'} style={{textDecoration: 'none'}}>
                            <Card className={classes.card2} id="cardWala">
                                <CardContent className={classes.rowCard}>
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 my-auto">
                                        <div className={classes.changeIcon1} id="icons">
                                            <PersonRounded className={classes.busineesCenter} id="bussinessCenter"/>
                                            <PersonOutline className={classes.busineesCenter} id="businessOutlined" />
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                        <Typography className={classes.heading} variant='h5'>Register</Typography>
                                        <span style={{color: 'gray'}}>
                                            New users should register over here!
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

// export default Front;