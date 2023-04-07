import axios from 'axios';
const baseUrl="http://localhost:3009";
const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  };

const getAllOrders = async(setState) =>{
    try{
        const response = await axios.get(`${baseUrl}/order/getallorder`)
        return response.data;
    }
    catch(e){
        console.log(e)
    }
}

const getCustomerById = async(customerid) => {
    try{
        const response = await axios.get(`${baseUrl}/customer/getCustomerById/${customerid}`);
        // console.log(response.data)
        return response.data;
        }
        catch(e){
            console.log(e)
        }
}

const getCartByCuatomerId = async(customerid) => {
    try{
        console.log("this is customer id")
        const response = await axios.get(`${baseUrl}/cart/getcartbycustomerid/${customerid}`, {headers: headers});
        console.log("cart data",response.data)
        return response.data;
        }
        catch(e){
            console.log(e)
        }
}

const getOrderByCustomerId = async(customerid ) => {
    try{
        const response = await axios.get(`${baseUrl}/order/getorderbycustomerid/${customerid}`, {headers: headers});
        // console.log(response.data)
        return response.data;
        }
        catch(e){
            console.log(e)
        }
}
//new
const findOrderByIdService = async (order) => {
    try {
        const response = await fetch(`${baseUrl}/${order}`)
        const order2 = await response.json()
        return order2
    } catch (error) {
        throw new Error(error)
    }
}
export {getCustomerById, getOrderByCustomerId, getAllOrders, getCartByCuatomerId,findOrderByIdService}
