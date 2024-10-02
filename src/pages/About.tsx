import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdOutlineVerified } from 'react-icons/md';
import { GiMoneyStack } from 'react-icons/gi';
import { AiOutlineHome } from 'react-icons/ai';

const About = () => {
    return (
        <section className="p-8 bg-gray-100 bg-transparent">
            <div className="container mx-auto">
                {/* CEO Section */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4 text-white">About Our Shop</h2>
                    <p className="text-lg  text-white">
                        Welcome to NexzCore Computers, your go-to destination for all things computers and tech. Our shop
                        is managed by our CEO, Kavishka Prabashara, who has over 5 years of experience in the computer hardware
                        industry. Our mission is to provide the best products, customer service, and support to our
                        customers.
                    </p>
                </div>

                {/* Location and Map */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4  text-white">Where to Find Us</h3>
                    <p className="text-lg  text-white">
                        We're located at 123 Colombo, Sri Lanka . Visit us for a wide selection of PCs,
                        laptops, and accessories.
                    </p>
                    {/* Map Embed */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126743.58638243076!2d79.773803!3d6.922002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1727892834400!5m2!1sen!2slk"
                        width="100%"
                        height="450"
                        frameBorder="0"
                        style={{border: 0}}
                        allowFullScreen
                        aria-hidden="false"
                        /*tabIndex="0"*/
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Warranty */}
                    <div className="flex items-center space-x-4">
                        <MdOutlineVerified className="text-5xl text-green-500"/>
                        <div>
                            <h4 className="text-xl font-semibold  text-white">Warranty</h4>
                            <p className="text-lg  text-white">All of our products come with a 1-year warranty.</p>
                        </div>
                    </div>

                    {/* Cash on Delivery */}
                    <div className="flex items-center space-x-4">
                        <GiMoneyStack className="text-5xl text-blue-500" />
                        <div>
                            <h4 className="text-xl font-semibold  text-white">Cash on Delivery</h4>
                            <p className="text-lg  text-white">We offer cash on delivery for your convenience.</p>
                        </div>
                    </div>

                    {/* Trust Certificate */}
                    <div className="flex items-center space-x-4">
                        <AiOutlineHome className="text-5xl text-yellow-500" />
                        <div>
                            <h4 className="text-xl font-semibold text-white">Trust Certificate</h4>
                            <p className="text-lg text-white">Our store is certified for quality and trustworthiness.</p>
                        </div>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-4 text-white">Follow Us on Social Media</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-3xl text-blue-600" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-3xl text-blue-400" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-3xl text-pink-500" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
