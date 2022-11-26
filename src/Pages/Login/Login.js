import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = () => {};
  return (
    <div className="h-[700px] flex justify-center items-center text-accent">
      <div>
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
          <div className="form-control w-full max-w-xs">
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

            <button onClick="{handlePasswordReset}">
              <label className="label">
                <span className="label-text text-red-400">Forget Password?</span>
              </label>
            </button>

            {errors.password && (
              <p className="text-red-400" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <input type="submit" value="Login" className="btn btn-accent  w-full max-w-xs text-white " />
          {/* <div>{loginError && <p className="text-red-400">{loginError}</p>}</div> */}
        </form>
        <p className="m-2">
          New to Doctors Portal?{" "}
          <Link to="/signup" className=" text-warning">
            Create new account
          </Link>
        </p>

        <div className="divider">OR</div>
        <button onClick="{handleGoogleSignIn}" className="btn btn-outline text-accent hover:text-black  w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
