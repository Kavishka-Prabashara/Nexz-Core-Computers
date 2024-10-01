import { useState, useEffect } from "react";
import product1 from "../assets/product/1.png";
import product2 from "../assets/product/2.png";
import product3 from "../assets/product/3.png";
import product4 from "../assets/product/4.png";
import product5 from "../assets/product/5.png";
import { FiSearch, FiSettings } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight, FaTruck } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";

const images = [product1, product2, product3, product4, product5];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
                    <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
                </div>
            </div>

            {/* Image Slider */}
            <section className="relative w-full h-[400px] overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-full flex-shrink-0">
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
                    <FaChevronLeft />
                </button>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                    <FaChevronRight />
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

            {/* Cards Section */}
            <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-4 my-10">
                {/* Warranty Assured Card */}
                <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs text-center">
                    <AiFillSafetyCertificate size={48} className="mx-auto text-blue-500 mb-4" />
                    <h3 className="text-xl font-semibold">Warranty</h3>
                    <p className="text-gray-600 mt-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">*Conditions Applied</p>
                </div>

                {/* Custom Orders Card */}
                <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs text-center">
                    <FiSettings size={48} className="mx-auto text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold">Customized Orders</h3>
                    <p className="text-gray-600 mt-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">*Conditions Applied</p>
                </div>

                {/* Home Delivery Card */}
                <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs text-center">
                    <FaTruck size={48} className="mx-auto text-red-500 mb-4" />
                    <h3 className="text-xl font-semibold">Cash on Delivery</h3>
                    <p className="text-gray-600 mt-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">*Conditions Applied</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
