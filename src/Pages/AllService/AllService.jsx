import { useLoaderData } from "react-router-dom";
import AllCard from "./AllCard";
import { TabTitle } from "../Utils/title";
// import { useState } from "react";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";


const AllService = () => {
    TabTitle('Service');
    // const {user} = useContext(AuthContext);

    const allServices = useLoaderData();
    // const [query, setQuery] = useState();
    // console.log(allServices.filter(user=> user.first_name.includes('So')));
    // console.log(services);

    // const handleSearch = () => {
    //     // console.log('handle clicked');
    //     const searchfield = document.getElementById('search-field');
    //     const searchText = searchfield.value;
    //     console.log(searchText);
    // }



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