import {useState} from "react";

interface ProductSliderProps {
    title: string;
    products: {
        name: string;
        category: string;
        price: number;
        image: string;
    }[];
    titleClass?: string;  // Make titleClass an optional prop
}

const ProductSlider: React.FC<ProductSliderProps> = ({ title, products, titleClass }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    return (
        <div className="w-full py-8">
            <h2 className={`text-center font-bold mb-6 ${titleClass}`}>{title}</h2>
            <div className="relative w-full flex justify-center items-center">
                <button
                    onClick={prevSlide}
                    className="absolute left-0 bg-gray-200 p-2 rounded-full"
                >
                    &#8249;
                </button>

                <div className="w-80 h-80 overflow-hidden">
                    <img
                        src={products[currentIndex].image}
                        alt={products[currentIndex].name}
                        className="w-full h-full object-cover"
                    />
                    <div className="text-center mt-4">
                        <h3 className="text-lg font-semibold text-white">{products[currentIndex].name}</h3>
                        <p className="text-sm text-gray-400">{products[currentIndex].category}</p>
                        <p className="text-lg font-bold text-white">${products[currentIndex].price}</p>
                    </div>
                </div>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 bg-gray-200 p-2 rounded-full"
                >
                    &#8250;
                </button>
            </div>
        </div>
    );
};
export default ProductSlider;
