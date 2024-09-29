import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import MyCart from './pages/category/MyCart';
import Laptop from './pages/category/Laptop';
import PC from './pages/category/PC';
import Monitor from './pages/category/Monitor';
import Mouse from './pages/category/Mouse';
import Keyboard from './pages/category/KeyBoard';
import Processor from './pages/category/Processor';
import Motherboard from './pages/category/MotherBoard';
import bgPic from './assets/images/bgPic.jpeg';

function App() {
    return (
        <Router>
            <div className="flex flex-col h-screen">
                <Navbar />
                <div className="flex flex-grow">
                    <SideBar />
                    <div
                        className="relative flex-grow p-4 bg-cover bg-center"
                        style={{ backgroundImage: `url(${bgPic})` }}
                    >
                        {/* Dark transparent overlay */}
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative z-10"> {/* Content container */}
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/mycart" element={<MyCart />} />
                                <Route path="/laptop" element={<Laptop />} />
                                <Route path="/pc" element={<PC />} />
                                <Route path="/monitor" element={<Monitor />} />
                                <Route path="/mouse" element={<Mouse />} />
                                <Route path="/keyboard" element={<Keyboard />} />
                                <Route path="/processor" element={<Processor />} />
                                <Route path="/motherboard" element={<Motherboard />} />
                            </Routes>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
