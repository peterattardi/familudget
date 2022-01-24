import React from "react";

const RadioBtns = ({ handleFormChange, modifiable, isOut }) => {
  return (
    <div className="flex w-full justify-center gap-8 items-center">
      <input
        className="hidden"
        onChange={handleFormChange}
        type="radio"
        name="radioBtn"
        id="in"
        checked={!isOut}
      />

      <label
        className="bg-green-600   opacity-50  w-20 animation shadow-md text-white  rounded-md h-10 text-center py-2 px-4 "
        htmlFor="in"
        style={{
          pointerEvents: modifiable ? "auto" : "none",
        }}
      >
        IN
      </label>
      <input
        onChange={handleFormChange}
        className="hidden"
        type="radio"
        name="radioBtn"
        id="out"
        checked={isOut}
      />
      <label
        className="bg-red-600 shadow-md animation w-20 opacity-50 text-white  rounded-md h-10 text-center py-2 px-4"
        htmlFor="out"
        style={{
          pointerEvents: modifiable ? "auto" : "none",
        }}
      >
        OUT
      </label>
    </div>
  );
};

export default RadioBtns;
