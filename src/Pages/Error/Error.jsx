
import { Link } from 'react-router-dom';
import errorImg from '../../assets/error.webp'; 
import { TabTitle } from '../Utils/title';

const Error = () => {
    TabTitle('Error');
    return (
        <div className=" text-center mx-auto lg:mt-20" data-aos="zoom-in-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            
            <img className='pt-6 my-6 rounded-2xl text-center mx-auto lg:w-1/2 lg:h-1/2' src={errorImg} alt="" />
            <Link to='/'><button className="btn btn-warning">Back To Home</button></Link>
        </div>
    );
};

export default Error;