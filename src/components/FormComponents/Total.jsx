import React from "react";
import { useContext } from "react";
import SettingsContext from "../../contexts/SettingsContext";

const Total = ({
  handleFormChange,
  modifiable,
  defaultInteger,
  defaultDecimal,
}) => {
  const { decimalSeparator } = useContext(SettingsContext);
  return (
    <div className="flex justify-center items-center">
      <input
        className="xs:w-full sm:w-[60%] input text-right px-4"
        type="number"
        name="totalNumber"
        placeholder="00"
        name="integer"
        onChange={handleFormChange}
        style={{
          pointerEvents: modifiable ? "auto" : "none",
          backgroundColor: modifiable ? "#fff" : "#ddd",
        }}
        value={defaultInteger}
      />
      <p className="text-inherit text-3xl ">{decimalSeparator}</p>
      <input
        className="w-12 input"
        type="number"
        name="totalDecimal"
        placeholder="00"
        name="decimal"
        onChange={handleFormChange}
        style={{
          pointerEvents: modifiable ? "auto" : "none",
          backgroundColor: modifiable ? "#fff" : "#ddd",
        }}
        value={defaultDecimal}
      />
    </div>
  );
};

export default Total;
