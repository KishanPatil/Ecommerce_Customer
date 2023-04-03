import axios from 'axios';

// Define the base URL for the API
const baseurl = "http://localhost:3009";

/**
 * Sends a GET request to the server to retrieve all carts
 * @returns {Object} response data
 */
const getAllCarts = async () => {
    try {
        const response = await axios.get(`${baseurl}/cart/getallcart`);
        return response.data;
    } catch (error) {
        console.log("Error : " + error);
    }
}

/**
 * Sends a GET request to the server to delete a cart by ID
 * @param {string} id - the ID of the cart to be deleted
 * @returns {Object} response data
 */
const deleteCart = async (id) => {
    try {
        const response = await axios.get(`${baseurl}/cart/deletecartbyid/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error : " + error);
    }
}

/**
 * Sends a GET request to the server to retrieve a cart by ID
 * @param {string} id - the ID of the cart to be retrieved
 * @returns {Object} response data
 */
const getCartById = async (id) => {
    try {
        const response = await axios.get(`${baseurl}/cart/getcartbyid/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error : " + error);
    }
}
/**
 * Sends a GET request to the server to retrieve a cart by ID
 * @param {string} id - the ID of the cart to be retrieved
 * @returns {Object} response data
 */
const addToCart = async (customerId,products) => {
    try {
        const response = await axios.post(`${baseurl}/cart/addcart`, {
            customerId,
            products
        });
        return response.data;
    } catch (error) {
        console.log("Error : " + error);
    }
}
// Export the functions for use in other modules
export { getAllCarts, deleteCart, getCartById, addToCart }
