import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import toast from 'react-hot-toast';
import swal from 'sweetalert';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const adminData = {
            name: data.name,
            email: data.email,
        }

        const url = `http://localhost:5000/addAdmin`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => {
                console.log(res)
                if (res.status) {
                    swal("Done!", "One new admin added successfully!", "success")
                }
            })
            .catch((error) => {
                toast.error(error.message);
            });

        reset();
    };

    return (
        <div className="row bg-light">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <div className="bg-light">
                    <h2 className="fw-bold p-2">Add a new admin.</h2>
                    <hr />
                </div>
                <div className="shadow p-5 rounded">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group col-md-5 col-sm-12">
                            <input className="form-control" type="text" placeholder="new admin name" {...register("name")} />
                        </div>
                        <div className="form-group col-md-5 col-sm-12">
                            <input className="form-control" type="text" placeholder="new admin email" {...register("email")} />
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