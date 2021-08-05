import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './ProductCard.css'
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { name, imageURL, price, _id } = product
    return (
        <div className="card-div shadow bg-light">
            <div className="card-img text-center">
                <img className="" src={imageURL} alt="" />
                <h3 className="fw-bold">{name}</h3>
            </div>
            <div className="d-flex justify-content-between card-footer">
                <div>
                    <h3 className="fw-bold text-warning px-3">${price}</h3>
                </div>
                <div className="px-3">
                    <Link to={"/orderProduct/" + _id}><button className="buy-button fw-bold"> <FontAwesomeIcon icon={faShoppingCart} />  Buy Now</button></Link>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;