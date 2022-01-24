import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import ExpenseContext from "../../contexts/ExpensesContext";
import Button from "../FormComponents/Button";

const DeleteModal = ({ inExit, id }) => {
  const { deleteExpense } = useContext(ExpenseContext);
  const navigate = useNavigate("/");
  const [isSpinning, setIsSpinning] = useState(false);

  const deletion = async () => {
    try {
      setIsSpinning(true);
      await deleteExpense(id);
      setIsSpinning(false);
      navigate("/");
    } catch (err) {
      alert("Something went wrong");
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-500/50 w-[100vw] h-[100vh] px-12 flex items-center justify-center">
      <div className="card  shadow-md text-center gap-12 flex flex-col ">
        <p className="text-xl leading-8">
          Are you sure you want to delete this expense?
        </p>
        <div className="flex w-full justify-center items-center gap-8">
          {isSpinning ? (
            <Button background="red" animate={true}>
              Delete
            </Button>
          ) : (
            <Button background="red" animate={false} action={deletion}>
              Delete
            </Button>
          )}

          <button
            className="h-10 underline underline-offset-4 hover:scale-95 transition-all"
            onClick={() => {
              inExit();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
