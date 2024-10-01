import React from 'react';
import ProductCard from '../../components/ProductCard'; // Importing the product card
import CustomizeSideBar from '../../components/CustomizeSideBar'; // Importing the customized sidebar

const Monitor: React.FC = () => {
    return (
        <section className="flex">
            <aside>
                <CustomizeSideBar/>
            </aside>
            <main className="flex-1 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                </div>
            </main>

        </section>
    )
        ;
};

export default Monitor;
