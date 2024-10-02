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
import Ram from './pages/category/Ram.tsx';
import Storages from './pages/category/Storage.tsx';
import GraphicCard from './pages/category/GraphicCard.tsx';
import HeadPhones from './pages/category/HeadPhone.tsx';
import Casing from './pages/category/Casing.tsx';

function App() {
    return (
        <Router>
            <div className="flex flex-col h-screen">
                {/* Fixed Navbar */}
                <Navbar />

                {/* Main Content */}
                <div className="sticky flex flex-grow" style={{ marginTop: '80px' }}> {/* Adjust margin to match navbar height */}
                    {/* Sidebar */}
                    <SideBar />

                    {/* Main Content Area */}
                    <div
                        className="relative flex-grow p-4"
                        style={{
                            backgroundImage: `url(${bgPic})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundAttachment: 'fixed',
                        }}
                    >
                        {/* Dark transparent overlay */}
                        <div className="absolute inset-0 bg-black opacity-80 pointer-events-none"></div>

                        {/* Content container */}
                        <div className="relative z-10">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/mycart" element={<MyCart />} />
                                <Route path="/laptop" element={<Laptop />} />
                                <Route path="/pc" element={<PC />} />
                                <Route path="/monitor" element={<Monitor />} />
                                <Route path="/mouse" element={<Mouse />} />
                                <Route path="/casing" element={<Casing />} />
                                <Route path="/headphones" element={<HeadPhones />} />
                                <Route path="/ram" element={<Ram />} />
                                <Route path="/storages" element={<Storages />} />
                                <Route path="/graphiccard" element={<GraphicCard />} />
                                <Route path="/keyboard" element={<Keyboard />} />
                                <Route path="/processor" element={<Processor />} />
                                <Route path="/motherboard" element={<Motherboard />} />
                            </Routes>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
