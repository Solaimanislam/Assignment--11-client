import { useLoaderData } from "react-router-dom";
import AllCard from "./AllCard";
import { TabTitle } from "../Utils/title";



const AllService = () => {
    TabTitle('Service');
    

    const allServices = useLoaderData();
  


    return (
        <div>
            {/* search functionality */}

            <div className=" bg-gray-100 m-4 p-4">
                <input id="search-field" type="text" placeholder="Search here..." className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-warning ml-4">Search</button>
            </div>


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