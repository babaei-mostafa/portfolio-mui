import { Avatar } from "@mui/material";

export const CustomAvatar = ({ avatar, size, fallback }) => {
    return (
      <Avatar
        src={avatar}
        variant="rounded"
        sx={{
          height: size,
          width: size,
          margin: "0 auto",
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
      >
        MB
      </Avatar>
    );
}