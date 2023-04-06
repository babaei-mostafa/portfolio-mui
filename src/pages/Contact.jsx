import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { Typography, Card, CardContent, Slide } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { AccountCircle } from "@mui/icons-material";

import worldMap from "../assets/images/map.svg";
import { CustomDivider } from "../components/common";
import { ContactForm } from "../components/pages";

export const Contact = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Card
        sx={{
          height: "100vh",
          backgroundColor: "background.default",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent>
          <CustomDivider
            deviderText="تماس با من"
            deviderIcon={<AccountCircle />}
            align="center"
            direction="down"
          />

          <Grid container sx={{ mt: 5 }}>
            <Slide
              direction="up"
              in={loading}
              style={{ transitionDelay: loading ? "200ms" : "0ms" }}
            >
              <Grid xs={12} sm={12} md={8}>
                <Card sx={{ justifyContent: "center", alignItems: "center" }}>
                  <ContactForm />
                </Card>
              </Grid>
            </Slide>
            <Slide
              direction="down"
              in={loading}
              style={{ transitionDelay: loading ? "200ms" : "0ms" }}
            >
              <Grid
                xs={0}
                sm={0}
                md={4}
                sx={{
                  textAlign: "center",
                  backgroundImage: `url(${worldMap})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <Typography
                  variant="h6"
                  color="text.default"
                  sx={{ mt: 4, display: { xs: "none", md: "block" } }}
                >
                  بیا در مورد همه‌چیز با هم صحبت کنیم
                </Typography>
                <Typography
                  variant="body1"
                  color="text.default"
                  sx={{
                    mt: 2,
                    display: {
                      xs: "none",
                      md: "block",
                    },
                  }}
                >
                  👋{" "}
                  <a
                    href="mailto:mostafa.bsh@gmail.com"
                    alt="email"
                    style={{
                      color: "tomato",
                    }}
                  >
                    ایمیل
                  </a>{" "}
                  بزن به من
                </Typography>
              </Grid>
            </Slide>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
