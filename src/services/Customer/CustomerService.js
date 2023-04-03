import axios from 'axios';
// Node connection 
const baseUrl ="http://localhost:3009";
/**
 * 
 * @returns all customer details from node API
 */
export const getCustomer = async()=>{
    try{
        const response = await axios.get(`${baseUrl}/customer/getallcustomers`);
        return response.data;
    }catch(error){
        console.log("Error : "+error)
    }
}
export const deleteCustomerByID = async (id) => {
    try{
    const response = await axios.delete(`${baseUrl}/customer/deletecustomerbyId/${id}`);
    // console.log(response.data)
    return response.data;
    }
    catch(e){
        console.log(e)
    }
  };