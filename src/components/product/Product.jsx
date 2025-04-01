import React, { useState } from 'react';

const Product = ({ product, handleProductAddToCart }) => {
    const { title, thumbnail, price, brand, availabilityStatus } = product
    const [cart, setCart] = useState(true)
    const handleAddCart = () => {
        setCart(false)
        handleProductAddToCart(product)
    }
    return (
       
            <div className='p-4 border-2 rounded-md space-y-2'>
            <h3 className='text-gray-800 md:text-lg font-semibold text-center'>{title}</h3>
            <img src={thumbnail} alt="this is a products" />
            <p>Price: <span className='text-xl'>${price}</span> </p>
            <p>Brand: {brand}</p>
            <p>Status: {availabilityStatus} </p>
            <button
                onClick={handleAddCart}
                className='py-1.5 px-3 bg-gray-900 text-white rounded-md cursor-pointer'>{cart ? 'Cart +' : 'Added 🛒'}</button>
        </div>

       
    );
};

export default Product;