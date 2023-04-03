import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { addProducts } from './ProductService';
import { getAllCategory } from './ProductCategoryService';
import { getAllBrand } from './ProductBrand'
import 'bootstrap/dist/css/bootstrap.css';
function AddProduct() {
    const [Name, setName] = useState('');
    const [Description, setDescription] = useState('');
    const [Quantity, setQuantity] = useState(0);
    const [Price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [brandData, setBrandData] = useState([]);
    const [categorydata, setCategorydata] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log({ name, description, quantity, price, category, brand });
    //   };

    async function handleSubmit(e) {
        e.preventDefault();
        console.log({ Name, Description, Quantity, Price, category, brand });
        if (!Name || !Description || !category || !brand) {
            alert("Please fill all fields");
            return;
          }
          
          if (Quantity < 1 || Price < 1) {
            alert("Quantity and Price cannot be less than zero");
            return;
          }
        const add = await addProducts(Name, Description, Quantity, Price, category, brand)
        alert("Product Added successfully!", add);
        navigate('navbar/product')
    }


    useEffect(() => {
        async function fetchData() {
            const allCategory = await getAllCategory();
            const allBrand = await getAllBrand();
            setCategorydata(allCategory);
            setBrandData(allBrand);
            setIsLoading(true);
        }
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div>
                <div className=' '> <p className='text-center bold'>Add Product </p> </div>
                <div className='container'>
                    <div className='row'>
                        <Form onSubmit={handleSubmit} style={{ marginRight: "25%", width: "900px" }}>
                            <div className='col'>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text" name="name" id="name" placeholder="Product Name" value={Name} onChange={(e) => setName(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="description">Description</Label>
                                    <Input type="textarea" name="description" id="description" placeholder="Product Description" value={Description} onChange={(e) => setDescription(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="quantity">Quantity</Label>
                                    <Input type="number" name="quantity" id="quantity" placeholder="Product Quantity" value={Quantity} onChange={(e) => setQuantity(e.target.value)} />
                                </FormGroup>
                            </div>
                            <div className='col'>
                                <FormGroup>
                                    <Label for="price">Price</Label>
                                    <Input type="number" name="price" id="price" placeholder="Product Price" value={Price} onChange={(e) => setPrice(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="category">Category</Label>
                                    <Input type="select" name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                                        <option>Select Category</option>
                                        {categorydata.map((item) => (
                                            <option key={item._id} value={item._id}> {item.CategoryName}</option>
                                        )
                                        )}

                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="brand">Brand</Label>
                                    <Input type="select" name="brand" id="brand" placeholder="Product Brand" value={brand} onChange={(e) => setBrand(e.target.value)} >
                                        <option>Select Brand</option>
                                        {brandData.map((item) => (
                                            <option key={item._id} value={item._id}> {item.BrandName}</option>
                                        )
                                        )}
                                    </Input>
                                </FormGroup>
                                <Button color="primary">Submit</Button>
                                <Link to={`/navbar/product`}><button className="btn">Cancel</button></Link>
                            </div>
                        </Form>

                    </div>
                </div>
            </div>
        );

    }
    else {
        return (
            <div>
                PLease WAit
            </div>
        )
    }
}
export default AddProduct;
