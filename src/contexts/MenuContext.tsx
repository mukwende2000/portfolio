import React, { ReactNode, createContext, useState } from "react";

type MenuType = {
  menuIsOpen: boolean;
  setMenuIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialState: MenuType = {
  menuIsOpen: false,
};

const MenuContext = createContext(initialState);

export function MenuContextProvider({ children }: { children: ReactNode }) {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  return (
    <MenuContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
}

export default MenuContext;
