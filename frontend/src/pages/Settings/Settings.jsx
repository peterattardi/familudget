import SettingsLogic from "./SettingsLogic";
import { currencies, yearsOptions } from "../../utilities/utility";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Settings = () => {
  const props = SettingsLogic();
  return (
    <div className="bg-black flex flex-col gap-12  justify-center items-center px-12  h-full">
      <Link
        to="/"
        className="w-full flex justify-left max-w-[600px] cursor-pointer group"
      >
        <BsArrowLeft
          size={30}
          className=" text-gray-500 group-hover:text-white"
        />
      </Link>
      <div className="flex flex-col card max-w-[600px] bg-gray-700 text-white">
        <div className="flex items-center w-full text-right justify-between">
          <p>Year:</p>
          <select
            name="years"
            className="input w-20 border-none bg-black"
            value={props.year}
            onChange={props.handleChangeYear}
          >
            {yearsOptions.map((y, i) => {
              return (
                <option key={i} value={y}>
                  {y}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center w-full text-right  justify-between">
          <p>Format: </p>
          <select
            onChange={props.handleFormatChange}
            className="input w-32 border-none bg-black"
            value={props.integerSeparator}
          >
            <option value="," defaultValue>
              1,420.69$
            </option>
            <option value=".">1.420,69$</option>
          </select>
        </div>
        <div className="flex items-center gap-40 w-full text-right justify-between">
          <p>Currency: </p>
          <select
            name={props.currency}
            value={props.currencyCode}
            className="input w-full bg-black border-none"
            onChange={props.handleCurrencyChange}
          >
            {currencies.map((currency, i) => {
              return (
                <option
                  key={i}
                  value={currency.symbol + "-" + currency.code}
                  name={currency.symbol}
                >{`${currency.name}  [${currency.symbol}]`}</option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
