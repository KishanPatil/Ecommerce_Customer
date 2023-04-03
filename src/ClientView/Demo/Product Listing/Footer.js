import React from 'react'


//writing and exporting function at same time
export default function Footer(){
    return(
        <div className="footer">
            <p>copyright @2023</p>
            <div className="social">
                <i className="fa fa-facebook"></i><br/>
                <i className="fa fa-instagram"></i>
            </div>
        </div>
    );
}