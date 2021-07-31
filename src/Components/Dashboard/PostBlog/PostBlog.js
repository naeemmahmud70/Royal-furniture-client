import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

import './PostBlog.css'

const PostBlog = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const blogData = {
            title: data.blogTitle,
            date: data.postedDate,
            description: data.description,
            imageURL: imageURL
        }
        console.log(blogData)
    };

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
                    <h2 className="fw-bold">Post Blog</h2>
                    <hr />
                </div>
                <div className="shadow p-5 rounded">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group col-md-5 col-sm-12">
                            <input className="form-control" type="text" placeholder="Blog title" {...register("blogTitle")} />
                        </div>

                        <div className="form-group col-md-5 col-sm-12">
                            <input className="form-control" type="text" placeholder="Posted Date" {...register("postedDate")} />
                        </div>
                        <div className="form-group w-50">
                            <textarea name="" id="" cols="34" rows="10" {...register("description")}></textarea>
                        </div>
                        <div className="form-group">
                            <input className="form control" type="file" onChange={handleImageUpload} />
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

export default PostBlog;