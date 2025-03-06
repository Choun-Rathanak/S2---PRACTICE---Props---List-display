import React from "react";

function Card({ title, image, button }) {
    return (
        <div className="card" style={{ width: "30rem", margin: "10px" }}>
            <img src={image.src} className="card-img-top" alt={image.alt} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {/* Use the button prop */}
                <button className="btn btn-primary">{button}</button>
            </div>
        </div>
    );
}

export default Card;
