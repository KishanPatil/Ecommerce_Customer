import axios from 'axios';
const baseurl="http://localhost:3009";

/**
 * Fetches all payments from the server.
 *
 * @returns {object} - an object containing all payments
 */
const getAllPayments = async() =>{
    try{
    const response = await axios.get(`${baseurl}/payment/getAllPayment`)
    return response.data;
    }
    catch(e){
        console.log(e)
    }
}

/**
 * Deletes a payment with the given ID from the server.
 *
 * @param {number} id - the ID of the payment to delete
 * @returns {object} - an object containing the deleted payment
 */
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

/**
 * Updates a payment with the given ID on the server.
 *
 * @param {number} id - the ID of the payment to update
 * @param {string} paymentStatus - the new payment status to set
 * @returns {object} - an object containing the updated payment
 */
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

/**
 * Fetches a payment with the given ID from the server.
 *
 * @param {number} id - the ID of the payment to fetch
 * @returns {object} - an object containing the fetched payment
 */
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

export {
    getAllPayments,
    deletePaymentById,
    getPaymentById,
    updatePaymentById
}
