import React from 'react';
import ProductCard from '../../components/ProductCard'; // ProductCard component
import ProductLayout from '../../components/ProductLayout'; // Import the layout interface

const Monitor: React.FC = () => {
    return (
        <ProductLayout title="Processor">
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
    );
};

export default Monitor;
