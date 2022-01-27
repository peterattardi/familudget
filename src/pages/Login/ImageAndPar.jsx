import React from "react";

const ImageAndPar = ({ img, title, parag, pos }) => {
  return pos == "1" ? (
    <section className="grid grid-cols-1  lg:grid-cols-2  items-center">
      <div className=" row-start-1 lg:row-start-auto  text-center lg:text-left flex flex-col items-center ">
        <h1 className="text-xl lg:text-3xl font-bold">{title}</h1>
        <p className="text-lg lg:text-xl">{parag}</p>
      </div>

      <img
        src={img}
        alt="summury page"
        className=" scale-75 lg:scale-50 shadow-xl rounded-3xl  border-4 border-slate-700"
      />
    </section>
  ) : (
    <section className="grid grid-cols-1  lg:grid-cols-2 items-center">
      <img
        src={img}
        alt="summury page"
        className=" scale-75 lg:scale-50 shadow-xl rounded-3xl  border-4 border-slate-700"
      />
      <div className=" row-start-1 lg:row-start-auto text-center lg:text-left flex flex-col items-center">
        <h1 className="text-xl lg:text-3xl font-bold">{title}</h1>
        <p className="text-lg lg:text-xl">{parag}</p>
      </div>
    </section>
  );
};

export default ImageAndPar;