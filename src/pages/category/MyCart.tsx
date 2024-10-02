import React, { useState } from 'react';

const MyCart: React.FC = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            title: "Product 1",
            image: "https://via.placeholder.com/100",
            availability: true,
            qty: 1,
            unitPrice: 100,
            category: "Category 1",
        },
        {
            id: 2,
            title: "Product 2",
            image: "https://via.placeholder.com/100",
            availability: false,
            qty: 1,
            unitPrice: 200,
            category: "Category 2",
        },
    ]);

    const handleQtyChange = (id: number, newQty: number) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, qty: newQty } : item
            )
        );
    };

    const handleRemoveItem = (id: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.unitPrice * item.qty, 0);

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-4xl h-full p-8 relative overflow-auto">
                {/* Close button */}
                <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
                    X
                </button>

                <h2 className="text-2xl font-bold mb-6 text-center">My Cart</h2>

                {/* Cart Items */}
                <div className="space-y-4">
                    {cartItems.map(item => (
                        <div key={item.id} className="flex justify-between items-center border-b py-4">
                            <div className="flex items-center space-x-4">
                                <img src={item.image} alt={item.title} className="w-20 h-20" />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-sm text-gray-600">Category: {item.category}</p>
                                    <p className={`text-sm ${item.availability ? 'text-green-500' : 'text-red-500'}`}>
                                        {item.availability ? 'In Stock' : 'Out of Stock'}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                {/* Quantity Selector */}
                                <div className="flex items-center">
                                    <button
                                        className="px-2 py-1 bg-gray-300"
                                        onClick={() => handleQtyChange(item.id, Math.max(1, item.qty - 1))}
                                    >
                                        -
                                    </button>
                                    <span className="px-4">{item.qty}</span>
                                    <button
                                        className="px-2 py-1 bg-gray-300"
                                        onClick={() => handleQtyChange(item.id, item.qty + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <p className="text-lg">${item.unitPrice}</p>
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => handleRemoveItem(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add more item and button */}
                <div className="mt-8 flex justify-between items-center">
                    <div>
                        <select className="p-2 border border-gray-300">
                            <option>Add more item</option>
                            <option>Product 3</option>
                            <option>Product 4</option>
                        </select>
                        <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">
                            Add Item
                        </button>
                    </div>

                    {/* Total and Print Quote */}
                    <div>
                        <p className="text-xl font-semibold">Total: ${totalPrice}</p>
                        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
                            Print My Quotation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
