import React from "react";
import { useContext } from "react";
import ExpenseContext from "../contexts/ExpensesContext";
import SettingsContext from "../contexts/SettingsContext";
import { FaMoneyBillWave } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ItemsList = ({ icons }) => {
  const { expenses, month, categories } = useContext(ExpenseContext);
  const { nf } = useContext(SettingsContext);

  const monthName = (monthNumber) => {
    const names = [
      "",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    monthNumber = parseInt(monthNumber);
    return names[monthNumber];
  };

  return (
    <div className="flex w-full flex-col  items-center justify-center gap-16">
      {expenses.length > 0 ? (
        expenses.map((element, i) => (
          <div className="card-container" key={i}>
            <p>{monthName(month) + " " + element.day}</p>
            <div className="card flex flex-col px-4 py-4 gap-8">
              {element.expenses.map((expense, i) => (
                <Link
                  to={`item/${expense.id}`}
                  className="flex flex-row w-full py-2 px-4 items-center justify-between animation"
                  key={i}
                >
                  <div className="flex flex-row gap-4 items-center">
                    {categories[expense.category - 1] ? (
                      icons[categories[expense.category - 1].name]
                    ) : (
                      <FaMoneyBillWave size={25} />
                    )}
                    <p style={{ gridColumn: "span 3" }}>
                      {expense.description}
                    </p>
                  </div>
                  <p
                    className="text-right col-start-5 col-end-6"
                    style={
                      expense.total > 0
                        ? { color: "green", fontWeight: "600" }
                        : {}
                    }
                  >
                    {nf(expense.total)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No expenses found for this period</p>
      )}
    </div>
  );
};

export default ItemsList;
