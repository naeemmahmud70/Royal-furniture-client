import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';


const GiveReview = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            email: data.email,
            review: data.review,
        }
        console.log(reviewData)
    };

    return (
        <div className="row bg-light">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <div className="bg-light">
                    <h2 className="fw-bold">Give Review</h2>
                    <hr />
                </div>
                <div className="shadow p-5 rounded">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group col-md-5 col-sm-12">
                            <input className="form-control" type="text" {...register("name")} />
                        </div>

                        <div className="form-group col-md-5 col-sm-12">
                            <input className="form-control" type="text" {...register("email")} />
                        </div>
                        <div className="form-group w-50">
                            <textarea name="" id="" cols="34" rows="10" {...register("review")}></textarea>
                        </div>
                        <div className="form-group">
                            <input className="submit-button" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GiveReview;