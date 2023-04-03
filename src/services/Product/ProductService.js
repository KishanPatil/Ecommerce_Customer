// import React, { useState,useEffect } from 'react';
import axios from 'axios';
const baseurl="http://localhost:3009";
  export const getAllProducts = async () => {
    try{
    const response = await axios.get(`${baseurl}/product/products`);
    return response.data;
    }
    catch(e){
        console.log(e)
    }
  };
  
  export const getProductById = async (id) => {
    try{
    const response = await axios.get(`${baseurl}/product/products/${id}`);
    return response.data;
    }
    catch(e){
        console.log(e)
    }
  };

  export const addProducts = async (Name,Description,image,Quantity,Price, category, brand) => {
    try{
    const response = await axios.post(`${baseurl}/product/products`,{Name,Description,image,Quantity,Price, category, brand});
    return response.data;
    }
    catch(e){
        console.log(e)
    }
  };

  export const updateProduct = async (id,Name,Description,image,Quantity,Price, category, brand) => {
    try{
    const response = await axios.post(`${baseurl}/product/products/${id}`,{Name,Description,image,Quantity,Price, category, brand});
    // console.log(response.data)
    return response.data;
    }
    catch(e){
        console.log(e)
    }
  };

  export const deleteProductByID = async (id) => {
    try{
    const response = await axios.delete(`${baseurl}/product/products/${id}`);
    // console.log(response.data)
    return response.data;
    }
    catch(e){
        console.log(e)
    }
  };

  