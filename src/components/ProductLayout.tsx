import React, { useState } from 'react';
import CustomizeSideBar from './CustomizeSideBar'; // Sidebar component

interface ProductLayoutProps {
    children: React.ReactNode; // Children to render inside the layout
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open state

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
    };

    return (
        <section className="flex">
            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="p-2 bg-blue-500 text-white fixed top-4 left-4 z-50"
            >
                {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
            </button>

            {/* Sidebar with conditional rendering */}
            {isSidebarOpen && (
                <aside className="w-64 bg-gray-200">
                    <CustomizeSideBar />
                </aside>
            )}

            {/* Main Content */}
            <main className={`flex-1 p-4 ${isSidebarOpen ? 'ml-64' : ''}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {children}
                </div>
            </main>
        </section>
    );
};

export default ProductLayout;
