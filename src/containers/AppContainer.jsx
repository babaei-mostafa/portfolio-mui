import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { PagesContainer, MainLayout, Sidebar } from "../components";
import { Page } from "../components/pages";
import { MainContext } from "../context/MainContext";
import { SidebarContainer } from "./SidebarContainer";
import { DrawerActionButton } from "../components/drawer";
import { About, Contact, Home, Works } from "../pages";
import SwipeableViews from "react-swipeable-views";

const AppContainer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState();

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setMode(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  // codes for Tabs
  const [pageNumber, setPageNumber] = useState(0);

  const handlePageChange = (index) => {
    setPageNumber(index);
  };

  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage);
  };
  // end of codes for Tabs

  // function for toggling the theme
  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <>
      <MainContext.Provider
        value={{
          pageNumber,
          handlePageNumber,
          drawerOpen,
          setDrawerOpen,
          handleThemeChange,
          mode,
        }}
      >
        <MainLayout mode={mode}>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
          <DrawerActionButton />
          <PagesContainer>
            <SwipeableViews index={pageNumber} onChangeIndex={handlePageChange}>
              <Page index={0}>
                <Home helmetTitle="وب‌سایت شخصی | صفحه اصلی" />
              </Page>
              <Page index={1}>
                <About helmetTitle="وب‌سایت شخصی | درباره من" />
              </Page>

              <Page index={2}>
                <Works helmetTitle="وب‌سایت شخصی | نمونه کارهای من" />
              </Page>
              <Page index={3}>
                <Contact helmetTitle="وب‌سایت شخصی | تماس با من" />
              </Page>
            </SwipeableViews>
          </PagesContainer>
        </MainLayout>
      </MainContext.Provider>
    </>
  );
};

export default AppContainer;
