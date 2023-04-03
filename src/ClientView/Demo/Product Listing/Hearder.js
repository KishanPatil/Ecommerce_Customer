import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from '../Home Page Commponenet/HomePage/HomePage';
import Navbar from '../Home Page Commponenet/Navbar/Navbar';
// import ProductListing from './productListing'
//exported and wrote logic here at same time
export default function Header(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navbar/>}></Route>
        <Route path="home" element={<Home/>}></Route>
        {/*NOTE : change the element according here */}
        <Route path="electronic" element={<Home/>}></Route>
        <Route path="mobile" element={<Home/>}></Route>
        <Route path="fashion" element={<Home/>}></Route>
        <Route path="homedecor" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
     )
}