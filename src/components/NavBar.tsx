import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi'; // Burger icon
import Logo from '../assets/images/logo.jpeg';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (scrollPosition > currentScrollPos || currentScrollPos === 0) {
                setIsNavbarVisible(true); // Show the navbar when scrolling up or at the top
            } else {
                setIsNavbarVisible(false); // Hide the navbar when scrolling down
            }

            setScrollPosition(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    return (
        <nav className={`bg-blue-900 p-4 fixed w-full top-0 z-50 transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="h-12 w-12 mr-2" />
                    <span className="text-white font-bold text-lg">NexCore Computers</span>
                </div>

                {/* Center: Menu items for larger screens */}
                <ul className="hidden md:flex flex-grow justify-end space-x-6 text-white">
                    <li><Link to="/" className="p-2">Home</Link></li>
                    <li><Link to="/about" className="p-2">About</Link></li>
                </ul>

                {/* Right: LKR Total and Customer Care */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="text-white bg-gray-900 p-2 rounded-lg">
                        <span><Link to="/mycart" className="p-2">My Cart</Link></span>
                        <span>LKR Total:</span> <span className="font-bold">4500.00</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <div
                            className="text-white bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-lg flex items-center justify-center">
                            Customer Care: <span className="font-bold">+94 123 456 789</span>
                        </div>
                    </div>

                </div>

                {/* Mobile Burger Icon */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <FiMenu className="text-white h-6 w-6"/>
                    </button>
                </div>
            </div>

            {/* Mobile: Menu items */}
            <ul className={`md:hidden flex-col mt-4 ${menuOpen ? 'block' : 'hidden'} text-center text-white`}>
                <li><Link to="/" className="block p-2">Home</Link></li>
                <li><Link to="/about" className="block p-2">About</Link></li>
                <li><Link to="/mycart" className="block p-2">My Cart</Link></li>
            </ul>

            {/* Centered Total Cost and Customer Care for Mobile */}
            <div className={`md:hidden flex flex-col items-center mt-4 ${menuOpen ? 'block' : 'hidden'}`}>
                <div className="text-white bg-gray-900 p-2 rounded-lg mb-2">
                    <span>LKR Total:</span> <span className="font-bold">4500.00</span>
                </div>
                <div className="text-white">
                    Customer Care: <span className="font-bold">+94 777 456 789</span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
