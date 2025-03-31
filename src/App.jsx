
import { Suspense } from 'react'
import './App.css'
import Products from './components/products/Products'

const fetchProducts = async () => {
  const res = await fetch('https://dummyjson.com/products')
  return res.json()
}

function App() {
  const productsPromise = fetchProducts()
  return (
    <>
      <Suspense fallback={<h3 className='text-center'>Products Are Loading.....</h3>}>
        <Products productsPromise={productsPromise}>
        </Products>
      </Suspense>

    </>
  )
}

export default App
