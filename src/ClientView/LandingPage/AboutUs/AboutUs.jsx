import React from 'react';
import ClientNavBar from '../Navbar/ClinetNavBar';

 export default function AboutUs(){
    return(
        <div>
            <ClientNavBar/>
            <div className="card mt-5 ml-5 shadow-3" style={{ backgroundColor: "white" , height:'30%', width:'90%'}}>
            <div className="card-header">
                <h4 className='text-dark text-center'>About EKarto</h4>
            </div>
            <div className="card-body text-center">
                <p>
                    
                </p>
            </div>
        </div>
        </div>
    );
 }
