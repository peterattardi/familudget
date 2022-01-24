/*
Provides context to all the components that need
to access settings.
Settings: decimal and integer separator, currency.
*/

import { createContext, useState } from "react";
import { nf } from "../utilities/utility";
const SettingsContext = createContext();

export default SettingsContext;

export const SettingsProvider = ({ children }) => {
  const [decimalSeparator, setDecimalSeparator] = useState(
    localStorage.getItem("decimalSep") || "."
  );
  const [integerSeparator, setIntegerSeparator] = useState(
    localStorage.getItem("integerSep") || ","
  );
  const [currency, setCurrency] = useState(
    localStorage.getItem("currencySymbol") || "$"
  );
  const [currencyCode, setCurrencyCode] = useState(
    localStorage.getItem("currencyCode") || "$-USD"
  );

  /*Takes a number and applies the styling
  Uses function nf defined in utilities.js*/
  const format = (n) => {
    const formattedNumber = nf(n, decimalSeparator, integerSeparator, currency);
    return formattedNumber;
  };

  const contextData = {
    decimalSeparator: decimalSeparator,
    setDecimalSeparator: setDecimalSeparator,
    integerSeparator: integerSeparator,
    setIntegerSeparator: setIntegerSeparator,
    currency: currency,
    setCurrency: setCurrency,
    nf: format,
    currencyCode: currencyCode,
    setCurrencyCode: setCurrencyCode,
  };

  return (
    <SettingsContext.Provider value={contextData}>
      {children}
    </SettingsContext.Provider>
  );
};
