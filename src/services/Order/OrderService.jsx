import axios from 'axios';
const baseUrl="http://localhost:3009";
const getAllOrders = async(setState) =>{
    try{
        const response = await axios.get(`${baseUrl}/order/orders`)
        return response.data;
    }
    catch(e){
        console.log(e)
    }
}

const deleteOrderById = async(id) =>{
    try{
        const response = await axios.delete(`${baseUrl}/order/orders/${id}`);
        // console.log(response.data)
        return response.data;
        }
        catch(e){
            console.log(e)
        }
}

// new 

// const cancelOrderById = async =>{
//     try{
//         const response = await 
//     }
// }

const cancelOrderStatus = async(id, newOrderObj) =>{
    try{
        console.log("Status changed!111111!")
        console.log("id is : ", id)
        console.log("new Obj is : ", newOrderObj)
        const response = await axios.put(`${baseUrl}/order/orders/${id}`, {newOrderObj})
        
        console.log("Status changed!!")
        return response.data;
    }
    catch(e){
        console.log(e);
    }
}
const getOrderById = async(id ) => {
    try{
        const response = await axios.get(`${baseUrl}/order/orders/${id}`);
        // console.log(response.data)
        return response.data;
        }
        catch(e){
            console.log(e)
        }
}

const getOrderByCustomerId = async(customerid ) => {   // Added 
    try{
        // const response = await axios.get(`${baseUrl}/order/ordersbycustomerid/${customerid}`);
        // console.log(response.data)
        const response = await axios.get(`${baseUrl}/order/getordersbycustomerid/${customerid}`)
        return response.data;
        }
        catch(e){
            console.log(e)
        }
}

export {getOrderById , deleteOrderById , getAllOrders, getOrderByCustomerId,cancelOrderStatus}
