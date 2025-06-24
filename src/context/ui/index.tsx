'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

interface UIContextProps {
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
}
const defaultContextValue: UIContextProps | undefined = undefined;

export const UIContext = createContext<UIContextProps | undefined>(defaultContextValue);

export const useUIContext = (): UIContextProps => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUIContext must be used within a UIProvider');
  }
  return context;
};

export const UIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const value = {
    drawerOpen,
    setDrawerOpen,
  };
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
