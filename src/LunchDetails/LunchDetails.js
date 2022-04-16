import React from 'react';

const LunchDetails = ({ foodItem }) => {
    const { name, description, image, price } = foodItem;
    return (
        <div className=' p-3 food-item col-12 col-md-6 col-lg-4 text-center'>
            <img className='mt-3' src={image} alt="" />
            <h6 className='mt-3'>{name}</h6>
            <p>{description}</p>
            <h4>$ {price}</h4>
        </div>
    );
};

export default LunchDetails;