import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {

    const { price, img, title, _id } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="flex justify-around  items-center">
                <div className="card-body items-start text-center ">
                    <h2 className="card-title text-xl font-bold">{title}</h2>
                    <p className="text-xl font-bold text-orange-500">Price : ${price}</p>

                </div>
                <div className="card-actions w-1/12">
                    <Link to = {`/checkout/${_id}`} className="text-orange-500 font-bold"><FaArrowRight /></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;