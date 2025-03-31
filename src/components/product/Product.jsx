import React from 'react';

const Product = ({ product }) => {
    const { title, thumbnail, price, availabilityStatus } = product
    return (
        <div className='p-4 border-2 rounded-md space-y-2'>
            <h3 className='text-gray-800 font-semibold'>{title}</h3>
            <img src={thumbnail} alt="this is a products" />
            <p>Price: <span className='text-xl'>${price}</span> </p>
            <p>Status: {availabilityStatus} </p>
            <button className='py-1.5 px-3 bg-gray-900 text-white rounded-md'>Cart +</button>

        </div>
    );
};

export default Product;