import React from "react";
import { useContext, useEffect } from "react";
import ExpenseContext from "../contexts/ExpensesContext";
import SettingsContext from "../contexts/SettingsContext";

const Summury = ({ icons }) => {
  const { totalsPerCategory, categories, totals } = useContext(ExpenseContext);
  const { nf } = useContext(SettingsContext);

  return (
    <div className="card-container w-full">
      <p>Summury:</p>
      <div className="card xs:flex-col sm:flex-row items-center  gap-12 justify-center py-4">
        <div
          className="p-12 shadow-2xl bg-black xs:w-2/4 max-w-[600px]  text-white aspect-square xs:rounded-3xl sm:rounded-full flex flex-col items-center gap-4  justify-center "
          style={
            totals.total_in + totals.total_out > totals.total_in / 5
              ? { backgroundColor: "rgb(76 161 84)" }
              : { backgroundColor: "rgb(202 58 49)" }
          }
        >
          <p className="text-sm ">Remaining</p>
          <p className="text-lg">{nf(totals.total_in + totals.total_out)}</p>
        </div>
        {totalsPerCategory && totalsPerCategory.length > 0 && (
          <div className="grid xs:grid-cols-4 sm:grid-cols-3 gap-8 w-full  justify-around items-center text-center">
            {totalsPerCategory.map(
              (category, i) =>
                category.total_sum !== 0 && (
                  <div
                    key={i}
                    className="flex flex-col gap-2 items-center justify-center"
                  >
                    {icons[category.category]}
                    {categories[category.category - 1] &&
                      icons[categories[category.category - 1].name]}
                    <p className="text-sm">{nf(category.total_sum)}</p>
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Summury;
