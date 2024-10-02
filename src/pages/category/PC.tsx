import React from 'react';
import ProductCard from '../../components/ProductCard'; // ProductCard component
import ProductLayout from '../../components/ProductLayout'; // Import the layout interface
import product7 from "../../assets/product/7.png";

const Monitor: React.FC = () => {
    return (
        <div>
            <h1 className="text-4xl text-white ml-0 md:ml-4 lg:ml-8">&nbsp;&nbsp;&nbsp;&nbsp;Desktop Computers</h1>
            <ProductLayout>
                <div className="flex justify-center items-center">
                <ProductCard
                    image={product7}
                    name="I5 11th gen"
                    category="PC"
                    description="16 GB DDR4,1TB SDD,RTX 2050 24GB"
                    price={300000}
                    availability="In Stock"
                />
            </div>
            <div className="flex justify-center items-center">
                <ProductCard
                    image={product7}
                    name="I7 12th gen"
                    category="PC"
                    description="16 GB DDR4,1TB SDD,RTX 3090 24GB"
                    price={450000}
                    availability="In Stock"
                />
            </div>
            <div className="flex justify-center items-center">
                <ProductCard
                    image={product7}
                    name="I9 13th gen"
                    category="PC"
                    description="32 GB DDR5,2TB SDD,RTX 4060 12GB"
                    price={980000}
                    availability="In Stock"
                />
            </div>
            <div className="flex justify-center items-center">
                <ProductCard
                    image={product7}
                    name="I9 14th gen"
                    category="PC"
                    description="64 GB DDR5,4TB SDD,RTX 4090 24GB"
                    price={1000000}
                    availability="In Stock"
                />
            </div>
        </ProductLayout>
        </div>
    );
};

export default Monitor;
