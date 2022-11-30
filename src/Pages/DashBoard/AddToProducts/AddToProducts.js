import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";

const AddToProducts = () => {
  const time = new Date().toLocaleString();

  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const handleAddToCard = (data) => {
    console.log(data);
    const cardDetails = {
      productName: data.productName,
      categoryName: data.categoryName,
      orgProPrice: data.orgProPrice,
      productPhoto: data.productPhoto,
      reSellPrice: data.reSellPrice,
      usesOfYear: data.usesOfYear,
      conditionOfProduct: data.conditionOfProduct,
      locationOfSeller: data.locationOfSeller,
      sellerName: data.sellerName,
      sellerPhoneNumber: data.sellerPhoneNumber,
      productAddedDate: time,
      status: "AvailAble",
      isReported: data.isReported,
      isAdvertised: data.isAdvertised,
      isSellerVerified: data.isSellerVerified,
    };
    console.log("cardDetails", cardDetails);
    fetch(`http://localhost:5000/mobiles`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cardDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h2 className="text-primary text-3xl  ">Add Your Products</h2>
      <div>
        <form onSubmit={handleSubmit(handleAddToCard)}>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-5  mt-10  p-10 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent">Seller Name</span>
              </label>
              <input
                type="text"
                name="userName"
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered text-slate-400"
                {...register("userName")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent">Seller Email</span>
              </label>
              <input
                type="email"
                name="userEmail"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered text-slate-400"
                {...register("userEmail")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent">Seller Location</span>
              </label>
              <input
                type="text"
                name="sellerLocation"
                className="input input-bordered text-slate-400"
                {...register("sellerLocation")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent">Product Name</span>
              </label>
              <input
                type="text"
                name="productsName"
                className="input input-bordered text-slate-400"
                {...register("productName")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent">Products Original Price</span>
              </label>
              <input
                type="text"
                name="original price"
                className="input input-bordered text-slate-400"
                {...register("orgProPrice")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent">Products Resell Price</span>
              </label>
              <input
                type="text"
                name="original price"
                className="input input-bordered text-slate-400"
                {...register("resSellPrice")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent">Products Photo Url</span>
              </label>
              <input
                type="text"
                name="original price"
                className="input input-bordered text-slate-400"
                {...register("productPhoto")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent">Uses of year</span>
              </label>
              <input
                type="text"
                name="original price"
                className="input input-bordered text-slate-400"
                {...register("usesOfYear")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent">Category Name</span>
              </label>
              <select className="select w-full  text-slate-400 " {...register("categoryName")}>
                <option name="province" value="iPhone">
                  iPhone
                </option>
                <option name="province" value="OnePlus">
                  OnePlus
                </option>
                <option name="province" value="Xiaomi">
                  Xiaomi
                </option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent">Condition of Products</span>
              </label>
              <select className="select w-full  text-slate-400 " {...register("conditionOfProduct")}>
                <option name="province" value="Good">
                  Good
                </option>
                <option name="province" value="Normal">
                  Normal
                </option>
              </select>
            </div>

            {/* disabled or readOnly */}
            <input
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full  mx-auto "
              {...register("phoneNumber")}
            />
          </div>

          <button className=" btn  w-full mx-auto  uppercase">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddToProducts;
