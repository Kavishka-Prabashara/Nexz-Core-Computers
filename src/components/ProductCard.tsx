import React, { useState } from 'react';

interface ProductCardProps {
    image: string;
    name: string;
    title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, title }) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);

    return (
        <div
            className="border p-4 rounded-lg shadow hover:shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer"
            onClick={() => setShowDetails(!showDetails)}
        >
            <img src={image} alt={name} className="mx-auto mb-4 h-40 w-full object-cover" />
            <h2 className="text-lg font-bold mb-2">{name}</h2>
            <p className="text-sm text-gray-500">{title}</p>

            {/* Show product details on click */}
            {showDetails && (
                <div className="mt-4 bg-gray-50 p-2 rounded">
                    <p>Details of {name}</p>
                    <p className="text-sm">Some detailed information about the product goes here...</p>
                </div>
            )}
        </div>
    );
};

export default ProductCard;
