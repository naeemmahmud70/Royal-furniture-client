import React from 'react';
import "./PageNotFound.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const PageNotFound = () => {
    return (
        <div className="error-div d-flex align-items-center justify-content-center">
            <div className="text-center">
                <p>Sorry!!! We can't match this url!</p>
                <h1 className="text-danger">This page is not found<FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon></h1>
            </div>
        </div>
    );
};

export default PageNotFound;