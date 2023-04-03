import axios from 'axios';
const baseurl="http://localhost:3009";
export const getAllCategory = async () => {
    try{
    const response = await axios.get(`${baseurl}/category/categories`);
    return response.data;
    }
    catch(e){
        console.log(e)
    }
};
export const getAllCategoryById = async (id) => {
  try{
  const response = await axios.get(`${baseurl}/category/categories/${id}`);
  return response.data;
  }
  catch(e){
      console.log(e)
  }
};

  export const AddCategory = async (CategoryName,image) => {
    try{
    const response = await axios.post(`${baseurl}/category/categories`,{CategoryName,image});
    return response.data;
    }
    catch(e){
        console.log(e)
    }
  };
  export const DeleteCategoryByID = async (id) => {
    try{
    const response = await axios.delete(`${baseurl}/category/categories/${id}`);
    return response.data;
    }
    catch(e){
        console.log(e)
    }
  };

  export const updateCategory = async (id,CategoryName,image) => {
    try{
    const response = await axios.put(`${baseurl}/category/categories/${id}`,{CategoryName,image});
    return response.data;
    }
    catch(e){
        console.log(e)
    }
  };