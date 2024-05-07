import { useLoaderData } from "react-router-dom";
import SharedBanner from "../../components/shared/SharedBanner";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";

const CheckOut = () => {

    const {user} = useContext(AuthContext);

    const service = useLoaderData();

    const {title, _id, price, service_id}= service;

    const handelSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const massage = form.massage.value;

        const order ={
            name,
            email,
            date,
            title,
            phone,
            massage,
            service_id,
            price
        }

        // console.log(order);

        fetch('https://car-doctor-server-zeta-blue.vercel.app/bookings', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            if(data.insertedId){
                alert('Successfully Booked')
            }
        })
    }

    return (
        <div>
            <SharedBanner />
            <h1 className="text-3xl font-bold text-center my-5">Service : {title}</h1>
            <section className="p-10 rounded-xl dark:bg-gray-100 dark:text-gray-900 my-14">
                <form onSubmit={handelSubmit} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4">
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">First name</label>
                                <input type="text" name="name" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-600 font-bold py-2 px-3" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Date</label>
                                <input type="date" name="date" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300 py-2 px-3" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Email</label>
                                <input type="email" name="email" defaultValue={user?.email} className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-600 font-bold py-2 px-3" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Phone</label>
                                <input type="text" name="phone" placeholder="Your Phone" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-600 font-bold py-2 px-3" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Due</label>
                                <input type="text" defaultValue={price} className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-600 font-bold py-2 px-3" />
                            </div>
                            <div className="col-span-full">
                                <label className="text-sm">Massage</label>
                                <textarea placeholder="Your massage" name="massage" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-600 font-bold p-2"></textarea>
                            </div>
                        </div>
                        
                    </fieldset>
                    <button className="btn btn-block bg-orange-700 hover:bg-orange-700 text-white font-semibold text-lg">Order Confirm</button>
                </form>
            </section>
        </div>
    );
};

export default CheckOut;