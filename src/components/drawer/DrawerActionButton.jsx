import { MenuRounded } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";

export const DrawerActionButton = () => {
  const { setDrawerOpen } = useContext(MainContext);
  return (
    <Box
      sx={{
        position: "absolute",
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >
      <Fab
        color="primary"
        aria-label="Sidebar"
        onClick={() => setDrawerOpen((prev) => !prev)}
        size="small"
        sx={{ m: 2 }}
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
};
