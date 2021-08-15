import React, { useEffect } from 'react';
import './ReviewCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ReviewCard = (props) => {
    const { name, email, photo, review } = props.review

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <div className="card-hover">
            <div data-aos="fade-left" className="review-card shadow rounded mt-3 p-3">
                <div className="d-flex">
                    <div className='review-img '>
                        <img src={photo} alt="" />
                        <h5>Ratings:</h5>
                    </div>
                    <div>
                        <p>{name}</p>
                        <p>{email}</p>
                        <FontAwesomeIcon className="text-warning" icon={faStar} /> <FontAwesomeIcon className="text-warning" icon={faStar} /> <FontAwesomeIcon className="text-warning" icon={faStar} /> <FontAwesomeIcon className="text-warning" icon={faStar} /> <FontAwesomeIcon className="text-warning" icon={faStar} />
                    </div>
                </div>
                <hr />
                <div>
                    <p className="text-justify">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;