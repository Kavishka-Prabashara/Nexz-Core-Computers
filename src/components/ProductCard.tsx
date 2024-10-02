import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";

interface ProductCardProps {
    image: string;
    name: string;
    category: string;
    description: string;
    price: number;
    availability: 'In Stock' | 'Out of Stock' | 'Pre-Order';
    className?: string; // Adding className as an optional prop
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, category, description, price, availability, className }) => {
    const [inCart, setInCart] = useState(false);

    const handleAddToCart = () => {
        setInCart(true);
        // Handle adding product to cart logic here
    };

    return (
        <div
            className={`max-w-xs rounded overflow-hidden shadow-lg bg-transparent border border-white flex flex-col items-center justify-center p-4 relative group transition-all duration-500 ease-in-out hover:bg-gradient-to-l hover:from-blue-500 hover:to-blue-500 ${className}`}>


            <img className="w-40 h-40 object-cover mb-4" src={image} alt={name}/>
            <h3 className="font-bold text-xl mb-2 text-center text-amber-400 group-hover:text-white transition-colors duration-300 ">
                {name}
            </h3>
            <p className="text-base mb-2 text-center text-white group-hover:text-black ">Category: {category}</p>
            <p className="text-sm mb-4 text-center text-white group-hover:text-black ">{description}</p>
            <p className="text-lg font-semibold mb-2 text-center text-white group-hover:text-black ">RS.{price.toFixed(2)}</p>
            <p className={`mb-4 text-center text-white group-hover:text-black  ${availability === 'In Stock' ? 'text-green-600' : availability === 'Out of Stock' ? 'text-red-600' : 'text-yellow-500'}`}>
                {availability}
            </p>

            <button
                className={`absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out
                ${availability === 'Out of Stock' || inCart ? 'cursor-not-allowed opacity-50 hover:opacity-50' : ''}`}
                onClick={handleAddToCart}
                disabled={availability === 'Out of Stock' || inCart}
            >
                <FaCartPlus size={24}/>
            </button>
        </div>
    );
};

export default ProductCard;
