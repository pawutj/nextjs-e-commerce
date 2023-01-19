import * as React from 'react'
import * as ReactRouter from 'react-router-dom';
import Product from '@/pages/product';
const Route: React.FC = () => {
    return (
        <ReactRouter.BrowserRouter >
            <ReactRouter.Routes>
                <ReactRouter.Route path="/product" element={<Product />} />
                <ReactRouter.Route path="/" element={<Product />} />

            </ReactRouter.Routes>
        </ReactRouter.BrowserRouter>
    )
}

export default Route