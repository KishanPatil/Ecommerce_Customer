import axios from 'axios';
const baseurl="http://localhost:3009";
 const getAllPayments = async(setState) =>{
    try{
    const response = await axios.get(`${baseurl}/payment/getAllPayment`)
    return response.data;
    }
    catch(e){
        console.log(e)
    }
}

 const deletePaymentById = async(id) =>{
    try{
        const response = await axios.delete(`${baseurl}/payment/deleteByid/${id}`);
        // console.log(response.data)
        return response.data;
        }
        catch(e){
            console.log(e)
        }
}

const updatePaymentById = async(id,paymentStatus) =>{
    try{
        const response = await axios.put(`${baseurl}/payment/updatePayment/${id}`,{paymentStatus});
        // console.log(response.data)
        return response.data;
        }
        catch(e){
            console.log(e)
        }
}

const getPaymentById = async(id ) => {
    try{
        const response = await axios.get(`${baseurl}/payment/getPaymentById/${id}`);
        console.log(response.data)
        return response.data;
        }
        catch(e){
            console.log(e)
        }
}
export {getAllPayments , deletePaymentById   , getPaymentById,updatePaymentById}
