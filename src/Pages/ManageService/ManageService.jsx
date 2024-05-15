import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { TabTitle } from "../Utils/title";


const ManageService = () => {
    TabTitle('MangeService');

    const { user } = useContext(AuthContext) || {};

    const [item, setItem] = useState([]);


    useEffect(() => {
        fetch(`https://home-service-server-mu.vercel.app/manageService/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
            });
    }, [user]);

    // console.log(item);

    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://home-service-server-mu.vercel.app/services/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Craft has been deleted.",
                                icon: "success"
                            });
                            const remaining = item.filter(c => c._id !== _id);
                            setItem(remaining);
                        }
                    })
            }
        });
    }


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3 container mx-auto">
            {
                item?.map(p => (
                    <div key={p._id}  >
                        <div className="card card-compact bg-base-100 shadow-xl" data-aos="zoom-in"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="3000">
                            <figure><img className=" w-full lg:h-[300px]" src={p.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <div className="flex items-center justify-between">
                                    <h2 className="card-title">Service_Name: {p.name}</h2>
                                    
                                </div>
                               
                                <div className=" flex items-center gap-1 justify-between">
                                    <div className=" flex items-center text-lg font-semibold gap-1 ">

                                        <p className="  text-green-400">Price: {p.price}</p>
                                    </div>
                                    <div className=" flex items-center text-lg font-semibold gap-1 ">

                                        <h4 className="  text-blue-400">Area: {p.area}</h4>
                                    </div>
                                </div>
                                <div className=" flex items-center gap-1 justify-between">
                                    <div className=" flex items-center text-lg font-semibold gap-1 ">

                                    <h4 className=" text-cyan-600">Provider_Email: {user?.email}</h4>
                                       
                                    </div>
                                    <div className=" flex items-center text-lg font-semibold gap-1 ">

                                        
                                    </div>
                                </div>
                                <div className=" flex justify-around">

                                    <Link to={`updateService/${p._id}`} ><button className="btn btn-outline btn-primary">Update</button></Link>
                                    <Link ><button
                                        onClick={() => handleDelete(p._id)}
                                        className="btn btn-outline btn-secondary">Delete</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    );
};

export default ManageService;