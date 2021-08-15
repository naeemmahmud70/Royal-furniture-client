import React from 'react';

const Loading = () => {
    return (
        <div className="text-center">
            <div class="spinner-border text-success" role="status">
                <span class="visually-hidden"></span>

            </div>
            <p className="mt-2">Loading... Please wait!!!</p>
        </div>
    );
};

export default Loading;