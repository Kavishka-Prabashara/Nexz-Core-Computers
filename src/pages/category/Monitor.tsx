
import ProductCard from '../../components/ProductCard'; // Importing the product card
import CustomizeSideBar from '../../components/CustomizeSideBar'; // Importing the customized sidebar

const Monitor: React.FC = () => {


    return (
        <section className="flex flex-col lg:flex-row">

            {/* Sidebar */}
            <CustomizeSideBar/>

            {/* Line divider */}
            <div className="border-r border-light-blue-300 w-0.5"></div>

            {/* Main Content */}
            <main className="p-4 w-full lg:w-3/4">
                <h1 className="text-3xl font-bold text-white mb-6">Monitors</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Rendering Product Cards */}
                    <ProductCard
                        image="/path/to/image1.jpg"
                        name="Product 1"
                        title="Awesome Gadget"
                    />
                    <ProductCard
                        image="/path/to/image2.jpg"
                        name="Product 2"
                        title="Cool Device"
                    />
                    <ProductCard
                        image="/path/to/image3.jpg"
                        name="Product 3"
                        title="Modern Tech"
                    />
                </div>
            </main>

        </section>
    );
};

export default Monitor;
