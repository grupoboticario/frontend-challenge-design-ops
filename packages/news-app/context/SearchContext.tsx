import React, { useState } from "react";

type ISerachContext = {
  keyWord: string;
  setKeyWord: (arg: string) => void;
};

export const SerachContext = React.createContext<ISerachContext>({
  keyWord: "",
  setKeyWord: () => {},
});

export const SerachStorage = ({ children }: { children: React.ReactNode }) => {
  const [keyWord, setKeyWord] = useState<string>("");

  return (
    <SerachContext.Provider value={{ keyWord, setKeyWord }}>
      {children}
    </SerachContext.Provider>
  );
};
