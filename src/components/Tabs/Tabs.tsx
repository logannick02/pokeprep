import { useState } from "react";
import { TabsContext, useTabs } from "../../context/TabsContext";
import "./Tabs.css";

export const Tabs = ({children, defaultValue, defaultIndex}: {children: React.ReactNode, defaultValue: string, defaultIndex: number}) => {
    const [activeValue, setActiveValue] = useState(defaultValue);
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    const setActive = (val: string, index: number) => {
        setActiveValue(val);
        setActiveIndex(index);
    }

    return (
        <TabsContext.Provider value={{activeValue, setActive, activeIndex }}>
            <div className="tabs">{children}</div>
        </TabsContext.Provider>
    );
}

export const TabsList = ({children}: {children: React.ReactNode}) => {
    const {activeIndex} = useTabs();
    return <div className="tabs-list" style={{ '--active-index': activeIndex } as React.CSSProperties}>{children}</div>
}

export const TabsTrigger = ({value, index, children}: {value: string, index: number, children: React.ReactNode}) => {
    const {activeValue, setActive} = useTabs();

    return (
        <button className={activeValue === value ? 'selected': ''} onClick={() => setActive(value, index)}>
            {children}
        </button>
    );
}

export const TabsContent = ({value, children}: {value: string, children: React.ReactNode}) => {
    const active = useTabs().activeValue;
    return active === value ? <div className="tabs-content">{children}</div> : null;
}