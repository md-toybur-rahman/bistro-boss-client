
import { FaTrashAlt } from 'react-icons/fa';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useHelmet from '../../../Hooks/useHelmet';
import useMenu from '../../../Hooks/useMenu';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ManageItem = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();
    const handleDelete = itemId => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {


                axiosSecure.delete(`/menu/${itemId}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })


            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }
    return (
        <div className='w-full'>
            {useHelmet("ManageItem")}
            <SectionTitle heading="Manage All Items" subheading="Hurry up"></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) =>
                                <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.category}
                                    </td>
                                    <td className='text-right'>{item.price}</td>
                                    <td>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg text-center text-red-600"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItem;