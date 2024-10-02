import React from 'react';
import ProductCard from '../../components/ProductCard'; // ProductCard component
import ProductLayout from '../../components/ProductLayout'; // Import the layout interface
import product5 from "../../assets/product/5.png";

const Monitor: React.FC = () => {
    return (
        <div>
            <h1 className="text-4xl text-white ml-0 md:ml-4 lg:ml-8">&nbsp;&nbsp;&nbsp;&nbsp;Laptop</h1>
            <ProductLayout>
                <div className="flex justify-center items-center">
                <ProductCard
                    image={product5}
                    name="MSI Titan"
                    category="Laptop"
                    description="Lorem Ipsum Neque porro quisquam"
                    price={599000}
                    availability="In Stock"
                />
            </div>
            <div className="flex justify-center items-center">
                <ProductCard
                    image={product5}
                    name="MSI GF63"
                    category="Laptop"
                    description="Lorem Ipsum Neque porro quisquam"
                    price={335000}
                    availability="In Stock"
                />
            </div>
            <div className="flex justify-center items-center">
                <ProductCard
                    image={product5}
                    name="Dell Lattitude"
                    category="Laptop"
                    description="Lorem Ipsum Neque porro quisquam"
                    price={46000}
                    availability="In Stock"
                />
            </div>
            <div className="flex justify-center items-center">
                <ProductCard
                    image={product5}
                    name="Hp Havilion"
                    category="Laptop"
                    description="Lorem Ipsum Neque porro quisquam"
                    price={59000}
                    availability="In Stock"
                />
            </div>
        </ProductLayout>
        </div>
    );
};

export default Monitor;
