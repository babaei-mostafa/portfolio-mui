import { createContext } from "react";

export const MainContext = createContext({
    pageNumber: 0,
    handlePageNumber: () => { },
    drawerOpen: false,
    setDrawerOpen: () => { },
    handleThemeChange: () => {},
})