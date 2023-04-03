import React from 'react';
import Carousal from '../Carousal/Carousal';
import Footer from '../Footer/Footer';
import MainContent from '../MainContentPage/MainContent';
import ClientNavBar from '../Navbar/ClinetNavBar';
import './HomePage.css'

export default function HomePage() {
   


    return (
        <div className='Homebody' style={{backgroundColor:"black"}}>
            {/* Navbar */}
            <ClientNavBar />

            {/* Carousal */}
            <div style={{ backgroundColor: "black" ,marginTop :"30px"}}>
                <Carousal />
            </div>
            
            {/* Content */}
            <div style={{ backgroundColor: "black" }}>
                <MainContent />
            </div>

            <hr/>
            
            {/* Footer */}
            <div>
                <Footer/>
            </div>
        </div>

    );
}