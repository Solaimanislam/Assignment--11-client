import { useLoaderData, useParams } from "react-router-dom";


const BookService = () => {

    const bookLoader = useLoaderData();
    console.log(bookLoader);

    const { id } = useParams();
    // const idInt = parseInt(id);
    const bService = bookLoader.find(service => service._id === id);
    console.log(bService);

    return (
        // <div className=" container mx-auto bg-purple-300 rounded-xl p-3">
        //     <h2 className="text-3xl font-bold text-center mb-8">Update Art & Craft:{name} </h2>

        //     <form onSubmit={handleUpdateCraft}>
        //         {/* form item & subcategory row */}
        //         <div className="md:flex">
        //             <label className="form-control md:w-1/2">
        //                 <div className="label">
        //                     <span className="label-text text-xl">Item_name</span>
        //                 </div>
        //                 <input type="text" name="name" defaultValue={name} placeholder="item name" className="input input-bordered w-full " />
        //             </label>
        //             <label className="form-control md:w-1/2 lg:ml-4">
        //                 <div className="label">
        //                     <span className="label-text text-xl">Subcategory_Name</span>
        //                 </div>
        //                 <select name="scName" defaultValue={scName} className="p-3 rounded-lg input-bordered w-full">
                           
        //                 </select>
        //                 {/* <input type="text" name="scName" placeholder="subcategory name" className="input input-bordered w-full" /> */}
        //             </label>
        //         </div>
        //         {/* form description & price row */}
        //         <div className="md:flex">
        //             <label className="form-control md:w-1/2">
        //                 <div className="label">
        //                     <span className="label-text text-xl">Short Description
        //                     </span>
        //                 </div>
        //                 <input type="text" name="description" defaultValue={description} placeholder="short description" className="input input-bordered w-full " />
        //             </label>
        //             <label className="form-control md:w-1/2 lg:ml-4">
        //                 <div className="label">
        //                     <span className="label-text text-xl">Price</span>
        //                 </div>
        //                 <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
        //             </label>
        //         </div>
        //         {/* form rating & customization row */}
        //         <div className="md:flex">
        //             <label className="form-control md:w-1/2">
        //                 <div className="label">
        //                     <span className="label-text text-xl">Rating</span>
        //                 </div>
        //                 <input type="text" name="rating" defaultValue={rating} placeholder="item rating" className="input input-bordered w-full " />
        //             </label>
        //             <label className="form-control md:w-1/2 lg:ml-4">
        //                 <div className="label">
        //                     <span className="label-text text-xl">Customization</span>
        //                 </div>
        //                 <input type="text" name="customization" defaultValue={customization} placeholder="customization Yes or No" className="input input-bordered w-full" />
        //             </label>
        //         </div>
        //         {/* form  processing_time & stockStatus row */}
        //         <div className="md:flex">
        //             <label className="form-control md:w-1/2">
        //                 <div className="label">
        //                     <span className="label-text text-xl">Processing Time</span>
        //                 </div>
        //                 <input type="text" name="time" defaultValue={time} placeholder="processing_time" className="input input-bordered w-full " />
        //             </label>
        //             <label className="form-control md:w-1/2 lg:ml-4">
        //                 <div className="label">
        //                     <span className="label-text text-xl">Stock Status</span>
        //                 </div>
        //                 <input type="text" name="status" defaultValue={status} placeholder="stockStatus" className="input input-bordered w-full" />
        //             </label>
        //         </div>
        //         {/* form  User Email & User Name */}
        //         <div className="md:flex">
        //             <label className="form-control md:w-1/2">
        //                 <div className="label">
        //                     <span className="label-text text-xl">User Email</span>
        //                 </div>
        //                 <input type="email" name="email" defaultValue={email} placeholder="User_Email" className="input input-bordered w-full " />
        //             </label>
        //             <label className="form-control md:w-1/2 lg:ml-4">
        //                 <div className="label">
        //                     <span className="label-text text-xl">User Name</span>
        //                 </div>
        //                 <input type="text" name="uName" defaultValue={uName} placeholder="User_Name" className="input input-bordered w-full" />
        //             </label>
        //         </div>
        //         {/* form  User Email & User Name */}
        //         <div className="">
        //             <label className="form-control md:w-full">
        //                 <div className="label">
        //                     <span className="label-text text-xl">Image</span>
        //                 </div>
        //                 <input type="text" name="image" defaultValue={image} placeholder="image_url" className="input input-bordered w-full" />
        //             </label>
        //         </div>
        //         {/* button */}

        //         <label className="form-control md:w-full mt-5">
        //             <input type="submit" value="UPDATE CRAFT" className="btn btn-outline btn-secondary" />
        //         </label>

        //     </form>
        // </div>
        <div>Services Book</div>
    );
};

export default BookService;