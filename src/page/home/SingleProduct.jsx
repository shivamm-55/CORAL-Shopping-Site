import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaArrowAltCircleRight } from "react-icons/fa";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const product = data.filter((p) => p.id == id);

        setProducts(product[0]);
      } catch (error) {
        console.log("Error Fetching Data : ", error);
      }
    };
    fetchData();
  }, [id]);

  const { title, category, price, image, status } = products;

  return (
    <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="p-3 max-w-7xl m-auto">
        <div className="flex items-center gap-2 pt-8 text-Black/50">
            <a href="/" className="text-gray-600">Home</a>
            <a href="/shop" className="text-black font-semibold">/ Shop</a>
        </div>

        <div className="mt-6 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
            <div>
              <img src={image} alt={title} className="w-full" />
            </div>

            <div>

              <h1 className="title text-left">{title}</h1>
              <p className="mt-3 text-gray-600 text-md leading-6 text-justify sm:text-left sm:mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                dignissimos omnis dolorum, ex blanditiis provident voluptatum
                corrupti aliquid magni sit fugiat, tempora tenetur deserunt
                suscipit. Amet odit odio veritatis laborum quae hic obcaecati id
                tenetur blanditiis.
              </p>
              <span className="my-2 text-xl text-yellow-400 items-center gap-1 sm:my-4 flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </span>

              <span className="text-xl text-red-500 font-semibold sm:text-2xl">
                ${price}
              </span>

              <div className="mt-4">
                <div className="text-left flex flex-col gap-2 w-full">
                  <label className="font-semibold">Quantity</label>
                  <input
                    className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none 
                    rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                    type="number"
                    defaultValue="1"
                    required
                  />
                </div>

                <div className="w-full text-left my-4">
                  <button
                    className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white text-md font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"
                    title="Confirm Order"
                  >
                    <span>Confirm Order</span>
                    <FaArrowAltCircleRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-black/75 mt-12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            reiciendis placeat, delectus suscipit sit et molestias harum
            inventore unde excepturi voluptates quos veritatis hic minima
            praesentium maxime nihil, sed corporis!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            reiciendis placeat, delectus suscipit sit et molestias harum
            inventore unde excepturi voluptates quos veritatis hic minima
            praesentium maxime nihil, sed corporis!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            reiciendis placeat, delectus suscipit sit et molestias harum
            inventore unde excepturi voluptates quos veritatis hic minima
            praesentium maxime nihil, sed corporis!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            reiciendis placeat, delectus suscipit sit et molestias harum
            inventore unde excepturi voluptates quos veritatis hic minima
            praesentium maxime nihil, sed corporis!
          </p>

        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
