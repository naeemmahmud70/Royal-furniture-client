import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReadFullBlog = () => {
    const { id } = useParams();
    const [fullBlog, setFullBlog] = useState({});
    const { title, imageURL, date, description } = fullBlog;

    useEffect(() => {
        fetch(' https://aqueous-taiga-74185.herokuapp.com/fullBlog/' + id)
            .then(res => res.json())
            .then(data => setFullBlog(data))
    }, [id]);

    return (
        <div className="m-4">
            <div className="text-center bg-light p-3">
                <img className="rounded py-3" src={imageURL} alt="" />
                <h5>Posted date: {date}</h5>
                <h1 className="py-3">{title}</h1>
                <p className="text-justify">{description}</p>
            </div>
        </div>
    );
};

export default ReadFullBlog;