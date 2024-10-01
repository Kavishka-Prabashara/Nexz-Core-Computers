import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Range } from 'react-range';

const CustomizeSideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const [priceRange, setPriceRange] = useState([1000, 1000000]);
    const [availability, setAvailability] = useState({
        inStock: false,
        outOfStock: false,
    });
    const [brands, setBrands] = useState({
        HP: false,
        Dell: false,
        MSI: false,
    });

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        category: string
    ) => {
        const { name, checked } = event.target;
        if (category === 'availability') {
            setAvailability((prev) => ({ ...prev, [name]: checked }));
        } else if (category === 'brands') {
            setBrands((prev) => ({ ...prev, [name]: checked }));
        }
    };

    const handlePriceChange = (values: number[]) => {
        setPriceRange(values);
    };

    return (
        <>
            {/* Hamburger Icon (visible on mobile) */}
            <div className="absolute top-5 left-0 md:hidden z-50">
                <button
                    onClick={toggleSidebar}
                    className="text-white focus:outline-none"
                >
                    {isOpen ? <FiX size={30}/> : <FiMenu size={30}/>}
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`w-64 p-4 shadow-lg fixed top-20 left-0 h-full z-50 transition-transform transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 md:relative`}
            >
                <div className="flex justify-end mb-4 md:hidden">
                    <button
                        onClick={toggleSidebar}
                        className="text-white focus:outline-none"
                    >
                        <FiX size={30}/>
                    </button>
                </div>
                {/* Price Filter */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold bg text-white">Price</h2>
                    <div className="mt-4">
                        <Range
                            step={100}
                            min={1000}
                            max={1000000}
                            values={priceRange}
                            onChange={(values) => handlePriceChange(values)}
                            renderTrack={({props, children}) => (
                                <div
                                    {...props}
                                    className="w-full h-2 bg-gray-300 rounded"
                                >
                                    {children}
                                </div>
                            )}
                            renderThumb={({props}) => (
                                <div
                                    {...props}
                                    className="w-5 h-5 bg-white border border-gray-300 rounded-full"
                                />
                            )}
                        />
                        <div className="flex justify-between mt-2">
                            <span className=" text-white">Rs.{priceRange[0]}</span>
                            <span className=" text-white">Rs.{priceRange[1]}</span>
                        </div>
                    </div>
                </div>

                {/* Availability Filter */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-white">Availability</h2>
                    <div className="mt-2">
                        <label className="flex items-center  text-white">
                            <input
                                type="checkbox"
                                name="inStock"
                                checked={availability.inStock}
                                onChange={(e) => handleCheckboxChange(e, 'availability')}
                                className="mr-2"
                            />
                            Instock
                        </label>
                        <label className="flex items-center mt-2 text-white">
                            <input
                                type="checkbox"
                                name="outOfStock"
                                checked={availability.outOfStock}
                                onChange={(e) => handleCheckboxChange(e, 'availability')}
                                className="mr-2"
                            />
                            Out of Stock
                        </label>
                    </div>
                </div>

                {/* Brand Filter */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-white">Brands</h2>
                    <div className="mt-2">
                        <label className="flex items-center  text-white">
                            <input
                                type="checkbox"
                                name="HP"
                                checked={brands.HP}
                                onChange={(e) => handleCheckboxChange(e, 'brands')}
                                className="mr-2"
                            />
                            HP
                        </label>
                        <label className="flex items-center mt-2  text-white">
                            <input
                                type="checkbox"
                                name="Dell"
                                checked={brands.Dell}
                                onChange={(e) => handleCheckboxChange(e, 'brands')}
                                className="mr-2"
                            />
                            Dell
                        </label>
                        <label className="flex items-center mt-2  text-white">
                            <input
                                type="checkbox"
                                name="MSI"
                                checked={brands.MSI}
                                onChange={(e) => handleCheckboxChange(e, 'brands')}
                                className="mr-2"
                            />
                            MSI
                        </label>
                    </div>
                </div>
            </aside>

            {/* Overlay (for mobile) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 md:hidden z-20"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
};

export default CustomizeSideBar;
