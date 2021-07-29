import React, { useState } from 'react';
import './AddProduct.css'
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [isDisabled, setIsDisabled] = useState(false);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        }
        console.log(productData)
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'c27cdbd7f672caa5d177ddecda022824');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                setIsDisabled(false)
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    return (
        <div className="row bg-light">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <div className="bg-light">
                    <h2 className="fw-bold">Add Product</h2>
                    <hr />
                </div>
                <div className="shadow p-5 rounded">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group w-50">
                            <input className="form-control" type="text" placeholder="name" {...register("name")} />
                        </div>

                        <div className="form-group w-50">
                            <input className="form-control" type="text" placeholder="price" {...register("price")} />
                        </div>
                        <div className="form-group">
                            <input className="form control" type="file" onChange={handleImageUpload} />
                        </div>
                        <div className="form-group">
                            <input disabled={isDisabled} className="submit-button mainBtn" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;