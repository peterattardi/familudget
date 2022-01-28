import React from "react";

const ImageAndPar = ({ img, title, parag, pos }) => {
  return pos == "1" ? (
    <section className="grid grid-cols-1   lg:grid-cols-2  items-center">
      <div className=" row-start-1 lg:row-start-auto gap-8 lg:gap-12 px-16  lg:text-left flex flex-col items-center lg:items-left ">
        <h1 className="text-3xl lg:text-4xl  w-full text-center  font-bold">
          {title}
        </h1>
        <p className="text-xl lg:text-2xl text-center w-full ">{parag}</p>
      </div>

      <img
        src={img}
        alt="summury page"
        className=" scale-75 lg:scale-50 shadow-xl rounded-3xl  border-4 border-slate-700"
      />
    </section>
  ) : (
    <section className="grid grid-cols-1  lg:grid-cols-2 items-center justify-center">
      <img
        src={img}
        alt="summury page"
        className=" scale-75 lg:scale-50 shadow-xl rounded-3xl  border-4 border-slate-700"
      />
      <div className=" row-start-1 lg:row-start-auto gap-8 lg:gap-12  px-16  lg:text-right flex flex-col items-center lg:items-right ">
        <h1 className="text-3xl lg:text-4xl  w-full text-center  font-bold">
          {title}
        </h1>
        <p className="text-xl lg:text-2xl text-center w-full ">{parag}</p>
      </div>
    </section>
  );
};

export default ImageAndPar;
