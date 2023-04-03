import { createBrowserRouter } from 'react-router-dom'
import Category from '../ClientView/Category/Category';
import ProductListing from '../ClientView/Demo/Product Listing/productListing';
import AboutUs from '../ClientView/LandingPage/AboutUs/AboutUs';
import HomePage from '../ClientView/LandingPage/HomePage/HomePage';
import ProductList from '../ClientView/Category/CategoryProductList/CategoryProductList';
import { SingleProductView } from '../ClientView/SingleProductView/SingleProductView';
import BrandProductList from '../ClientView/Brand/BrandProductList/BrandProductList'
import MobileCategory from '../ProductListing/Mobile/MobileCategory';
import Brand from '../ClientView/Brand/BrandList'
import SearchProduct from '../ClientView/SearchProduct/SearchProduct';
import UserLogin from '../ClientView/UserLogin/UserLogin';
import UserRegister from '../ClientView/UserLogin/UserRegister';
import { Cart } from '../ClientView/Cart/Cart';
import  DisplayUserProfile  from '../ClientView/UserProfile/DisplayUserProfile';
import OrderPage from '../ClientView/Order/OrderPage'
import SetOrder from '../ClientView/Order/SetOrder'
import Product from '../ClientView/Product/ProductList'
import UpdateUserProfile from '../ClientView/UserLogin/UpdateUserProfile';
import EmailOTP from '../ClientView/UserLogin/EmailOTP'
const route = createBrowserRouter([
    { path: '', element: <HomePage /> }, 
    { path: 'login', element: <UserLogin /> }, 
    { path: 'register', element: <UserRegister /> }, 
    { path: 'otp', element: <EmailOTP /> }, 

    { path: 'cart', element: <Cart /> },
    { path: 'category', element: <Category /> }, 
    { path: 'brand', element: <Brand /> },
    { path: 'product', element: <Product /> },
    { path: 'orderpage', element: <OrderPage /> },
    { path: 'setorder', element: <SetOrder /> },
    { path: 'editprofile', element: <UpdateUserProfile/> },

    { path: 'user', element: <DisplayUserProfile /> },
    { path: 'categoryproductlist/:id', element: <ProductList /> },
    { path: 'brandproductlist/:id', element: <BrandProductList /> },
    { path: 'search/:name',element: <SearchProduct/> },
    { path: 'singleproduct/:id', element: <SingleProductView /> },
    { path: '/mobile', element: <ProductListing/> },
]);

export { route }