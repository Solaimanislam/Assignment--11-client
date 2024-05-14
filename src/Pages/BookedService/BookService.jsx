import { useContext, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
// import Swal from "sweetalert2";
import { TabTitle } from "../Utils/title";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";


const BookService = () => {
    TabTitle('Booking');

    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const bookLoader = useLoaderData();
    console.log(bookLoader);
    // const { _id, name, price, area, description, image } = bookLoader;

    const { id } = useParams();
    // const idInt = parseInt(id);
    const bService = bookLoader.find(service => service._id === id);
    // console.log(bService);
    // const { name, price, area, description, email, uName, image, uImage } = bService || {}

    const handleServiceSubmission = async event => {

        if(user?.email === bService.email) return toast.error('Action not permitted')

        event.preventDefault();

        const form = event.target;

        const name = bService.name;
        const price = bService.price;
        const id = bService._id;
        const uEmail = user?.email;
        const uName = user?.displayName;
        const email = bService.email;
        const pName = bService.uName
        const image = bService.image;
        const date = startDate;
        const instruction = form.instruction.value;
        const status = 'pending';



        const bookData = { name, instruction, price, id, email, pName, image, status, uEmail, uName, date };

        console.table(bookData);

        try {
            const { data } = await axios.post('http://localhost:5000/booked', bookData)
            console.log(data);
            if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Service Purchased Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                navigate('/my-book');
        }catch (err) {
            console.log(err);
        }

        // send data to the server

        // fetch('http://localhost:5000/services', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newService)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Service Added Successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'Cool'
        //             })
        //         }
        //     })


    }

    return (

        <div className=" container mx-auto bg-red-500 rounded-xl p-3 " data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000">
            <h2 className="text-3xl font-bold text-center mb-8">Services Booking</h2>

            <form onSubmit={handleServiceSubmission}>

                {/* form description & price row */}
                <div className="md:flex">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-xl">Service_Id</span>
                        </div>
                        <input type="text" name="name" disabled defaultValue={bService._id} placeholder="item name" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:w-1/2 lg:ml-4">
                        <div className="label">
                            <span className="label-text text-xl">Service_Name</span>
                        </div>
                        <input type="text" name="name" disabled defaultValue={bService.name} placeholder="item name" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:w-1/2 lg:ml-4">
                        <div className="label">
                            <span className="label-text text-xl">Service_Price</span>
                        </div>
                        <input type="text" name="price" disabled defaultValue={bService.price} placeholder="item name" className="input input-bordered w-full " />
                    </label>

                </div>
                {/* form  Image*/}
                <div className="md:flex">
                    <label className="form-control md:w-full">
                        <div className="label">
                            <span className="label-text text-xl">Service_Image</span>
                        </div>
                        <input type="text" name="image" disabled defaultValue={bService.image} placeholder="image_url" className="input input-bordered w-full" />
                    </label>
                </div>

                {/* form provider email & provider name */}
                <div className="md:flex">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-xl">Provider_Email</span>
                        </div>
                        <input type="text" name="email" disabled defaultValue={bService.email} placeholder="service-area" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:w-1/2 lg:ml-4">
                        <div className="label">
                            <span className="label-text text-xl">Provider_Name</span>
                        </div>
                        <input type="text" name="description" disabled defaultValue={bService.uName} placeholder="Description" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* form  User Email & User Name */}
                <div className="md:flex">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-xl">User_Email</span>
                        </div>
                        <input type="email" name="email" disabled placeholder={user.email} className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:w-1/2 lg:ml-4">
                        <div className="label">
                            <span className="label-text text-xl">User_Name</span>
                        </div>
                        <input type="text" name="uName" disabled placeholder={user.displayName} className="input input-bordered w-full" />
                    </label>
                </div>
                {/* service taking date & place */}
                
                    <div className="md:flex">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl">Service Taking Date</span>
                            </div>
                            <DatePicker className="input input-bordered w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </label>
                        <label className="form-control md:w-1/2 lg:ml-4">
                            <div className="label">
                                <span className="label-text text-xl">Special_instruction</span>
                            </div>
                            <input type="text" name="instruction" placeholder="anything like address , area, customized service plan." className="input input-bordered w-full" />
                        </label>
                    </div>
               


                {/* button */}

                <label className="form-control md:w-full mt-5">
                    <input type="submit" value=" PURCHASE" className="btn btn-outline btn-primary" />
                </label>

            </form>
        </div>
    );
};

export default BookService;