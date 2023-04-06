import { useEffect, useState } from "react";
import { Chip, Divider, Slide, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const CustomDivider = ({ deviderText, deviderIcon, align, direction }) => {
    const theme = useTheme();
      const [loading, setLoading] = useState(false);

      useEffect(() => {
        setLoading(true);

        return () => {
          setLoading(false);
        };
      }, []);

    return (
      <Slide
        direction={direction}
        in={loading}
        style={{ transitionDelay: loading ? "200ms" : "0ms" }}
      >
        <Divider
          textAlign={align}
          sx={{
            mt: 2,
            "&::before, &::after": {
              borderColor:
                theme.palette.mode === "dark"
                  ? "secondary.main"
                  : "primary.main",
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
      </Slide>
    );
};
