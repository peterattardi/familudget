import React from "react";
import { useContext } from "react";
import { GiValley } from "react-icons/gi";
import { useEffect } from "react";
import ExpenseContext from "../contexts/ExpensesContext";
import SettingsContext from "../contexts/SettingsContext";

const MonthSelector = () => {
  const { totals, month, months, setMonth, fetchData } =
    useContext(ExpenseContext);
  const { nf } = useContext(SettingsContext);

  useEffect(() => {
    fetchData();
  }, [month]);

  const handleSelectChange = (e) => {
    const value = e ? e.target.value : 1;
    setMonth(value);
    localStorage.setItem("month", value);
  };
  return (
    <div className="card-container">
      <p>Choose a Month</p>
      <div className="card gap-8">
        <select
          onChange={handleSelectChange}
          defaultValue={parseInt(month)}
          className="w-full shadow-xl tracking-wider h-10 text-center text-xl outline-none rounded-md animation  bg-[#FF5733] text-white"
        >
          {months.map(
            (month, i) =>
              i !== 0 && (
                <option key={i} value={i}>
                  {month}
                </option>
              )
          )}
        </select>

        <div className=" flex w-full gap-4 items-center justify-between">
          <div className="card rounded-md py-2 px-4 text-white bg-green-600 flex flex-col items-center justify-between">
            <p>Total In:</p>
            <p>{nf(totals.total_in)}</p>
          </div>
          <div className="card rounded-md py-2 px-4 text-white bg-red-600 flex flex-col items-center justify-between">
            <p>Total Out:</p>
            <p>{nf(totals.total_out)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthSelector;
