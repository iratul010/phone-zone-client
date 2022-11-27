import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../../assets/images/login.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className="lg:h-[700px] grid grid-cols-1 lg:grid-cols-2 w-full lg:w-3/5  justify-center items-center mx-auto gap-10  text-accent bg-gray-50 rounded p-10">
      <img src={img} alt="img" />

      <div className="p-10">
        <h2 className="text-4xl">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-accent">Email</span>
            </label>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: "Email Address is required" })}
            />
            {errors.email && (
              <p className="text-red-400" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs  ">
            <label className="label">
              <span className="label-text text-accent">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be 6 characters or Longer!" },
              })}
            />
            {/* onClick="{handlePasswordReset}" */}
            <button>
              <label className="label">
                <span className="label-text text-red-400">Forget Password?</span>
              </label>
            </button>

            {errors.password && (
              <p className="text-error" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <input type="submit" value="Login" className="btn btn-primary  w-full max-w-xs text-white " />
          {/* <div>{loginError && <p className="text-red-400">{loginError}</p>}</div> */}
        </form>
        <p className="m-2">
          New to Mobile Zone?{" "}
          <Link to="/signup" className=" text-info">
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>
        {/* onClick="{handleGoogleSignIn}" */}
        <button className="btn btn-outline text-accent hover:text-black  w-full">
          <FaGoogle className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Login;
