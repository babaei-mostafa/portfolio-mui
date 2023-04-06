import { Card, CardContent } from "@mui/material";

import { HomeRepairServiceRounded } from "@mui/icons-material";

import { Helmet } from "react-helmet-async";

import { CustomDivider } from "../components/common";
import { ExperienceTimeline } from "../components/pages";

export const Resume = ({ helmetTitle }) => {

  return (
    <>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Card sx={{ backgroundColor: "background.default" }}>
        <CardContent>
          <CustomDivider
            deviderText="تجربیات کاری"
            deviderIcon={<HomeRepairServiceRounded />}
            align="center"
            direction="down"
          />
          <ExperienceTimeline />
        </CardContent>
      </Card>
    </>
  );
};
