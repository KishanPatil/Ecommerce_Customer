import React,{useState,useEffect} from 'react';
import {Row,Col,Form,Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';
// import HarbingerLogo from '../Images/HarbingerLogo.png';


export default function Footer() {
  
    return (
        <div className="footer-body" style={{overflowX:'hidden'}} >
            <div className="card mt-3" style={{backgroundColor:'#1e1e1e',height:'20%'}}>
                    <label className='text-center' style={{color:'grey'}}>Copyright © 2023 Harbinger Pro-Coders. All rights reserved.</label>
            </div>
        </div>
    );
}