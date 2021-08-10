import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const adminData = {
            name: data.name,
            email: data.email,
        }
        console.log(adminData)
        const url = `http://localhost:5000/addAdmin`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)

        })
            .then(res => console.log("server side responding", res))

    };

    return (
        <div className="row bg-light">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <div className="bg-light">
                    <h2 className="fw-bold">Add a new admin.</h2>
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
                        <div className="form-group">
                            <input className="submit-button" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;