import { useLoaderData } from "react-router-dom";
import AllCard from "./AllCard";


const AllService = () => {

    const allServices = useLoaderData();
    // console.log(services);




    return (
        <div>
             <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 p-3 lg:my-10 ">
                {
                    allServices.map(ser => <AllCard
                        key={ser._id}
                        ser={ser}
                    ></AllCard>)
                }
            </div>
        </div>
    );
};

export default AllService;