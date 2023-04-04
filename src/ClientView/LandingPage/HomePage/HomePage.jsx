import React from 'react';
import Carousal from '../Carousal/Carousal';
import Footer from '../Footer/Footer';
import MainContent from '../MainContentPage/MainContent';
import ClientNavBar from '../Navbar/ClinetNavBar';
import './HomePage.css'

export default function HomePage() {
   


    return (
        <div className='Homebody' style={{backgroundColor:"#303030"}}>
            {/* Navbar */}
            <ClientNavBar />

            {/* Carousal */}
            <div style={{ backgroundColor: "#303030" ,marginTop :"30px"}}>
                <Carousal />
            </div>
            
            {/* Content */}
            <div >
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