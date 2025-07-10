import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
// Define the User type here or import it from another file
type User = {
  // Example fields, adjust as needed
  id: number;
  name: string;
  email: string;
};

type AppContextType = {
  user: User[];
  setUser: (value: User[]) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
const [user, setUser] = useState<User[]>([]);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
