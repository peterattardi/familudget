import { useState, createContext } from "react";

const DeleteContext = createContext();

export default DeleteContext;

export const DeleteProvider = ({ children }) => {
  const [hasBeenDeleted, setHasBeenDeleted] = useState(
    localStorage.getItem("deleted") || false
  );

  const contextData = {
    hasBeenDeleted: hasBeenDeleted,
    setHasBeenDeleted: setHasBeenDeleted,
  };
  return (
    <DeleteContext.Provider value={contextData}>
      {children}
    </DeleteContext.Provider>
  );
};
