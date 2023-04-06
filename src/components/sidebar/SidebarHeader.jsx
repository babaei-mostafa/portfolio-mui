import { Box, Typography } from "@mui/material";
import avatar from "../../assets/images/2.jpg";
import { ThemeActionButton } from "../ThemeActionButton";
import { CustomAvatar } from "../common";
import { SocialMediaIcons } from "../";

export const SidebarHeader = () => {
  return (
    <>
      <ThemeActionButton />
      <CustomAvatar avatar={avatar} size={200} fallback="MB" />
      <SocialMediaIcons />
      <Box component="div" sx={{ m: 1, color: "text.primary" }}>
        <Typography variant="h6">مصطفی بابایی</Typography>
        <Typography variant="h6">توسعه‌دهنده فرانت‌اند</Typography>
      </Box>
    </>
  );
};
