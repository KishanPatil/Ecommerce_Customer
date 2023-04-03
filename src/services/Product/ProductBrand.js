import axios from 'axios';
const baseurl="http://localhost:3009";
export const getAllBrand = async () => {
    try{
    const response = await axios.get(`${baseurl}/brand/brands`);
    // console.log(response.data)
    return response.data;
    }
    catch(e){
        console.log(e)
    }
  };

  export const getBrandById = async (id) => {
    try{
    const response = await axios.get(`${baseurl}/brand/brands/${id}`);
    return response.data;
    }
    catch(e){
        console.log(e)
    }
  };

  export const addBrand = async (BrandName,image) => {
    try{
    const response = await axios.post(`${baseurl}/brand/brands`,{BrandName,image});
    return response.data;
    }
    catch(e){
        console.log(e)
    }
  };

  export const updateBrand = async (id,BrandName,image) => {
    try{
    const response = await axios.put(`${baseurl}/brand/brands/${id}`,{BrandName,image});
    // console.log(response.data)
    return response.data;
    }
    catch(e){
        console.log(e)
    }
  };

  export const deleteBrandByID = async (id) => {
    try{
    const response = await axios.delete(`${baseurl}/brand/brands/${id}`);
    // console.log(response.data)
    return response.data;
    }
    catch(e){
        console.log(e)
    }
  };
