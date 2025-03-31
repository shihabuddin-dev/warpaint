import React from 'react';

const Product = ({product}) => {
    const {title}= product
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default Product;