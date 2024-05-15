
import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { TabTitle } from "../Utils/title";



const Details = () => {
    TabTitle('Details');

    const { user } = useContext(AuthContext);

    const loaderService = useLoaderData();

    

    const { id } = useParams();
    
    const service = loaderService.find(service => service._id === id);
    


    return (
        <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
            <div className="card  bg-base-100 shadow-xl ">



                <figure><img className="w-full" src={user?.photoURL} alt="Movie" /></figure>

                <div className="card-body">
                    <h2 className=" text-center text-2xl font-bold text-purple-600">Service Provider Information:</h2>
                    <h2 className="card-title">Provider_Name:{service.uName} </h2>
                    <p className=" font-semibold text-sky-600">Area:{service.area}</p>

                </div>
            </div>
            <div className="card bg-base-100 shadow-xl mb-6 p-3">
                <figure data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"><img className=" lg:w-full rounded-xl lg:h-[450px]" src={service.image} alt="Shoes" /></figure>
                <div className="card-body" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className="flex items-center justify-between">
                        <Fade direction="right">
                            <h2 className="lg:text-xl font-bold text-orange-500"><span className=" lg:text-2xl font-bold text-black">Item Name:</span> {service.name}</h2>
                        </Fade>

                    </div>


                    <p className=" lg:text-xl font-bold text-sky-800"><span className=" text-yellow-800 ">Description: </span> {service.description}</p>
                    <div className=" lg:flex items-center gap-4 justify-between">
                        <div className=" flex items-center lg:text-lg font-semibold gap-3 ">

                            <Fade direction="right">
                                <p className="  text-green-400"><span className=" text-black font-bold">Price: </span> {service.price}</p>
                            </Fade>
                        </div>
                        <div className=" flex items-center lg:text-lg font-semibold gap-3 ">


                        </div>
                    </div>
                    <div className=" lg:flex items-center gap-4 justify-between">
                        <div className=" flex items-center lg:text-lg font-semibold gap-3 ">

                            <Fade direction="right">
                                <p className="flex gap-3  text-green-400"><span className=" text-black font-bold">Provider_Image: </span><img className=" rounded-full w-10 h-10" src={user?.photoURL} alt="" /> </p>
                            </Fade>
                        </div>
                        <div className=" flex items-center text-lg font-semibold gap-3 ">

                            <Fade direction="left">
                                <h4 className="  text-blue-400"><span className=" text-black font-bold">Provider_Name: </span>{service.uName}</h4>
                            </Fade>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link
                            to={`/bookService/${service._id}`}
                        ><button className="btn btn-outline btn-secondary">Book Now</button></Link>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Details;