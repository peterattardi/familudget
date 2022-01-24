import React from "react";

const Button = ({ children, action, background, active, animate = false }) => {
  return (
    <>
      {animate ? (
        <button
          onClick={action}
          className="input flex justify-center items-center border-none  shadow-md animation text-white w-40 "
          style={{
            cursor: active == false ? "not-allowed" : "default",
            backgroundColor: background,
          }}
        >
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          {children}
        </button>
      ) : (
        <button
          onClick={action}
          className="input border-none  shadow-md animation text-white w-40 "
          style={{
            cursor: active == false ? "not-allowed" : "default",
            backgroundColor: background,
          }}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
