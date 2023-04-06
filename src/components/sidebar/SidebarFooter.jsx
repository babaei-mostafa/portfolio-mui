import { Box, Typography } from "@mui/material";
import { CopyrightRounded } from "@mui/icons-material";

export const SidebarFooter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "end",
        height: 50,
        mb: 2
      }}
    >
      <Typography
        fontSize={12}
        color="text.primary"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.3rem",
        }}
      >
        طراحی‌شده توسط مصطفی بابایی <CopyrightRounded fontSize="" />
      </Typography>
    </Box>
  );
};
