import { useEffect, useState } from "react";
import { useContext } from "react";
import ExpenseContext from "../../contexts/ExpensesContext";

import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

const AddNewPageLogic = () => {
  const [isADetailPage, setIsADetailPage] = useState(false);
  const [modifiable, setModifiable] = useState(false); //Add new item or modify an existing one
  const navigate = useNavigate();
  const { id } = useParams();
  const [description, setDescription] = useState("");
  const [day, setDay] = useState(new Date().getDate());
  const [integer, setInteger] = useState("");
  const [decimal, setDecimal] = useState("");
  const [category, setCategory] = useState(4);
  const [isOut, setIsOut] = useState(true);
  const [active, setActive] = useState(false);
  const [saveButtonSpinning, setSaveButtonSpinning] = useState(false);
  const [modalIsToggled, setModalIsToggled] = useState(false);
  const [deleteModalToggle, setDeleteModalToggle] = useState(false);
  const [showCategories, setShowCategories] = useState(true);
  const { userId } = useContext(AuthContext);
  const {
    month,
    year,
    postExpense,
    putExpense,
    fetchCategories,
    fetchExpense,
  } = useContext(ExpenseContext);

  /*Tha page is for adding item or modyfing? */
  useEffect(() => {
    if (id === "new") {
      setModifiable(true);
      setIsADetailPage(false);
    } else {
      setModifiable(false);
      setIsADetailPage(true);
      fillData();
    }
    fetchCategories();

    return () => {
      setIsADetailPage(false);
      setModifiable(false);
      setDescription("");
      setDay(null);
      setInteger(0);
      setDecimal(0);
      setCategory(null);
      setIsOut(false);
      setActive(false);
      setSaveButtonSpinning(false);
      setModalIsToggled(false);
      setShowCategories(false);
    };
  }, []);

  /*If this is a detail page, populate the form with the information of expense #id;*/
  const fillData = async () => {
    try {
      const data = await fetchExpense(id);
      setDescription(data.description);
      if (data.category) {
        setCategory(data.category);
      }
      const total = data.total;
      setDecimal(parseInt(total.substring(total.length - 2, total.length)));
      if (total[0] === "-") {
        setIsOut(true);
        setShowCategories(true);
        setInteger(total.substring(1, total.length - 3));
      } else {
        setIsOut(false);
        setShowCategories(false);
        setInteger(total.substring(0, total.length - 3));
      }
      setDay(parseInt(data.date.substring(data.date.length - 2)));
    } catch (error) {
      alert("Something went wrong.");
      console.log(error);
      navigate("/");
    }
  };

  const handleFormChange = (e) => {
    switch (e.target.name) {
      case "description":
        setDescription(e.target.value);
        if (e.target.value.length > 0) {
          setActive(true);
        } else {
          setActive(false);
        }
        break;
      case "day":
        setDay(e.target.value);
        break;
      case "integer":
        const value = e.target.value;
        if (isNaN(parseInt(value))) {
          e.target.value = 0;
          setInteger(0);
        }
        if (value.length > 1 && value[0] == 0) {
          e.target.value = value[1];
          setInteger(value[1]);
        }
        setInteger(e.target.value);
        break;
      case "decimal":
        if (isNaN(e.target.value)) {
          setDecimal("00");
        } else if (e.target.value > 2) {
          setDecimal(e.target.value.substring(0, 2));
        } else {
          setDecimal(parseInt(e.target.value));
        }
        break;
      case "radioBtn":
        if (e.target.id === "in") {
          setShowCategories(false);
          setIsOut(false);
        } else {
          setShowCategories(true);
          setIsOut(true);
          setCategory(category);
        }
        break;
      case "category":
        setCategory(e.target.value);
        break;
      default:
        break;
    }
  };

  const normalize = (date) => {
    if (date < 10) {
      return "0" + date;
    } else {
      return date;
    }
  };

  const performRequest = async (method) => {
    const integerToNumber =
      isNaN(integer) || integer === "" ? 0 : parseInt(integer);
    const decimalToNumber =
      isNaN(decimal) || decimal === "" ? 0 : parseInt(decimal);
    const total =
      isOut == true
        ? -1 * (integerToNumber + decimalToNumber / 100)
        : integerToNumber + decimalToNumber / 100;
    const user = userId;
    const _day = normalize(day);
    const _month = normalize(month);
    const date = `${year}-${_month}-${_day}`;
    const _category = isOut ? category : null;
    try {
      if (method.toUpperCase() === "POST" && active) {
        setSaveButtonSpinning(true);
        const data = await postExpense(
          description,
          total,
          user,
          _category,
          date
        );
        setSaveButtonSpinning(false);
        navigate("/");
      }
      if (method.toUpperCase() === "PUT")
        await putExpense(id, description, total, user, _category, date);
      if (method.toUpperCase() === "DELETE") {
        navigate("/");
      }
    } catch (err) {
      alert(err);
      console.log(err);
      navigate("/");
    }
  };

  const save = async () => {
    try {
      setSaveButtonSpinning(true);
      await performRequest("PUT");
      setModifiable(false);
      setSaveButtonSpinning(false);
      await fillData();
      setModalIsToggled(true);

      setTimeout(() => {
        setModalIsToggled(false);
      }, 2000);
    } catch (err) {
      alert("Something went wrong.");
      console.log(err);
    }
  };

  const toggleDeleteModal = () => {
    setDeleteModalToggle(!deleteModalToggle);
  };

  return {
    id,
    isADetailPage,
    modifiable,
    setModifiable,
    description,
    day,
    integer,
    decimal,
    category,
    isOut,
    active,
    saveButtonSpinning,
    modalIsToggled,
    deleteModalToggle,
    showCategories,
    save,
    month,
    year,
    postExpense,
    putExpense,
    fetchCategories,
    fetchExpense,
    performRequest,
    handleFormChange,
    fillData,
    toggleDeleteModal,
  };
};

export default AddNewPageLogic;
