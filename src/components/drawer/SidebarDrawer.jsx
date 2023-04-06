import { Drawer } from "@mui/material";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { SidebarContent } from "../sidebar";

export const SidebarDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useContext(MainContext);
  return (
    <Drawer
      open={drawerOpen}
      variant="temporary"
      onClose={() => setDrawerOpen(false)}
      sx={{
        "& .MuiDrawer-paper": { width: 300 },
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >
      <SidebarContent />
    </Drawer>
  );
};
