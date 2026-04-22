import { createContext, useContext } from "react";

type TabsContextType = {
    activeValue: string
    setActive: (val: string, index: number) => void
    activeIndex: number
}

export const TabsContext = createContext<TabsContextType>({
    activeValue: '',
    setActive: () => {},
    activeIndex: 0
});

export const useTabs = () => useContext(TabsContext);