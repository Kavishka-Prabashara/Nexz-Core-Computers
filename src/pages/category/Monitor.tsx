import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard'; // Importing the product card
import CustomizeSideBar from '../../components/CustomizeSideBar'; // Importing the customized sidebar

const Monitor: React.FC = () => {
    const [showSidebar, setShowSidebar] = useState<boolean>(true); // Sidebar visible by default on larger screens

    return (
        <section className="flex flex-col lg:flex-row">
            {/* Burger Icon - visible only on mobile */}
            {!showSidebar && (
                <button
                    className="lg:hidden p-4 text-light-blue-500"
                    onClick={() => setShowSidebar(true)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            )}

            {/* Sidebar */}
            <CustomizeSideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            {/* Line divider */}
            <div className="border-r border-light-blue-300 w-0.5"></div>

            {/* Main Content */}
            <main className="p-4 w-full lg:w-3/4">
                <h1 className="text-3xl font-bold text-light-blue-500 mb-6">Product Listings</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Rendering Product Cards */}
                    <ProductCard
                        image="/path/to/image1.jpg"
                        name="Product 1"
                        title="Awesome Gadget"
                    />
                    <ProductCard
                        image="/path/to/image2.jpg"
                        name="Product 2"
                        title="Cool Device"
                    />
                    <ProductCard
                        image="/path/to/image3.jpg"
                        name="Product 3"
                        title="Modern Tech"
                    />
                </div>
            </main>

            {/* Overlay when sidebar is open on mobile */}
            {showSidebar && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
                    onClick={() => setShowSidebar(false)}
                />
            )}
        </section>
    );
};

export default Monitor;
