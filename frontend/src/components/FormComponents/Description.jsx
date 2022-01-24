import React from "react";

const Description = ({ handleFormChange, modifiable, defaultValue }) => {
  return (
    <input
      className="input w-full "
      type="text"
      name="description"
      placeholder="Garden Shop"
      name="description"
      onChange={handleFormChange}
      value={defaultValue}
      style={{
        pointerEvents: modifiable ? "auto" : "none",
        backgroundColor: modifiable ? "#fff" : "#ddd",
      }}
    />
  );
};

export default Description;
