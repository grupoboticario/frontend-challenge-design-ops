import React, { useState } from "react";

type IDrawerContext = {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
};

export const DrawerContext = React.createContext<IDrawerContext>({
  isOpen: false,
  setIsOpen: () => {},
});

export const DrawerStorage = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <DrawerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};
