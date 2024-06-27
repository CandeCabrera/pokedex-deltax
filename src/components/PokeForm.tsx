import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MyForm = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState({});
  4

  const onSubmit = (data) => {
    console.log(data);
    setFormData(data);
    //add pokemons to local storage array

    let pokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
    pokemons.push(data);
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
    reset();
    closeModal();
  };

  return (
    <div className="flex p-4 bg-black/30 items-center justify-center absolute top-0 left-0 w-screen h-screen">
      <div className="bg-white flex p-4 rounded-lg items-center justify-center w-[400px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 w-full">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              {...register("name", { required: true, validate: (name) => name.trim().length > 3})}
              className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full sm:text-sm border border-gray-300 py-2 px-3 ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <span className="text-red-500 text-xs">Name is required</span>
            )}
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="Type"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Type:
            </label>
            <input
              type="text"
              id="Type"
              name="type"
              {...register("Type", { required: true })}
              className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full sm:text-sm border border-gray-300 py-2 px-3 ${
                errors.Type ? "border-red-500" : ""
              }`}
            />
            {errors.Type && (
              <span className="text-red-500 text-xs">Type is required</span>
            )}
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="Type"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Weight:
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              {...register("weight", { required: false })}
              className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full sm:text-sm border border-gray-300 py-2 px-3 ${
                errors.weight ? "border-red-500" : ""
              }`}
            />
           
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="gender"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              {...register("gender", { required: false })}
              className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full sm:text-sm border border-gray-300 py-2 px-3 ${
                errors.gender ? "border-red-500" : ""
              }`}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>{" "}
              <option value="genderless" selected>
                Genderless
              </option>
            </select>
       
          </div>

          <button
            disabled={Object.keys(errors).length > 0}
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white font-bold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
