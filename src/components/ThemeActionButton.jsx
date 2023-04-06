import { useContext } from "react";

import { useTheme } from "@mui/material/styles";

import { Box, Fab } from "@mui/material";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";

import { MainContext } from "../context/MainContext";

export const ThemeActionButton = () => {
  const theme = useTheme();
  const { handleThemeChange } = useContext(MainContext);

  return (
    <Box
      sx={{
        position: "absolute",
        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      <Fab
        aria-label="ThemeChanger"
        variant="extended"
        size="small"
        color="secondary"
        onClick={handleThemeChange}
        sx={{ ml: 2, color: "whitesmoke" }}
      >
        {theme.palette.mode === "dark" ? (
          <WbSunnyOutlined sx={{ mr: 1 }} />
        ) : (
          <NightlightOutlined sx={{ mr: 1 }} />
        )}
        {theme.palette.mode === "dark" ? "تم روز" : "تم شب"}
      </Fab>
    </Box>
  );
};
