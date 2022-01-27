import AddNewPageLogic from "./AddNewPageLogic";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import Modal from "../../components/Modals/Modal";
import DeleteModal from "../../components/Modals/DeleteModal";
import {
  Day,
  Description,
  Total,
  RadioBtns,
  Categories,
  Button,
} from "../../components/FormComponents/index";
const AddNewPage = () => {
  const props = AddNewPageLogic();
  return (
    <motion.div
      className="h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex relative flex-col xs:gap-6  sm:gap-12 justify-center items-center h-full w-max-[600px] py-10 px-4">
        <Link
          to="/"
          className="w-full flex justify-left max-w-[600px] cursor-pointer group"
        >
          <BsArrowLeft
            size={30}
            className=" text-gray-500 group-hover:text-black"
          />
        </Link>
        <div className="card-container">
          <p>Add a new item</p>
          <div className="card ">
            <form className="grid text-gray-500 xs:gap-2 s:gap-8 xs:grid-cols-1 sm:grid-cols-2 items-center place-items-center justify-center">
              <Day
                day={props.day}
                month={props.month}
                year={props.year}
                handleFormChange={props.handleFormChange}
                modifiable={props.modifiable}
              />
              <Description
                handleFormChange={props.handleFormChange}
                modifiable={props.modifiable}
                defaultValue={props.description}
              />
              <Total
                handleFormChange={props.handleFormChange}
                modifiable={props.modifiable}
                defaultInteger={props.integer}
                defaultDecimal={props.decimal}
              />
              <RadioBtns
                handleFormChange={props.handleFormChange}
                modifiable={props.modifiable}
                isOut={props.isOut}
              />
              <Categories
                defaultCategory={props.category}
                handleFormChange={props.handleFormChange}
                showCategories={props.showCategories}
                modifiable={props.modifiable}
              />
            </form>
          </div>
        </div>

        {props.isADetailPage ? (
          <div className="flex w-full justify-center items-center gap-8">
            {props.modifiable ? (
              <>
                {props.saveButtonSpinning ? (
                  <Button
                    background="green"
                    action={() => {
                      props.performRequest("PUT");
                      props.fillData();
                      props.setModifiable(false);
                    }}
                    animate={true}
                  >
                    Save
                  </Button>
                ) : (
                  <Button background="green" action={props.save}>
                    Save
                  </Button>
                )}

                <button
                  className="h-10 underline underline-offset-4 hover:scale-95 transition-all"
                  onClick={() => {
                    props.setModifiable(false);
                    props.fillData();
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <Button action={props.setModifiable} background="orange">
                  Edit
                </Button>
                or
                <Button background="red" action={props.toggleDeleteModal}>
                  Delete
                </Button>
              </>
            )}
          </div>
        ) : (
          <>
            {props.saveButtonSpinning ? (
              <Button
                action={() => {
                  if (props.active) {
                    props.performRequest("POST");
                  }
                }}
                background="green"
                animate={true}
              >
                Add
              </Button>
            ) : (
              <Button
                action={() => {
                  if (props.active) {
                    props.performRequest("POST");
                  }
                }}
                background="green"
                animate={false}
              >
                Add
              </Button>
            )}
          </>
        )}
        {props.modalIsToggled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Modal background={{ r: 242, g: 169, b: 59 }}>
              Item has been updated
            </Modal>
          </motion.div>
        )}

        {props.deleteModalToggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DeleteModal
              inExit={props.toggleDeleteModal}
              action={null}
              id={props.id}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default AddNewPage;
