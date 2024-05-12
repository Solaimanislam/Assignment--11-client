import { useLoaderData } from "react-router-dom";
import PopCard from "./PopCard";


const PopServices = () => {

    const services = useLoaderData();
    console.log(services);

    return (
        <div>
            
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-3 lg:my-10 ">
                {
                    services.slice(0, 6).map(service => <PopCard
                        key={service._id}
                        service={service}
                    ></PopCard>)
                }
            </div>
        </div>
    );
};

export default PopServices;