import React from "react";
import { Navbar } from "../../components/Navbar";
import { Main } from "../../components/Main";
import { animate, motion } from "framer-motion";

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-gray-100">
        <Navbar />
        <Main />
      </div>
    </motion.div>
  );
};

export default Dashboard;
