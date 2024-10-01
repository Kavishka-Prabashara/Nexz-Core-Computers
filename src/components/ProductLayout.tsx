import React from 'react';
import CustomizeSideBar from './CustomizeSideBar'; // Sidebar component

interface ProductLayoutProps {
    children: React.ReactNode; // Children to render inside the layout
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ children }) => {
    return (
        <section className="flex">
            <aside>
                <CustomizeSideBar />
            </aside>
            <main className="flex-1 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {children}
                </div>
            </main>
        </section>
    );
};

export default ProductLayout;
