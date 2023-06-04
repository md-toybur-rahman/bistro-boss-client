import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useHelmet from "../../Hooks/useHelmet";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";
// import Swal from "sweetalert2";



const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                updateUserProfile(data.name, data.photo, data.email)
                signIn(data.email, data.password)
                    .then(() => {
                        navigate('/');
                    })
                    .catch()
            })
            .catch()


    }
    console.log(watch("example"));

    return (
        <div>
            {useHelmet('Sign UP')}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="text" {...register("name", { required: true })} type="text" placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600 mt-2">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="photo" {...register("photo", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered" />
                                {errors.photo && <span className="text-red-600 mt-2">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" {...register("email", { required: true })} type="email" placeholder="Your Email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600 mt-2">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="Your Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600 mt-2">This field is required</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600 mt-2">Password must be </span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600 mt-2">Password must be less than 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600 mt-2">Password must one uppercase, one lowercase, one number, one special characters</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
            <Link to="/">Back to Home </Link>
        </div>
    );
};

export default SignUp;