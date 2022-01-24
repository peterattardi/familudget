/*
Wraps together ExpensesContext and
SettingsContext to all the components that need both
*/

import { SettingsProvider } from "./SettingsContext";
import { ExpenseProvider } from "./ExpensesContext";

export const ContextWrapper = ({ children }) => {
  return (
    <SettingsProvider>
      <ExpenseProvider>{children}</ExpenseProvider>
    </SettingsProvider>
  );
};
