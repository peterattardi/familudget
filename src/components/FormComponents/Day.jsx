import React from "react";
import { months, daysOfMonth } from "../../utilities/utility";

const Day = ({ day, month, year, handleFormChange, modifiable }) => {
  return (
    <div className="flex justify-center gap-2 items-center ">
      <input
        type="text"
        className="pointer-events-none xs:w-full sm:w-[60%] input text-center px-4"
        defaultValue={months[month]}
        style={{ backgroundColor: modifiable ? "#fff" : "#ddd" }}
      />
      <select
        className=" input outline-none w-12 px-3 bg-transparent "
        name="day"
        onChange={handleFormChange}
        value={day}
        style={{
          pointerEvents: modifiable ? "auto" : "none",
          backgroundColor: modifiable ? "#fff" : "#ddd",
        }}
      >
        {daysOfMonth(year, month).map((day, i) => {
          return (
            <option key={i} value={i + 1}>
              {day}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Day;
