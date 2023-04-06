import { KeyboardArrowLeftRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const DevInfo = ({ children }) => {
  const theme = useTheme();
  return (
    <Typography
      variant="body1"
      color="text.primary"
      textAlign="left"
      sx={{ mt: 2 }}
    >
      {children}
      <KeyboardArrowLeftRounded
        sx={{
          verticalAlign: "bottom",
          color:
            theme.palette.mode === "dark" ? "secondary.main" : "primary.main",
        }}
      />
    </Typography>
  );
};
