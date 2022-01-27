/*
Wraps together ExpensesContext and
SettingsContext to all the components that need both
*/

import { SettingsProvider } from "./SettingsContext";
import { ExpenseProvider } from "./ExpensesContext";
import { AuthProvider } from "./AuthContext";

export const ContextWrapper = ({ children }) => {
  return (
    <AuthProvider>
      <SettingsProvider>
        <ExpenseProvider>{children}</ExpenseProvider>
      </SettingsProvider>
    </AuthProvider>
  );
};
