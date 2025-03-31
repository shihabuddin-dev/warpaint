import React, { use } from 'react';
import Product from '../product/Product';

const Products = ({ productsPromise }) => {
    const productsObj = use(productsPromise)
    const products = productsObj.products
    return (
        <div>
            <h1 className='text-xl text-semibold text-center'>Total Products is: {products.length}</h1>
            <div className='grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;