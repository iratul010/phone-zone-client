import { useQuery } from "@tanstack/react-query";

import CategoriesBrandName from "../CategoriesBrandName/CategoriesBrandName";

const Categories = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="grid grid-cols-1 justify-center items-center">
      <div>
        {" "}
        <p className="text-xl font-semibold text-primary ">Our Products</p>
        <h2 className=" text-3xl font-bold text-accent">Product Service</h2>
        <p className="  text-semibold text-accent"> Here Second-hand purchases Categories Names.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {categories.map((category, i) => (
          <CategoriesBrandName key={i} category={category}></CategoriesBrandName>
        ))}
      </div>
    </div>
  );
};

export default Categories;
