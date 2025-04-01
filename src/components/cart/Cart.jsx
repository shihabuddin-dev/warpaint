import React from 'react';

const Cart = ({ cartProduct }) => {
    const { title, thumbnail, price } = cartProduct
    return (
        <div>
            <img src={thumbnail} alt="this is products images"/>
            <h2 className='text-center font-semibold'>${price}</h2>
            <h2 className='text-center'>{title}</h2>
        </div>
    );
};

export default Cart;