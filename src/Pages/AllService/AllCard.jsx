import { Link } from "react-router-dom";


const AllCard = ({ ser }) => {

    const { _id, name, price, area, description, email, uName, image } = ser;


    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className=" w-full lg:w-1/2 pt-6 rounded-lg lg:h-[300px]" src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="  lg:font-medium lg:text-lg">{description}</p>
                <div className=" flex items-center gap-1 justify-between">
                    <div className=" flex items-center lg:text-lg lg:font-semibold gap-1 ">

                        <p className="  text-green-400">Price: {price}</p>
                    </div>
                    <div className=" flex items-center lg:text-lg lg:font-semibold gap-1 ">

                        <h4 className="  text-blue-400">Area:{area}</h4>
                    </div>
                </div>
                <div className="flex">

                        <div className=" flex items-center gap-1 justify-between">
                            <div className=" flex items-center text-lg font-semibold gap-1 ">

                                <p className="  text-green-400"></p>
                            </div>
                            <div className=" flex items-center text-lg font-semibold gap-1 ">

                                <h4 className=" text-purple-600">Service_Provider: {uName}</h4>
                            </div>
                        </div>
                    </div>

                <div className="card-actions justify-end">
                    <Link
                        to={`/service/${_id}`}
                    ><button className="btn btn-outline btn-secondary">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllCard;