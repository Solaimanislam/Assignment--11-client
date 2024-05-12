// import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Bannar from "../components/Bannar";
import PopServices from "./PopServices/PopServices";


const Home = () => {

    // const service = useLoaderData();
    // console.log(service);

    return (
        <div className=" font-lato">
            <Bannar></Bannar>

            {/* Popular service */}
            <div className=" text-center mx-auto mt-6 lg:mt-12">
            <h2 className=" text-3xl lg:text-5xl font-bold mb-4 text-orange-500">Popular Services</h2>
            <p className=" lg:text-xl font-medium">Home service providers often offer flexible scheduling options, allowing customers to book appointments at times that are convenient for them. This flexibility appeals to individuals with busy schedules or unpredictable routines.</p>
            </div>
            <PopServices></PopServices>
            <div className="card-actions justify-center">
                    <Link
                        to='/allService'
                    ><button className="btn btn-outline mb-6 btn-accent">Show All</button></Link>
                </div>
        </div>
    );
};

export default Home;