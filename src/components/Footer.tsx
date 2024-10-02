import footerImg from "../assets/images/footerBg.jpg";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer
            className="relative bg-fixed bg-cover bg-center text-white py-10"
            style={{ backgroundImage: `url(${footerImg})` }}
        >
            {/* Dark transparent overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* About Section */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4 text-white">About PC Shop</h4>
                        <p className="text-white">
                            Your go-to store for high-performance gaming PCs, components, and accessories. We offer the
                            latest products and expert support to help you build your dream setup.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="text-white">
                            <li className="mb-2">
                                <a href="/shop" className="hover:text-white">Shop</a>
                            </li>
                            <li className="mb-2">
                                <a href="/about" className="hover:text-white">About Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="/support" className="hover:text-white">Support</a>
                            </li>
                            <li className="mb-2">
                                <a href="/contact" className="hover:text-white">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                        <p className="text-white mb-2">
                            1234 PC Street, Tech City, 56789
                        </p>
                        <p className="text-white mb-2">
                            Email: support@pcshop.com
                        </p>
                        <p className="text-white mb-2">
                            Phone: +123 456 7890
                        </p>

                        {/* Social Media Links */}
                        <div className="mt-4">
                            <h5 className="text-lg font-semibold text-white">Follow Us</h5>
                            <div className="flex justify-center md:justify-start space-x-4 mt-2 text-white">
                                <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                                    <FaFacebookF/>
                                </a>
                                <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                                    <FaTwitter/>
                                </a>
                                <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                                    <FaInstagram/>
                                </a>
                                <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                                    <FaLinkedin/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-white mt-8">
                    <p>&copy; {new Date().getFullYear()} PC Shop. All rights reserved.</p>
                    <p>Designed by <a href="https://www.linkedin.com/in/kavishka-prabashara-wijerathna-899588189/" className="text-blue-500 hover:text-white">
                        Kavishka Prabashara Wijerathna
                    </a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
