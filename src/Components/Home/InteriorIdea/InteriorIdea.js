import React from 'react';
import imgIdea from '../../../image/idea-img.jpg'
import './InteriorIdea.css'

const InteriorIdea = () => {
    return (
            <div className="row bg-light mt-4">
                <div className="col-md-5 interior-idea-img p-1">
                    <img src={imgIdea} alt="" />
                </div>
                <div className="col-md-7 p-5">
                    <h1 className="fw-bold">Interior Idea For Your Room</h1>
                    <h4>Keep things Minimal</h4>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro necessitatibus totam laborum eveniet quis voluptate provident voluptas nemo? Consectetur, ipsa. Ratione a deleniti, maiores ducimus veniam vitae. Quis libero facere aliquid vero, quaerat consequatur sequi dolor ipsam voluptatum illum, minus molestias earum. Adipisci molestias in illo illum? Odit maxime laudantium, natus consequatur perferendis ad. Rerum, molestias. Perferendis recusandae itaque doloribus nostrum fugiat harum, illo quia nobis dicta rerum a minima, optio nisi suscipit! Ut accusamus assumenda excepturi sequi temporibus eum beatae ratione! Laudantium voluptate facilis veniam adipisci rem omnis totam dolores velit error. Laudantium recusandae dolores enim adipisci, ad delectus? Animi exercitationem explicabo quasi enim tempora recusandae sapiente beatae repellat, ducimus sed, dolore ab iusto provident eaque eos eligendi, nostrum nemo amet pariatur consectetur repellendus et asperiores ex? Similique nostrum incidunt dignissimos, perferendis reiciendis possimus. Dolores unde rem quis provident dolore nemo, maiores ad illum numquam. Ipsa, ipsum magni hic esse velit voluptatum maxime debitis possimus optio, corrupti nisi veniam neque distinctio. Aspernatur hic amet atque optio, ullam incidunt doloribus voluptatibus iusto natus magnam fuga eius beatae tempore ipsa adipisci.</p>
                    <button className="header-button">Learn More...</button>
                </div>
            </div>
    );
};

export default InteriorIdea;