import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { SingleUser } from "../types/User";

interface UserContextType {
  selectedUser: SingleUser | null;
  setSelectedUser: (user: SingleUser) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [selectedUser, setSelectedUser] = useState<SingleUser | null>(null);

  return (
    <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUserContext must be used within UserProvider");
  return context;
};
