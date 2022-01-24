import React from "react";
import { IoMdAdd } from "react-icons/io";

const AddNewItem = () => {
  return (
    <div className="w-[300px] shadow-2xl animation max-w-[600px] hover:opacity-80 bg-green-600 rounded-xl text-center flex justify-center items-center">
      <IoMdAdd color="white" size={30} />
      <button className="py-4 px-8    text-white">Add New</button>
    </div>
  );
};

export default AddNewItem;
