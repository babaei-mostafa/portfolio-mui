import { Helmet } from "react-helmet-async";

import { CodeRounded, TerminalRounded } from "@mui/icons-material";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { DevInfo, Skills } from "../components/pages";
import avatar from "../assets/images/2.jpg";
import { Resume } from ".";
import { CustomAvatar, CustomDivider } from "../components/common";

export const About = ({ helmetTitle }) => {
  return (
    <>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Card
        sx={{
          height: "100vh",
          backgroundColor: "background.default",
          overflow: "scroll",
        }}
      >
        <CardContent>
          <Grid container sx={{ mx: 3 }}>
            <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
              <CustomDivider
                deviderText="توسعه‌دهنده فرانت‌اند"
                deviderIcon={<CodeRounded />}
                align="right"
                direction="down"
              />
              <DevInfo>نام و نام خانوادگی : مصطفی بابایی</DevInfo>
              <DevInfo>شهر : تهران</DevInfo>
              <DevInfo>mostafa.bsh@gmail.com : آدرس ایمیل</DevInfo>
              <DevInfo>شماره موبایل : 09127095028</DevInfo>
            </Grid>
            <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
              <CustomAvatar avatar={avatar} size={250} fallback="MB" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid sx={{ width: 1 }}>
              <Resume />
            </Grid>
          </Grid>
          <Grid container>
            <Grid sx={{ width: 1, mt: 1, px: 2 }}>
              <CustomDivider
                deviderText="مهارت‌های من"
                deviderIcon={<TerminalRounded />}
                align="center"
                direction="down"
              />
              <Skills />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
