import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {

    const { user } = useContext(AuthContext);

    const [bookings, setBookings] = useState([]);

    const handelDelete = id => {
        const proceed = confirm('Are You Sure?');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {

                        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
                            .then(res => res.json())
                            .then(data => {
                                // console.log('hello', data);
                                setBookings(data);
                            })
                    }
                })
        }
    }


    const handelConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
                        .then(res => res.json())
                        .then(data => {
                            // console.log('hello', data);
                            setBookings(data);
                        })
                }
            })
    }

    // const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        // fetch(`http://localhost:5000/bookings?email=${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log('hello', data);
        //         setBookings(data);
        //     })


        // By axios

        axios.get(`http://localhost:5000/bookings?email=${user?.email}`, {withCredentials: true})
        .then(res =>{
            setBookings(res.data);
        })

    }, [])

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-5">Your Bookings</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                {/* <label>
                                    <input type="checkbox" className="checkbox" />
                                </label> */}
                            </th>
                            <th>Service/Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <BookingRow key={booking._id} booking={booking} handelDelete={handelDelete} handelConfirm={handelConfirm}></BookingRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;