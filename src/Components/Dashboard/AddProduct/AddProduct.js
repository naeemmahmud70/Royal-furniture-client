import React, { useState } from 'react';
import './AddProduct.css'
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import toast from 'react-hot-toast';
import swal from 'sweetalert';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'c27cdbd7f672caa5d177ddecda022824');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                toast.error(error.message)
            });
    };

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            height: data.height,
            width: data.width,
            depth: data.depth,
            weight: data.weight,
            description: data.description,
            imageURL: imageURL
        }

        const url = ` https://aqueous-taiga-74185.herokuapp.com/addProduct`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => {
                console.log("server side responding", res)
                setImageURL(null)
                swal("Done!", "One new product added successfully!", "success");
                reset()
            })
            .catch((error) => {
                toast.error(error.message)
            });
    };

    return (
        <div className="row bg-light">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <div className="bg-light">
                    <h2 className="fw-bold p-2">Add Product</h2>
                    <hr />
                </div>
                <div className="shadow p-5 rounded">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group col-md-5 col-sm-12">
                            <input className="form-control" type="text" placeholder="product name" {...register("name")} />
                        </div>

                        <div className="form-group col-md-5 col-sm-12">
                            <input className="form-control" type="text" placeholder="product price" {...register("price")} />
                        </div>
                        <div className="form-group col-md-5 col-sm-12">
                            <input className="form-control" type="number" placeholder="product height" {...register("height")} />
                        </div>
                        <div className="form-group col-md-5 col-sm-12">
                            <input className="form-control" type="number" placeholder="product width" {...register("width")} />
                        </div>
                        <div className="form-group col-md-5 col-sm-12">
                            <input className="form-control" type="number" placeholder="product depth" {...register("depth")} />
                        </div>
                        <div className="form-group col-md-5 col-sm-12">
                            <input className="form-control" type="number" placeholder="product weight" {...register("weight")} />
                        </div>
                        <div className="form-group w-50">
                            <textarea name="" id="" cols="34" rows="10" placeholder="product description" {...register("description")}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="upload" className="image-upload-button fw-bold">Upload Image <FontAwesomeIcon icon={faCloudUploadAlt} /></label>
                            <input id="upload" hidden="hidden" className="form control" type="file" onChange={handleImageUpload} />
                        </div>
                        <div className="form-group">
                            {imageURL ? <input className="submit-button" type="submit" /> : <input value="Submit" className="disable-button" />}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;