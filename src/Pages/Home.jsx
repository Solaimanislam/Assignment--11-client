// import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Bannar from "../components/Bannar";
import PopServices from "./PopServices/PopServices";
import { TabTitle } from "./Utils/title";
import OurService from "./OurService/OurService";
import About from "./Abour/About";
import Contact from "./Contact/Contact";


const Home = () => {
    TabTitle('Home');

    

    return (
        <div className=" font-lato">
            <Bannar></Bannar>

            {/* Popular service */}
            <div className=" text-center mx-auto mt-6 lg:mt-12">
                <h2 className=" text-3xl lg:text-5xl font-bold mb-4 text-orange-500">Popular Services</h2>
                <p className=" lg:text-xl font-medium text-purple-500">Home service providers often offer flexible scheduling options, allowing customers to book appointments at times that are convenient for them. This flexibility appeals to individuals with busy schedules or unpredictable routines.</p>
            </div>
            <PopServices></PopServices>
            <div className="card-actions justify-center">
                <Link
                    to='/allService'
                ><button className="btn btn-outline mb-6 btn-accent">Show All</button></Link>
            </div>
            {/* service section */}
            <div className=" text-center mx-auto mt-6 mb-6 lg:mt-12">
                <h2 className=" text-3xl lg:text-5xl font-bold mb-4 text-purple-500 " data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">Our Services</h2>
                <p className=" text-base lg:text-xl font-medium text-emerald-400">Each service should be described in detail, emphasizing the value it brings to your clients and how it sets your residential home agency apart from competitors. Including testimonials or case studies can also help demonstrate your expertise and the positive outcomes you have achieved for your clients.</p>
            </div>
            <OurService></OurService>
            {/* About us */}

            <div className=" text-center mx-auto mt-6 lg:mt-12">
                <h2 className=" text-3xl lg:text-5xl font-bold mb-4 text-orange-800 " data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">About US</h2>
                <p className=" text-base lg:text-xl font-medium" data-aos="zoom-in-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">What Our Customers Say About Us</p>
            </div>
            <About></About>
             {/* About us */}

             <div className=" text-center mx-auto mt-6 lg:mt-12">
                <h2 className=" text-3xl lg:text-5xl font-bold mb-4 text-orange-800 " data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">Contact US</h2>
                <p className=" text-base lg:text-xl font-medium" data-aos="zoom-in-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">If you are looking for home services, it would be helpful to know your specific needs and location so I can guide you accordingly.</p>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default Home;