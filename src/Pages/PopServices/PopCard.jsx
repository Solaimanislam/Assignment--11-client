
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Fade } from "react-awesome-reveal";

const PopCard = ({service}) => {

    const {_id, name, price, description, uName, image} = service;


    return (
        <div className="card card-compact bg-base-100 shadow-xl" data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000">
            <figure><img className=" w-full lg:h-[300px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <Fade direction="up">
                        <h2 className="card-title">Service_Name: {name}</h2>
                    </Fade>
                   
                </div>
                <Fade direction="right">
                    <h2 className="card-title text-orange-600">Description: {description}</h2>
                </Fade>
                <div className=" flex items-center gap-1 justify-between">
                    <div className=" flex items-center text-lg font-semibold gap-1 ">

                        <p className="  text-green-400">Price: {price}</p>
                    </div>
                    <div className=" flex items-center text-lg font-semibold gap-1 ">

                        <h4 className="  text-blue-400">Service_Provider: {uName}</h4>
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

export default PopCard;

PopCard.propTypes = {
    service: PropTypes.node
}