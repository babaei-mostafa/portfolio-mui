import { GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

export const SocialMediaIcons = () => {
    return (
      <Box component="div" sx={{ mt: 1, textAlign: "center" }}>
        <IconButton aria-label="Linkedin">
          <a
            href="https://www.linkedin.com/in/babaei-mostafa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn sx={{ color: "text.primary" }} />
          </a>
        </IconButton>
        <IconButton aria-label="Linkedin">
          <a
            href="https://github.com/babaei-mostafa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub sx={{ color: "text.primary" }} />
          </a>
        </IconButton>
        <IconButton aria-label="Linkedin">
          <a
            href="https://wa.me/989374659145"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp sx={{ color: "text.primary" }} />
          </a>
        </IconButton>
      </Box>
    );
}