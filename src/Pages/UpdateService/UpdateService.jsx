import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { TabTitle } from "../Utils/title";



const UpdateService = () => {
    TabTitle('Updated Service')

    const service = useLoaderData();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const { _id, name, price, area, description, image } = service;

    const handleUpdatedService = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;
        const area = form.area.value;
        const description = form.description.value;
        const email = user.email;
        const uName = user.displayName
        const image = form.image.value;
        const uImage = form.uImage.value;

        const updatedService = { name, price, area, description, email, uName, image, uImage};

        

        // send data to the server

        fetch(`http://localhost:5000/services/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedService)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Service Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            navigate('/manageService');
        })


    }

    return (
        <div className=" container mx-auto bg-blue-400 rounded-xl p-3 " data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000">
            <h2 className="text-3xl font-bold text-center mb-8">Updated Services:{name} </h2>

            <form onSubmit={handleUpdatedService}>
                {/* form  Image*/}
                <div className="md:flex">
                    <label className="form-control md:w-full">
                        <div className="label">
                            <span className="label-text text-xl">Service Image</span>
                        </div>
                        <input type="text" name="image" defaultValue={image} placeholder="image_url" className="input input-bordered w-full" />
                    </label>


                </div>
                {/* form description & price row */}
                <div className="md:flex">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-xl">Service Name</span>
                        </div>
                        <input type="text" name="name" defaultValue={name} placeholder="item name" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:w-1/2 lg:ml-4">
                        <div className="label">
                            <span className="label-text text-xl">Price</span>
                        </div>
                        <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* form rating & customization row */}
                <div className="md:flex">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-xl">Service Area</span>
                        </div>
                        <input type="text" name="area" defaultValue={area} placeholder="service-area" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:w-1/2 lg:ml-4">
                        <div className="label">
                            <span className="label-text text-xl">Description</span>
                        </div>
                        <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* form  User Email & User Name */}
                <div className="md:flex">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-xl">User Email</span>
                        </div>
                        <input type="email" name="email" defaultValue={user?.email} className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:w-1/2 lg:ml-4">
                        <div className="label">
                            <span className="label-text text-xl">User Name</span>
                        </div>
                        <input type="text" name="uName" defaultValue={user?.displayName} className="input input-bordered w-full" />
                    </label>
                </div>
                <div>
                    <label className="form-control md:w-full">
                        <div className="label">
                            <span className="label-text text-xl">User Image</span>
                        </div>
                        <input type="text" name="uImage" defaultValue={user?.photoURL
                        } className="input input-bordered w-full" />
                    </label>
                </div>

                {/* button */}

                <label className="form-control md:w-full mt-5">
                    <input type="submit" value="UPDATED SERVICE" className="btn btn-outline btn-secondary" />
                </label>

            </form>
        </div>


    );
};

export default UpdateService;