import React, { useEffect, useContext } from "react";
import MonthSelector from "./MonthSelector";
import Summury from "./Summury";
import ItemsList from "./ItemsList";
import AddNewItem from "./AddNewItem";
import { Link } from "react-router-dom";
import {
  MdLocalGroceryStore,
  MdMovieFilter,
  MdOutlineLocalAirport,
} from "react-icons/md";
import { BiRestaurant } from "react-icons/bi";
import { BsFillLightningChargeFill, BsGiftFill } from "react-icons/bs";
import { RiMentalHealthFill, RiMedicineBottleFill } from "react-icons/ri";
import { GiHouse, GiCubes, GiClothes } from "react-icons/gi";
import { FaBus } from "react-icons/fa";
import { useState } from "react";

export const Main = () => {
  const icons = {
    Groceries: <MdLocalGroceryStore size={25} />,
    Restaurants: <BiRestaurant size={25} />,
    "Bills and Subscriptions": <BsFillLightningChargeFill size={25} />,
    Health: <RiMentalHealthFill size={25} />,
    Entertainment: <MdMovieFilter size={25} />,
    Rent: <GiHouse size={25} />,
    Gifts: <BsGiftFill size={25} />,
    Medications: <RiMedicineBottleFill size={25} />,
    Travel: <MdOutlineLocalAirport size={25} />,
    Objects: <GiCubes size={25} />,
    Clothes: <GiClothes size={25} />,
    Transports: <FaBus size={25} />,
  };
  const [isDeleted, setDeleted] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center py-10 px-4 gap-12">
      <MonthSelector />
      <Summury icons={icons} />
      <Link to="item/new">
        <AddNewItem />
      </Link>
      <ItemsList icons={icons} />
    </main>
  );
};
