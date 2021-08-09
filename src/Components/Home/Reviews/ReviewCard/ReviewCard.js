import React from 'react';
import './ReviewCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ReviewCard = (props) => {
    const { name, email, photo, review } = props.review
    console.log(name, email, photo, review)
    return (
        <div className="review-card shadow mt-3 p-3">
            <div className="d-flex">
                <div className='review-img'>
                    <img src={photo} alt="" />
                    <h5>Ratings:</h5>
                </div>
                <div>
                    <p>{name}</p>
                    <p>{email}</p>
                    <FontAwesomeIcon className="text-warning" icon={faStar} /> <FontAwesomeIcon className="text-warning" icon={faStar} /> <FontAwesomeIcon className="text-warning" icon={faStar} /> <FontAwesomeIcon className="text-warning" icon={faStar} /> <FontAwesomeIcon className="text-warning" icon={faStar} /> 

                </div>
            </div>
            <hr/>
            <div>
                <p className="text-justify">{review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;