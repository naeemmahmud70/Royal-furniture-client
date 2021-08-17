import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import toast from 'react-hot-toast';
import swal from 'sweetalert';


const GiveReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            email: data.email,
            review: data.review,
            photo: loggedInUser.photo
        }

        const url = ` https://aqueous-taiga-74185.herokuapp.com/addReview`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => {
                if (res.status) {
                    swal("Done!", "Your review will be show in home page!", "success")
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
                    <h2 className="fw-bold p-2">Give Review</h2>
                    <hr />
                </div>
                <div className="shadow p-5 rounded">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group col-md-5 col-sm-12">
                            <input defaultValue={loggedInUser.name} className="form-control" type="text" {...register("name")} />
                        </div>

                        <div className="form-group col-md-5 col-sm-12">
                            <input defaultValue={loggedInUser.email} className="form-control" type="text" {...register("email")} />
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