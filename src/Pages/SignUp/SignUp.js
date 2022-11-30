import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/signup.png";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
const SignUp = () => {
  const [signInError, setSignInError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignIn = (data) => {
    setSignInError("");

    console.log(data.role);

    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        if (user.accessToken) {
          toast.success("User Create Successfully.");
          // Update User Profile
          console.log("data", data);
          //buyerAndSeller-list
          buyerAndSellerList(data);

          saveUser(data.name, data.email);
          const userInfo = {
            displayName: data.name,
          };

          updateUserProfile(userInfo)
            .then(() => {})
            .catch((err) => {
              console.error(err.message);
            });
          navigate("/");
        }
      })
      .catch((err) => {
        console.error(err.message);
        setSignInError(err.message);
      });
  };
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // getUserToken(email);
        console.log(data);
      });
  };
  const buyerAndSellerList = (data) => {
    //bAndS(buyerAndSeller)
    const bAndS = {
      name: data.name,
      email: data.email,

      role: data.role,
    };
    console.log("bAndS", bAndS);
    fetch(`http://localhost:5000/buyerAndSeller`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bAndS),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="lg:h-[700px] grid grid-cols-1 lg:grid-cols-2 w-full lg:w-3/5    justify-center items-center mx-auto gap-10  text-accent   rounded p-10">
      <div>
        {" "}
        <img src={img} alt="img" />
      </div>

      <div className="p-10 ">
        <h2 className="text-4xl">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-accent">Full Name</span>
            </label>
            <input
              name="name"
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("name", { required: "Full Name is required" })}
            />
            {errors.name && (
              <p className="text-red-400" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
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
                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: "Password must be strong!" },
              })}
            />

            {errors.password && (
              <p className="text-error" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-accent">Buyer</span>
                <input
                  type="radio"
                  name="role"
                  value="Buyer"
                  className="radio checked:bg-green-300"
                  defaultChecked
                  {...register("role", { required: "radio Address is required" })}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-accent">Seller</span>
                <input
                  type="radio"
                  name="role"
                  value="Seller"
                  className="radio  checked:bg-green-300"
                  {...register("role", { required: "radio  is required" })}
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Login" className="btn btn-primary  w-full max-w-xs text-white " />
          <div>{signInError && <p className="text-red-400">{signInError}</p>}</div>
        </form>
        <p className="m-2">
          Already have an account?{" "}
          <Link to="/login" className=" text-info">
            Login
          </Link>
        </p>
        <div className="divider ">OR</div>
        {/* onClick="{handleGoogleSignIn}" */}
        <button className="btn btn-outline text-accent hover:text-black  w-full">
          <FaGoogle className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default SignUp;
