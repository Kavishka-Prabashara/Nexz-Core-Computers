import { useState, useEffect } from "react";
import product1 from "../assets/product/1.png";
import product2 from "../assets/product/2.png";
import product3 from "../assets/product/3.png";
import product4 from "../assets/product/4.png";
import product5 from "../assets/product/5.png";
import { FiSearch, FiSettings } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight, FaTruck } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { Typewriter } from 'react-simple-typewriter';
import ProductSlider from "../components/CustomeSlider.tsx";

const images = [product1, product2, product3, product4, product5];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const specialOffers = [
        {
            name: 'Gaming Laptop',
            category: 'Laptops',
            price: 1500,
            image: product1,
        },
        {
            name: 'Wireless Mouse',
            category: 'Accessories',
            price: 50,
            image: product2,
        },
    ];

    const newArrivals = [
        {
            name: 'Smartphone',
            category: 'Mobiles',
            price: 800,
            image: product3,
        },
        {
            name: 'Gaming Keyboard',
            category: 'Accessories',
            price: 120,
            image: product4,
        },
    ];
    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [currentIndex]);

    // Go to the next slide
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Go to the previous slide
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div>
            {/* Search Bar */}
            <div className="flex justify-center items-center my-14">
                <div className="relative w-full max-w-screen-sm px-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full py-2 pl-10 pr-4 bg-transparent border border-white text-white rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                    />
                    <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"/>
                </div>
            </div>

            {/* TypeWriter Section */}
            <section>
                <div className="flex justify-center items-center h-40">
                    <h1 className="text-2xl md:text-4xl font-bold text-white neon-text">
                        <Typewriter
                            words={['NexCore Computers','Sri Lanka #No 1 PC Shop', 'Island Wide Delivery', 'Fastest Delivery']}
                            loop={true}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h1>
                </div>
            </section>

            {/* Image Slider */}
            <div className="flex justify-center items-center my-14">
            <section className="relative w-2/6 h-[500px] overflow-hidden">
                <div className="flex transition-transform duration-500"
                    style={{transform: `translateX(-${currentIndex * 100}%)`}}
                    >
                    {images.map((image, index) => (
                        <div key={index} className="w-full flex-shrink-0 h-80 ">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-[400px] object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Prev Button */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                    <FaChevronLeft/>
                </button>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                    <FaChevronRight/>
                </button>

                {/* Dots Navigation */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${
                                currentIndex === index ? "bg-white" : "bg-gray-400"
                            }`}
                            onClick={() => setCurrentIndex(index)}
                        ></button>
                    ))}
                </div>
            </section>
            </div>

            <section>
                <div className="flex flex-col md:flex-row flex-wrap">
                    <ProductSlider
                        title="Special Offers"
                        products={specialOffers}
                        titleClass="text-white text-4xl"
                    />
                    <ProductSlider
                        title="New Arrivals"
                        products={newArrivals}
                        titleClass="text-white text-4xl"
                    />
                </div>
            </section>


            {/* Cards Section */}
            <div
                className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-4 my-10">
                {/* Warranty Assured Card */}
                <div
                    className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-lg p-6 rounded-lg max-w-xs text-center border border-blue-500 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
                    <AiFillSafetyCertificate size={48} className="mx-auto text-white mb-4 neon-text"/>
                    <h3 className="text-xl font-semibold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Warranty</h3>
                    <p className="text-gray-200 mt-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                    <p className="text-xs text-gray-300 mt-2">*Conditions Applied</p>
                </div>

                {/* Custom Orders Card */}
                <div
                    className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow-lg p-6 rounded-lg max-w-xs text-center border border-green-500 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
                    <FiSettings size={48} className="mx-auto text-white mb-4 neon-text"/>
                    <h3 className="text-xl font-semibold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Customized Orders</h3>
                    <p className="text-gray-200 mt-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                    <p className="text-xs text-gray-300 mt-2">*Conditions Applied</p>
                </div>

                {/* Cash on Delivery Card */}
                <div
                    className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 shadow-lg p-6 rounded-lg max-w-xs text-center border border-red-500 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
                    <FaTruck size={48} className="mx-auto text-white mb-4 neon-text"/>
                    <h3 className="text-xl font-semibold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Cash on Delivery</h3>
                    <p className="text-gray-200 mt-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                    <p className="text-xs text-gray-300 mt-2">*Conditions Applied</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
