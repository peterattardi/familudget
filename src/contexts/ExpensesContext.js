/*
Provides context to all the components that need to 
access the familudget api to retrive, modify or delete information
*/

import { createContext, useContext, useEffect, useState } from "react";
import { months } from "../utilities/utility";
import AuthContext from "./AuthContext";

const ExpenseContext = createContext("");

export default ExpenseContext;

export const ExpenseProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [totals, setTotals] = useState({ total_in: 0, total_out: 0 });
  const [totalsPerCategory, setTotalPerCategories] = useState(null);
  const [month, setMonth] = useState(
    localStorage.getItem("month") || new Date().getMonth() + 1
  );
  const [year, setYear] = useState(
    localStorage.getItem("year") || new Date().getFullYear()
  );
  const API_URL = process.env.REACT_APP_API_URL;
  const { userId } = useContext(AuthContext);

  const fetchData = () => {
    try {
      fetchCategories();
      fetchExpenses(year, month);
      fetchTotals(year, month);
      fetchTotalPerCategories(year, month);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  const fetchCategories = async () => {
    const response = await fetch(`${API_URL}/categories/`);
    if (response.ok) {
      const data = await response.json();
      setCategories(data);
    } else {
      throw new Error("Cannot get Categories. Something went wrong.");
    }
  };

  const fetchExpenses = async () => {
    const response = await fetch(
      `${API_URL}/expenses/${userId}/${year}-${month}`
    );
    if (response.ok) {
      const data = await response.json();
      setExpenses(data);
    } else {
      throw new Error("Cannot get Expenses. Something went wrong.");
    }
  };

  const fetchTotals = async () => {
    const response = await fetch(
      `${API_URL}/totals/${userId}/${year}-${month}`
    );
    if (response.ok) {
      const data = await response.json();
      setTotals(data);
    } else {
      throw new Error("Cannot get Totals. Something went wrong.");
    }
  };

  const fetchTotalPerCategories = async () => {
    const response = await fetch(
      `${API_URL}/totals-per-category/${userId}/${year}-${month}`
    );
    if (response.ok) {
      const data = await response.json();
      setTotalPerCategories(data);
    } else {
      throw new Error("Cannot get Total Per Categories. Something went wrong");
    }
  };

  const fetchExpense = async (id) => {
    const response = await fetch(`${API_URL}/expense/${userId}/${id}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Cannot get expense #${id}. Something went wrong.`);
    }
  };

  const postExpense = async (
    description,
    total,
    user,
    category = null,
    date = null
  ) => {
    const response = await fetch(`${API_URL}/expenses/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: description,
        total: total,
        user: user,
        category: category,
        date: date,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Cannot post new expense. Something went wrong.");
    }
  };

  const putExpense = async (
    id,
    description,
    total,
    user,
    category = null,
    date = null
  ) => {
    const response = await fetch(`${API_URL}/expense/${userId}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        description: description,
        total: total,
        user: user,
        category: category,
        date: date,
      }),
    });
    if (response.ok) {
      const data = await response.json();
    } else {
      throw new Error(`Cannot update item #${id}. Something went wrong.`);
    }
  };

  const deleteExpense = async (id) => {
    const response = await fetch(`${API_URL}/expense/${userId}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      const data = await response.json();
    } else {
      throw new Error(`Cannot delete item #${id}. Something went wrong.`);
    }
  };

  const contextData = {
    expenses: expenses,
    categories: categories,
    totals: totals,
    totalsPerCategory: totalsPerCategory,
    month: month,
    year: year,
    setYear: setYear,
    setMonth: setMonth,
    fetchData: fetchData,
    months: months,
    postExpense: postExpense,
    fetchExpense: fetchExpense,
    putExpense: putExpense,
    fetchCategories: fetchCategories,
    deleteExpense: deleteExpense,
  };

  return (
    <ExpenseContext.Provider value={contextData}>
      {children}
    </ExpenseContext.Provider>
  );
};
