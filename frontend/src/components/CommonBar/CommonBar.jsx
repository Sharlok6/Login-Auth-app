import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './Styles';

//imports
import './CommonBar.css';
import union from "../../icons/Union.svg";
import oasis from "../../icons/Oasis.svg";
import double from "../../icons/double.svg";
import rightCircle from "../../icons/right-circle.svg";
import dottedRec from "../../icons/dotted-rec.svg";
import angle from "../../icons/angle.svg";
import dottedCircle from "../../icons/dotted-circle.svg";

export default function CommonBar() {
    
    const classes = useStyles();

    return (
        <>
            <div className="row-header">
                <div className="col-lg-2 col-xs-2 d-flex">
                    <Link to={'/'}>
                    <span>
                    <img src={union} alt="" style={{height: '20px', width: 'auto'}} />
                    </span>
                    <span>
                    <img src={oasis} alt="" style={{height: '10px', width: 'auto', marginTop: 6, marginLeft: 6}} />
                    </span>
                    </Link>
                </div>
                <div className="col-lg-10 col-xs-10"></div>
            </div>
            <div className={classes.rowRecClass}>
                <div className="col-lg-4 col-xs-4"></div>
                <div className="col-lg-3 col-xs-3">
                    <img src={dottedRec} alt="" style={{height: '50px', width: 'auto'}} />
                </div>
                <div className="col-lg-5 col-xs-5"></div>
            </div>
            <div className="row-body">
                <div className="col-lg-2 ">
                    <span>
                    <img src={double} alt="" style={{height: '20px', width: 'auto', filter: 'grayscale(100%)'}} />
                    </span>
                </div>
                <div className="col-lg-10"></div>
                <div className="col-lg-12 mt-4">
                    <p className="text">
                        The passage experienced a surge in popularity during the 1960s when Letraset used 
                        it on their dry-transfer sheets, and again during the 90s as desktop publishers 
                        bundled the text with their software.
                    </p>
                    <p className='name'>
                        <span>
                            Vincent Obi
                        </span>
                        <span>
                            <img src={rightCircle} alt="" style={{height: '15px', width: 'auto', marginLeft: 6}} />
                        </span>
                    </p>
                </div>
            </div>
            <div className={classes.angleClass}>
                <div className="col-lg-10 col-xs-10"></div>
                <div className="col-lg-2 col-xs-2">
                    <img src={angle} alt="" style={{height: '30px', width: 'auto'}} />
                </div>
            </div>
            <div className="row-dotted-circle">
                <div className="col-lg-12">
                    <img src={dottedCircle} alt="" style={{height: '90px', width: 'auto'}} />
                </div>
            </div> 
        </>
    )
}
