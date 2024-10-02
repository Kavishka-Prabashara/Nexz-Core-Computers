import React from 'react';
import ProductCard from '../../components/ProductCard'; // ProductCard component
import ProductLayout from '../../components/ProductLayout'; // Import the layout interface
import product6 from "../../assets/product/6.png";

const Monitor: React.FC = () => {
    return (
        <div>
            <h1 className="text-4xl text-white ml-0 md:ml-4 lg:ml-8">&nbsp;&nbsp;&nbsp;&nbsp;Monitor</h1>
            <ProductLayout>
                <div className="flex justify-center items-center">
                <ProductCard
                    image={product6}
                    name="Dell 22in"
                    category="Monitor"
                    description="Lorem Ipsum Neque porro quisquam"
                    price={19000}
                    availability="In Stock"
                />
            </div>
            <div className="flex justify-center items-center">
                <ProductCard
                    image={product6}
                    name="Dell 19in"
                    category="Monitor"
                    description="Lorem Ipsum Neque porro quisquam"
                    price={16000}
                    availability="In Stock"
                />
            </div>
            <div className="flex justify-center items-center">
                <ProductCard
                    image={product6}
                    name="Hp 24 in"
                    category="Monitor"
                    description="Lorem Ipsum Neque porro quisquam"
                    price={38000}
                    availability="In Stock"
                />
            </div>
            <div className="flex justify-center items-center">
                <ProductCard
                    image={product6}
                    name="MSI Frameless"
                    category="Monitor"
                    description="Lorem Ipsum Neque porro quisquam"
                    price={67000}
                    availability="In Stock"
                />
            </div>
        </ProductLayout>
        </div>
    );
};

export default Monitor;
