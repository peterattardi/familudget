import React from "react";
import { useContext } from "react";
import ExpenseContext from "../../contexts/ExpensesContext";

const Categories = ({
  defaultCategory,
  handleFormChange,
  showCategories,
  modifiable,
}) => {
  const { categories } = useContext(ExpenseContext);
  return (
    <>
      {showCategories && (
        <select
          className="input shadow-xl bg-transparent xs:w-full sm:col-span-2 sm:w-[70%]"
          name="category"
          onChange={handleFormChange}
          value={defaultCategory.toString()}
          style={{
            pointerEvents: modifiable ? "auto" : "none",
            backgroundColor: modifiable ? "#fff" : "#ddd",
          }}
        >
          {categories.map((category, i) => {
            return (
              <option key={i} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      )}
    </>
  );
};

export default Categories;
