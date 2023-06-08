import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import useHelmet from "../../../Hooks/useHelmet";
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";



const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="w-full">
            {useHelmet("My Cart")}
            <div className="uppercase font-semibold h-10 flex justify-evenly my-5">
                <h1 className="text-3xl">Total Items:  {cart.length}</h1>
                <h1 className="text-3xl">Total Price:  {total}</h1>
                <Link to="/dashboard/payment"><button className="btn btn-warning btn-sm">PAY</button></Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="text-center">${item.price}</td>
                                <td className="text-center">
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg text-center text-red-600"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                    {/* foot */}

                </table>
            </div>

        </div>
    );
};

export default MyCart;