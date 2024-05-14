import { Fade } from "react-awesome-reveal";

const About = () => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 my-7 lg:my-10 p-2" >
            <div className="card lg:w-96 h-auto bg-base-100 shadow-xl" data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                <figure><img className=" h-64 w-full" src="https://i.ibb.co/G3PsQjS/hc1.webp" alt="Shoes" /></figure>
                <div className="card-body">
                    <Fade direction="down">
                        <h2 className="card-title">Amar Malik</h2>
                    </Fade>
                    <Fade direction="right">
                        <p>The communication throughout the process was excellent. I was kept informed of progress every step of the way, which alleviated any concerns I may have had. This level of transparency and professionalism is truly commendable.</p>
                    </Fade>
                    <p><span className=" text-lg font-semibold">Rating:</span> <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"
                            checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div></p>
                    <Fade direction="up">
                        <h2 className="card-title">Software Engineer</h2>
                    </Fade>
                </div>
            </div>
            <div className="card lg:w-96 bg-base-100 shadow-xl" data-aos="zoom-in-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                <figure><img src="https://i.ibb.co/T2YX7Zy/hc2.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <Fade direction="down">
                        <h2 className="card-title">Faizana Ali</h2>
                    </Fade>
                    <Fade direction="right">
                        <p>the communication throughout the service was excellent. I was kept informed of any delays or changes to the schedule, which I appreciated. Additionally, the pricing was fair and transparent, with no hidden costs or surprises.</p>
                    </Fade>
                    <p><span className=" text-lg font-semibold">Rating:</span> <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"
                            checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div></p>
                    <Fade direction="up">
                        <h2 className="card-title">Engineer</h2>
                    </Fade>
                </div>
            </div>
            <div className="card lg:w-96 bg-base-100 shadow-xl" data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                <figure><img className="w-full" src="https://i.ibb.co/VJ71d8W/hc3.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <Fade direction="down">
                        <h2 className="card-title">Rakib Islam</h2>
                    </Fade>
                    <Fade direction="right">
                        <p>Its evident that Solaiman Islam takes pride in their work, as they went above and beyond to ensure that everything was done to the highest standard. Whether it was fixing a leaky faucet, servicing my HVAC system, or deep cleaning my home, the results were outstanding.</p>
                    </Fade>
                    <p><span className=" text-lg font-semibold">Rating:</span> <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div></p>
                    <Fade direction="up">
                        <h2 className="card-title">Doctor</h2>
                    </Fade>
                </div>
            </div>


        </div>
    );
};

export default About;