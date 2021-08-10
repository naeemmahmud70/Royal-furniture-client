import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Payment from '../../Payment/Payment';
import './OrderProduct.css'

const OrderProduct = () => {
    const { id } = useParams()
    const { register, handleSubmit } = useForm();
    const [orderProduct, setOrderProduct] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [shippingData, setShippingData] = useState(null)
    const { name, description, imageURL, price, height, width, depth, } = orderProduct;


    useEffect(() => {
        fetch('http://localhost:5000/orderProduct/' + id)
            .then(res => res.json())
            .then(data => setOrderProduct(data))
    }, [id]);


    const onSubmit = (data) => {
        setShippingData(data)
    }


    const handlePaymentSuccess = paymentId => {
        const date = new Date();

        const orderDetails = {
            ...loggedInUser,
            order: shippingData,
            orderStatus: '',
            oderTime: date.toDateString('DD/MM/YY'),
            paymentId
        }
        console.log(orderDetails);

        const url = `http://localhost:5000/addOrder`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => console.log('server side response', res))

    }

    return (
        <section className="row">
            <div className="row bg-light">
                <div className="col-md-5 p-4 text-center">
                    <img className="img-fluid" src={imageURL} alt="" />
                </div>
                <div className="col-md-7 p-4">
                    <h1 className="py-3 fw-bold">{name}</h1>
                    <h4>Description:</h4>
                    <p className="text-justify">{description}</p>
                    <h4>Product Size:</h4>
                    <h6>height: {height} cm</h6>
                    <h6>width: {width} cm</h6>
                    <h6>depth: {depth} cm</h6>
                    <h6>price: ${price}</h6>
                </div>
            </div>
            <hr />
            <div style={{ display: shippingData ? 'none' : 'block' }}>
                <div className="d-flex justify-content-center">
                    <div className="text-center under-line">
                        <h2 className="fw-bold px-4">Submit the form for order the product</h2>
                        <span className=""></span>
                    </div>
                </div>
                <div className="d-flex justify-content-center pt-3 m-4">
                    <div className="shadow p-4 col-md-6 col-12 ">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-group">
                                <input defaultValue={loggedInUser.name} className="form-control" type="text"{...register("userName")} />
                            </div>

                            <div className="form-group">
                                <input defaultValue={loggedInUser.email} className="form-control" type="text" {...register("email")} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="number" placeholder="enter your phone number" {...register("phoneNumber")} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="enter your address" {...register("address")} />
                            </div>
                            <div className="form-group">
                                <input defaultValue={name} className="form-control" type="text"  {...register("productName")} />
                            </div>
                            <div className="form-group">
                                <input defaultValue={price} className="form-control" type="number" {...register("price")} />
                            </div>
                            <div className="form-group text-center">
                                <input value="Place Order" className="submit-button" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div style={{ display: shippingData ? 'block' : 'none' }} className="">
                <div className="d-flex justify-content-center">
                    <div className="col-md-8 col-11 shadow m-4 p-4 bg-light">
                        <h2 className="fw-bold text-center">Pay here</h2>
                        <hr />
                        <div>
                            <h4>You will charged: ${price}</h4>
                            <Payment handlePayment={handlePaymentSuccess}></Payment>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default OrderProduct;