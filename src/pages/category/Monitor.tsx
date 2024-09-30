
import ProductCard from '../../components/ProductCard'; // Importing the product card
import CustomizeSideBar from '../../components/CustomizeSideBar'; // Importing the customized sidebar
import product1 from "../../assets/images/2187-2385-2187-2188-2187-20220225142403-XBOX.png"

const Monitor: React.FC = () => {


    return (
        <section>
            <h1 className="text-3xl font-bold text-white mb-6 ml-12">Monitors</h1>
            {/* Sidebar */}
            <section className="flex flex-col lg:flex-row">
            <CustomizeSideBar/>

            {/* Line divider */}
            <div className="border-r border-light-blue-300 w-0.5 mb-6 ml-12"></div>

            {/* Main Content */}
            <main className="p-4 w-full lg:w-3/4 ">


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Rendering Product Cards */}
                    <ProductCard
                        image={product1}
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
        </section>
    );
};

export default Monitor;
