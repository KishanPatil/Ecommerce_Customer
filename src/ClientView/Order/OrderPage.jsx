// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import React, { useState, useEffect } from 'react';
// import {deleteOrderById, getOrderByCustomerId, getOrderById, getAllOrders, cancelOrderStatus} from '../../services/Order/OrderService'
// import { Navigate, useNavigate } from 'react-router-dom';
// import ClientNavBar from '../LandingPage/Navbar/ClinetNavBar';

// export default function OrderPage() {


//   const customerId = localStorage.getItem('customerId');
  
//   const navigate = useNavigate();
//   const [orders, setOrders] = useState([]);


//   var today = new Date();
//   var dd = String(today.getDate()).padStart(2, '0');
//   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//   var yyyy = today.getFullYear();
//   today = mm + '/' + dd + '/' + yyyy;

  
  
//     const userName = 'Pradeep Prajapati'
//     const city = 'pune';
//     const state = 'Maharashtra';
//     const pincode = 626226;

//     const payment = "Cash On Delivery"
//   // document.write(today);

//   useEffect(() => {
//     async function fetchOrders() {
//     //   const response = await fetch('/api/orders');

//       const allOrder = await getOrderByCustomerId(customerId);
      
//     //   const data = await response.json();
//     //   setOrders(data);
//     setOrders(allOrder);
//     const orderCount = Array.isArray(allOrder) ? allOrder.length : 1;

//     }

//     fetchOrders();
//   }, []);

// //  console.log(orders);
// //  console.log("Length : " + orders.length);


//  async function CancelOrder(id){
//   // const CanceledOrder = await deleteOrderById(id);

//   const tempOrder = await getOrderById(id);
//   console.log("Temp Order is : " ,tempOrder)
// /*
// {

//     "customerid": "6414ab3870d3c956e04ad607",
//     "status": "canceled",
//     "street": "777 Warje",
//     "city": "Pune city",
//     "State": "MH",
//     "pin": 45665,
//     "payment": "Cash",
//     "quantity": 1,
//     "productId": "641443813f09cd4ba8239506"
// }
// */



//   const newOrderObj = {
//     "customerid": tempOrder.customerid._id,
//     "status": "canceled",
//     "street": tempOrder.street,
//     "city": tempOrder.city,
//     "State": tempOrder.State,
//     "pin": tempOrder.pin,
//     "payment": tempOrder.payment,
//     "quantity": tempOrder.quantity,
//     "productId": tempOrder.productId
// }
// console.log("temo ordert is : ", tempOrder);
// console.log("new orader is : ", newOrderObj);

//   const cancel = await cancelOrderStatus(id, newOrderObj);
//   alert("order Canceled");
//   const allOrder = await getOrderByCustomerId(customerId);
//   setOrders(allOrder);
// }


//  // Assuming the date is received as a string in ISO format, e.g. "2023-03-18T14:20:10.747Z"
// const receivedDate = new Date("2023-03-18T14:20:10.747Z");

// // Add 3 days to the received date
// const threeDaysLater = new Date(receivedDate.getTime() + (3 * 24 * 60 * 60 * 1000));
// console.log("current Date : " + receivedDate)
// console.log("new Date : " + threeDaysLater.toISOString()); // Output: "2023-03-21T14:20:10.747Z"



// return (
//     <>
//     <ClientNavBar/>
// <div className = " row justify-content-center" style={{fontSize:'15px'}}>
// {/* <div className = ''>  */}

//    <div className="container my-2 py-2 mx-5 col-sm-8 " style={{backgroundColor: "#1e1e1e",border:'none'}}>

//       <div className="main-cart-section ">
  
//         <div className="row justify-content-left">
//             <div className="col-sm-5 mx-5 px-5">
              
//               <h4 className='text-white'> Total Orders : {orders.length}</h4>
//             </div>

//         </div>
// {/*
//         <p className="total-items mx-5 px-5">
//           you have <span className="total-items-count">{totalItems} </span> items in shopping cart
//         </p>
//    */}
//       </div>
//                                            {/* CARD  */}
//       <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
//       <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" />
//       <link href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
//       <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

//         <div className="container d-flex justify-content-center px-5 px-5 mt-50 mb-50">
            
//             <div className="row my-5">

//                <div className="col-md-11 mx-5">
//                         {orders.map((order) => (
//                             <div className="card card-body my-3 hover" key={order._id} style={{ fontSize: 15 }} >
//                                 <div className="media align-items-center align-items-lg-start  text-lg-left flex-column flex-lg-row row">

//                                     <div className="mr-2 mb-3 mb-lg-0 col-sm-3">
//                                             <img src={order.productId.image} width="125" height="125" alt="" />
//                                     </div>
    
//                                     <div className="media-body col-sm-6">
//                                         <h6 className="media-title font-weight-semibold">
//                                             {/* orderId : {order._id} */}
                                            
//                                             <a href="#" data-abc="true"> Praduct Name : {order.productId.Name}  </a>
//                                         </h6>
                                        
//                                         <p className="mb-3 media-title font-weight-semibold">Description : {order.productId.Description} </p>
//                                           <hr className="hr" />
                                        
//                                         <p className="mb-3" ><b>Order Date : </b> {(order.updatedAt)}</p>
//                                         <p className="mb-3" ><b>Delivery Address : </b> {(order.street)}, {(order.city)}, {(order.pin)} ,{(order.State)}</p>
                                        
    
                                        
//                                     </div>
    
//                                     <div className="mt mt-lg-0 ml-lg-3 text-center col-sm-3   py-1    fs-6" style={{ fontSize: 15 }}>
//                                         <h3 className="mb-0 font-weight-semibold ">Rs {order.productId.Price}</h3>
//                                         {/* <div className="text-muted">Status : {(order.status)}</div> */}

//                                         {order.status === "placed" ? (
//                                           <div className="text-muted">Status : {(order.status)} <br />
//                                                                       Payment : {(order.payment)} <br />
//                                                                       <hr className="hr" />
                                            
//                                             <div>
//                                                 <button type="button" className="btn btn-danger btn-sm"   onClick={()=>{CancelOrder(order._id)}}   >Cancel Order</button>
//                                             </div>
//                                             </div>
//                                         ) : (
//                                           <div className="text-muted">Status : {(order.status)}</div>
//                                         )}
                                  
//                                             <hr className="hr" />
                                        
//                                     </div>

//                                 </div>
//                             </div>

//                         ))}

//                </div>    <hr className="hr" />     </div>                      {/*  Product info div end */}
//             </div>
//             <div>
//         </div>

//     </div>
// </div>
//     </>
//   );
// }

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react';
import {deleteOrderById, getOrderByCustomerId, getOrderById, getAllOrders, cancelOrderStatus} from '../../services/Order/OrderService'
import { Navigate, useNavigate } from 'react-router-dom';
import ClientNavBar from '../LandingPage/Navbar/ClinetNavBar';

export default function OrderPage() {


  const customerId = localStorage.getItem('customerId');
  
  
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);


  var today = new Date();	
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  
  
    const userName = 'Pradeep Prajapati'
    const city = 'pune';
    const state = 'Maharashtra';
    const pincode = 626226;

    const payment = "Cash On Delivery"
  // document.write(today);

  useEffect(() => {
    async function fetchOrders() {
    //   const response = await fetch('/api/orders');
      console.log("Customer Id "+customerId)
      const allOrder = await getOrderByCustomerId(customerId);
      console.log(allOrder.data)
      
    //   const data = await response.json();
    //   setOrders(data);
    setOrders(allOrder);
    const orderCount = Array.isArray(allOrder) ? allOrder.length : 1;

    }

    fetchOrders();
  }, []);

//  console.log(orders);
//  console.log("Length : " + orders.length);


 async function CancelOrder(id){
  // const CanceledOrder = await deleteOrderById(id);

  const tempOrder = await getOrderById(id);
  console.log("Temp Order is : " ,tempOrder)
/*
{

    "customerid": "6414ab3870d3c956e04ad607",
    "status": "canceled",
    "street": "777 Warje",
    "city": "Pune city",
    "State": "MH",
    "pin": 45665,
    "payment": "Cash",
    "quantity": 1,
    "productId": "641443813f09cd4ba8239506"
}
*/



  const newOrderObj = {
    "customerid": tempOrder.customerid._id,
    "status": "canceled",
    "street": tempOrder.street,
    "city": tempOrder.city,
    "State": tempOrder.State,
    "pin": tempOrder.pin,
    "payment": tempOrder.payment,
    "quantity": tempOrder.quantity,
    "productId": tempOrder.productId
}
console.log("temo ordert is : ", tempOrder);
console.log("new orader is : ", newOrderObj);

  const cancel = await cancelOrderStatus(id, newOrderObj);
  alert("order Canceled");
  const allOrder = await getOrderByCustomerId(customerId);
  setOrders(allOrder);
}


 // Assuming the date is received as a string in ISO format, e.g. "2023-03-18T14:20:10.747Z"
const receivedDate = new Date("2023-03-18T14:20:10.747Z");

// Add 3 days to the received date
const threeDaysLater = new Date(receivedDate.getTime() + (3 * 24 * 60 * 60 * 1000));
console.log("current Date : " + receivedDate)
console.log("new Date : " + threeDaysLater.toISOString()); // Output: "2023-03-21T14:20:10.747Z"



return (
    <>
    <ClientNavBar/>
<div className = " row justify-content-center" style={{fontSize:'15px'}}>
{/* <div className = ''>  */}

   <div className="container my-2 py-2 mx-5 col-sm-8 " style={{backgroundColor: "#3b3a3a",border:'none'}}>

      <div className="main-cart-section ">
  
        <div className="row justify-content-left">
            <div className="col-sm-5 mx-5 px-5">
              <h5 className='text-light mt-2'>Total Orders : {orders.length}</h5>
            </div>

        </div>
{/* 
        <p className="total-items mx-5 px-5">
          you have <span className="total-items-count">{totalItems} </span> items in shopping cart
        </p>
   */}
      </div>                             
                                           {/* CARD  */}
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

        <div className="container d-flex justify-content-center px-5 px-5 mt-50 mb-50">
            
            <div className="row my-5">

               <div className="col-md-11 mx-5">
                        {orders.map((order) => (
                            <div className="card card-body my-3 hover" key={order._id} style={{ fontSize: 15 }} >
                                <div className="media align-items-center align-items-lg-start  text-lg-left flex-column flex-lg-row row">

                                    <div className="mr-2 mb-3 mb-lg-0 col-sm-3">
                                            <img src={order.productId.image} width="125" height="125" alt="" />
                                    </div>  
    
                                    <div className="media-body col-sm-6">
                                        <h6 className="media-title font-weight-semibold">
                                            {/* orderId : {order._id} */}
                                            
                                            <a href="#" data-abc="true"> Praduct Name : {order.productId.Name}  </a>
                                        </h6>
                                        
                                        <p className="mb-3 media-title font-weight-semibold">Description : {order.productId.Description} </p>
                                          <hr className="hr" /> 
                                        
                                        <p className="mb-3" ><b>Order Date : </b> {(order.updatedAt)}</p>
                                        <p className="mb-3" ><b>Delivery Address : </b> {(order.street)}, {(order.city)}, {(order.pin)} ,{(order.State)}</p>
                                        
    
                                        
                                    </div>
    
                                    <div className="mt mt-lg-0 ml-lg-3 text-center col-sm-3   py-1    fs-6" style={{ fontSize: 15 }}>
                                        <h3 className="mb-0 font-weight-semibold ">Rs {order.productId.Price}</h3>
                                        {/* <div className="text-muted">Status : {(order.status)}</div> */}

                                        {order.status === "placed" ? (
                                          <div className="text-muted">Status : {(order.status)} <br />
                                                                      {/* Payment : {(order.payment)} <br /> */}
                                                                      <hr className="hr" />
                                            
                                            <div> 
                                                <button type="button" className="btn btn-danger btn-sm"   onClick={()=>{CancelOrder(order._id)}}   >Cancel Order</button>
                                            </div>   
                                            </div>
                                        ) : (
                                          <div className="text-muted">Status : {(order.status)}</div>
                                        )}
                                  
                                            <hr className="hr" />
                                        
                                    </div>

                                </div>
                            </div>

                        ))}

               </div>    <hr className="hr" />     </div>                      {/*  Product info div end */}
            </div>      
            <div>
        </div>

    </div>
</div>
    </>
  );
}