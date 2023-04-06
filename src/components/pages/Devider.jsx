import { Chip, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const Devider = ({ deviderText, deviderIcon, align }) => {
  const theme = useTheme();
  return (
    <Divider
      textAlign={align}
      sx={{
        mt: 2,
        "&::before, &::after": {
          borderColor:
            theme.palette.mode === "dark" ? "secondary.main" : "primary.main",
        },
      }}
    >
      <Chip
        color={theme.palette.mode === "dark" ? "secondary" : "primary"}
        icon={deviderIcon}
        label={
          <Typography
            variant="body1"
            color="black"
            sx={{ textAlign: "center" }}
          >
            {deviderText}
          </Typography>
        }
        sx={{ p: 3 }}
      />
    </Divider>
  );
};
