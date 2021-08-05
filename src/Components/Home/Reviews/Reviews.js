import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';
import './Review.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="text-center under-line">
                    <h1 className="fw-bold">Customer Reviews</h1>
                    <span className=""></span>
                </div>
            </div>
            <div className="card-flex">
                {
                    reviews.map(review => <ReviewCard review={review} key={review._id} ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;