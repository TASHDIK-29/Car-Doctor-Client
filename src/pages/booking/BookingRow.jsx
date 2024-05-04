
const BookingRow = ({ booking, handelDelete, handelConfirm }) => {

    const { title, name, price, date, img, email, _id, status } = booking;


    

    return (
        <tr>
            <th>
                <button onClick={() => handelDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    {/* <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div> */}
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                {email}
            </td>
            <td>{price}</td>
            <td>{date}</td>
            <th>
                {
                    status ? <span className="text-xl text-purple-700 font-bold py-2 px-3 rounded-lg border border-purple-700">Confirmed</span>
                    :<button onClick={() => handelConfirm(_id)} className="btn btn-outline btn-secondary">please Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;