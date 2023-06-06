import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
const AddItem = () => {
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, price, category, recipe} = data;
                const newItem = {name, price: parseFloat(price), category, recipe, image: imgURL}
                console.log(newItem);
                axiosSecure.post('/menu', newItem)
                .then(data => {
                    console.log('after posting new menu item', data.data);
                    if(data.data.insertedId) {
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
            }
        })
    };
    return (
        <div className="w-full px-10">
            <SectionTitle subheading="What's new" heading="Add an Item"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name</span>
                    </label>
                    <input {...register("name", {required: true, maxLength: 120})} type="text" placeholder="Recipe Name" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Category *</span>
                    </label>
                    <select {...register("category", {required: true})} className="select select-bordered">
                        <option disabled selected>Pick one</option>
                        <option>pizza</option>
                        <option>soup</option>
                        <option>salad</option>
                        <option>dessert</option>
                        <option>drinks</option>
                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Price *</span>
                    </label>
                    <input {...register("price", {required: true,})} type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea {...register("details", {required: true,})} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Item Image</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input type="submit" value="Add Item" className="btn btn-xs mt-5" />
            </form>
        </div>
    );
};

export default AddItem;