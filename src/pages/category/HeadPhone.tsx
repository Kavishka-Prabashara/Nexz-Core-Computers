import React from 'react';
import ProductCard from '../../components/ProductCard'; // ProductCard component
import ProductLayout from '../../components/ProductLayout'; // Import the layout interface

const Monitor: React.FC = () => {
    return (
        <div>
            <h1 className="text-4xl text-white ml-0 md:ml-4 lg:ml-8">Head Phone</h1>
            <ProductLayout>
                <div className="flex justify-center items-center">
                    <ProductCard
                        image="https://via.placeholder.com/300"
                        name="Cool Product"
                        category="Accessories"
                        description="A cool product you don't want to miss."
                        price={59.99}
                        availability="In Stock"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <ProductCard
                        image="https://via.placeholder.com/300"
                        name="Cool Product"
                        category="Accessories"
                        description="A cool product you don't want to miss."
                        price={59.99}
                        availability="In Stock"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <ProductCard
                        image="https://via.placeholder.com/300"
                        name="Cool Product"
                        category="Accessories"
                        description="A cool product you don't want to miss."
                        price={59.99}
                        availability="In Stock"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <ProductCard
                        image="https://via.placeholder.com/300"
                        name="Cool Product"
                        category="Accessories"
                        description="A cool product you don't want to miss."
                        price={59.99}
                        availability="In Stock"
                    />
                </div>
            </ProductLayout>
        </div>
    );
};

export default Monitor;
