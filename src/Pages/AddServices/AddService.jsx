import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { TabTitle } from "../Utils/title";


const AddService = () => {
    TabTitle('AddService');

    const { user } = useContext(AuthContext);
    

    const handleAddService = event => {
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

        const newService = { name, price, area, description, email, uName, image, uImage};

        console.log(newService);

        // send data to the server

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Service Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })


    }

    return (
        <div className=" container mx-auto bg-orange-300 rounded-xl p-3 " data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000">
            <h2 className="text-3xl font-bold text-center mb-8">Add a Services</h2>

            <form onSubmit={handleAddService}>
                {/* form  Image*/}
                <div className="md:flex">
                    <label className="form-control md:w-full">
                        <div className="label">
                            <span className="label-text text-xl">Service Image</span>
                        </div>
                        <input type="text" name="image" placeholder="image_url" className="input input-bordered w-full" />
                    </label>


                </div>
                {/* form description & price row */}
                <div className="md:flex">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-xl">Service Name</span>
                        </div>
                        <input type="text" name="name" placeholder="item name" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:w-1/2 lg:ml-4">
                        <div className="label">
                            <span className="label-text text-xl">Price</span>
                        </div>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* form rating & customization row */}
                <div className="md:flex">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-xl">Service Area</span>
                        </div>
                        <input type="text" name="area" placeholder="service-area" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:w-1/2 lg:ml-4">
                        <div className="label">
                            <span className="label-text text-xl">Description</span>
                        </div>
                        <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* form  User Email & User Name */}
                <div className="md:flex">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-xl">User Email</span>
                        </div>
                        <input type="email" name="email" disabled placeholder={user.email} className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:w-1/2 lg:ml-4">
                        <div className="label">
                            <span className="label-text text-xl">User Name</span>
                        </div>
                        <input type="text" name="uName" disabled placeholder={user.displayName} className="input input-bordered w-full" />
                    </label>
                </div>
                <div>
                    <label className="form-control md:w-full">
                        <div className="label">
                            <span className="label-text text-xl">User Image</span>
                        </div>
                        <input type="text" name="uImage" disabled placeholder={user.photoURL
                        } className="input input-bordered w-full" />
                    </label>
                </div>

                {/* button */}

                <label className="form-control md:w-full mt-5">
                    <input type="submit" value="ADD SERVICE" className="btn btn-outline btn-secondary" />
                </label>

            </form>
        </div>
    );
};

export default AddService;