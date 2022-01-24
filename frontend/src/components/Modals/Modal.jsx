import React from "react";

const Modal = ({ children, background }) => {
  const { r, g, b } = background;
  return (
    <div
      className="fixed bottom-8 text-xl text-gray-500 left-16 right-16 rounded-md py-8 px-12"
      style={{
        border: `1px solid rgb(${r},${g},${b})`,
        backgroundColor: `rgba(${r},${g},${b},0.6)`,
      }}
    >
      {children}
    </div>
  );
};

export default Modal;
