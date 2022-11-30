import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const [token, setToken] = useState("");
  const [loginError, setLoginError] = useState("");
  const { login, signInGooglePopup } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathName || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    setLoginError("");
    console.log(data, errors);
    login(data.email, data.password)
      .then((res) => {
        const user = res.user;
        const currentUser = {
          email: data.email,
        };
        if (user.accessToken) {
          toast.success("Login Success");
          // navigate(from, { replace: true });
          fetch("http://localhost:5000/jwt", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              localStorage.setItem("accessToken", data.accessToken);
              setToken(data.accessToken);
            });
        }
      })
      .catch((err) => {
        console.error(err.message);
        setLoginError(err.message);
      });
  };
  const handleGoogleSignIn = () => {
    signInGooglePopup()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="lg:h-[700px] grid grid-cols-1 lg:grid-cols-2 w-full lg:w-3/5  justify-center items-center mx-auto gap-10  text-accent   rounded p-10">
      <div>
        {" "}
        <img src={img} alt="img" />
      </div>

      <div className="p-10 ">
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
          <div>{loginError && <p className="text-red-400">{loginError}</p>}</div>
        </form>
        <p className="m-2">
          New to Mobile Zone?{" "}
          <Link to="/signup" className=" text-info">
            Create new account
          </Link>
        </p>
        <div className="divider ">OR</div>

        <button className="btn btn-outline text-accent hover:text-black  w-full" onClick={handleGoogleSignIn}>
          <FaGoogle className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Login;
