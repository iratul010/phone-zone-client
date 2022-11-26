import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MobileItem from "./MobileItem";

const MobileItems = () => {
  const mobiles = useLoaderData();

  const [brandsName, setBrandsName] = useState("");
  return (
    <div>
      {/* Apple iPhones at EMI (Best Price in Bangladesh)
4 items found for "Apple" in Mobiles */}
      <div className="m-10">
        {mobiles.length && (
          <>
            {" "}
            <h2 className="ml-5 text-accent text-xl font-semibold">
              Your <strong>{brandsName}</strong> Items Here!
            </h2>
            <p className="ml-5 text-accent">
              {mobiles.length} items found for <strong>{brandsName}</strong> in Mobiles
            </p>
          </>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10">
        {mobiles.map((mobile, i) => (
          <MobileItem key={i} mobile={mobile} setBrandsName={setBrandsName}></MobileItem>
        ))}
      </div>
    </div>
  );
};

export default MobileItems;
