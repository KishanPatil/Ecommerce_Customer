import axios from 'axios';

const baseUrl = "http://localhost:3010"

export const getProduct = async(req,res) =>{
    try{
        let {data} = await axios.get(`${baseUrl}/product/getAllProducts`);
        console.log(data);
        return data;
    }catch(error){
        console.log("error while get all product in react integration "+error)
    }
}

