import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

const OrderProduct = () => {
    const { id } = useParams()
    const { register, handleSubmit } = useForm();
    const [orderProduct, setOrderProduct] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, description, imageURL, price, height, width, depth, } = orderProduct;


    useEffect(() => {
        fetch('http://localhost:5000/orderProduct/' + id)
            .then(res => res.json())
            .then(data => setOrderProduct(data))
    }, [id]);
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <section className="p-5">
            <div className="row bg-light">
                <div className="col-md-5 p-4 text-center">
                    <img src={imageURL} alt="" />
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
            <div>
                <div className="d-flex justify-content-center">
                    <div className="text-center under-line">
                        <h2 className="fw-bold px-4">Submit the form for order the product</h2>
                        <span className=""></span>
                    </div>
                </div>
                <div className="d-flex justify-content-center pt-5">
                    <div className="w-50 shadow p-4">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-group">
                                <input defaultValue={loggedInUser.name} className="form-control" type="text"{...register("user name")} />
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
                                <input defaultValue={name} className="form-control" type="text"  {...register("product name")} />
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

        </section>
    );
};

export default OrderProduct;