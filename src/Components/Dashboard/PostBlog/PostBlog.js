import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import './PostBlog.css'

const PostBlog = () => {
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
                console.log(error);
            });
    }

    const onSubmit = data => {
        let newDate = new Date()
        const blogData = {
            title: data.blogTitle,
            date: newDate.toDateString('DD/MM/YY'),
            description: data.description,
            imageURL: imageURL
        }
        console.log(imageURL, blogData);
        const url = `http://localhost:5000/addBlog`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogData)
        })
            .then(res => {
                console.log("server side responding", res)
                setImageURL(null);
                reset();
            });
    };

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
                        <div className="form-group w-50">
                            <textarea name="" id="" cols="34" rows="10" {...register("description")}></textarea>
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

export default PostBlog;