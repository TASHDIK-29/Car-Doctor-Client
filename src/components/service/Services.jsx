import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import useAuthSecure from "../../customHooks/useAuthSecure";

const Services = () => {

    const [services, setServices] = useState([]);

    const axiosSecure = useAuthSecure();

    useEffect( () => {
        // fetch('https://car-doctor-server-zeta-blue.vercel.app/services')
        // .then(res => res.json())
        // .then(data => setServices(data))

        axiosSecure.get('/services')
        .then(res => {
            // console.log(res.data);
            setServices(res.data);
        })




    }, [])

    return (
        <div className="text-center mt-10 space-y-3">
            <h1 className="text-xl font-bold text-orange-600">Service</h1>
            <h1 className="text-5xl font-bold">Our Service Area</h1>
            <p className="text-base text-slate-400 font-semibold w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;