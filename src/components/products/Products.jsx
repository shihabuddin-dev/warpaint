import React, { use, useState } from 'react';
import Product from '../product/Product';
import Cart from '../cart/Cart';

const Products = ({ productsPromise }) => {
    const productsObj = use(productsPromise)
    const products = productsObj.products

    const [addCart, setAddCart] = useState([])
    const handleProductAddToCart = (product) => {
        const newProduct = [...addCart, product]
        setAddCart(newProduct)
    }
    const handleProductClear = () => {
setAddCart([])
    }
    return (
        <div>
            <h1 className='text-xl text-semibold text-center'>Total Products is: {products.length}</h1>
            <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                <div className='grid col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 gap-3 mt-4 sm:grid-cols-2 md:grid-cols-3'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            handleProductAddToCart={handleProductAddToCart}
                            product={product}></Product>)
                    }
                </div>
                <div className='col-span-1 bg-slate-100 p-4 rounded-md'>
                    <h2 className='text-center text-xl font-semibold pb-2'>Cart Product {addCart.length}</h2>
                    <div className='flex items-center'>
                    <button
                    onClick={handleProductClear}
                    className='py-1 px-3 bg-gray-900 text-white rounded-md cursor-pointer mx-auto'>Clear History</button>
                    </div>
                    <div>
                        {
                            addCart.map(cartProduct => <Cart cartProduct={cartProduct}></Cart>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Products;