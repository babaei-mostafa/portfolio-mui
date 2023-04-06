import { Tab, Tabs } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { grey } from "@mui/material/colors";
import { tabsData } from "../../constants/tabsData";

export const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);

  const theme = useTheme();
  const tabs = tabsData();

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      indicatorColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
      textColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
      onChange={handlePageNumber}
      sx={{ mt: 2 }}
    >
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          iconPosition="start"
          sx={{
            color: "text.primary",
            backgroundColor:
              theme.palette.mode === "dark" ? grey[800] : grey[500],
            my: 0.5,
            mx: 1,
            "&.MuiTab-root": { minHeight: 50 },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tab}
        />
      ))}
    </Tabs>
  );
};
