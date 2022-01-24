import React, { useContext } from "react";
import SettingsContext from "../../contexts/SettingsContext";
import ExpenseContext from "../../contexts/ExpensesContext";
import { useRef } from "react";

const SettingsLogic = () => {
  const {
    setCurrency,
    setCurrencyCode,
    setDecimalSeparator,
    setIntegerSeparator,
    currencyCode,
    integerSeparator,
    currency,
  } = useContext(SettingsContext);
  const { year, setYear } = useContext(ExpenseContext);

  const handleChangeYear = (e) => {
    setYear(e.target.value);
    localStorage.setItem("year", e.target.value);
  };

  const handleCurrencyChange = (e) => {
    const symbol = e.target.value.substring(0, e.target.value.indexOf("-"));
    setCurrencyCode(e.target.value);
    setCurrency(symbol);
    localStorage.setItem("currencyCode", e.target.value);
    localStorage.setItem("currencySymbol", symbol);
  };

  const handleFormatChange = (e) => {
    if (e.target.value == ",") {
      setIntegerSeparator(",");
      setDecimalSeparator(".");
      localStorage.setItem("integerSep", ",");
      localStorage.setItem("decimalSep", ".");
    } else {
      setIntegerSeparator(".");
      setDecimalSeparator(",");
      localStorage.setItem("integerSep", ".");
      localStorage.setItem("decimalSep", ",");
    }
  };

  return {
    handleChangeYear,
    handleCurrencyChange,
    handleFormatChange,
    setCurrency,
    setCurrencyCode,
    setDecimalSeparator,
    setIntegerSeparator,
    year,
    currencyCode,
    currency,
    integerSeparator: integerSeparator,
  };
};

export default SettingsLogic;
