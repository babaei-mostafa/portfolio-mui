import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@mui/material";
import { SchoolRounded } from "@mui/icons-material";
import { CustomDivider } from "../components/common";
import { WorksGrid } from "../components/pages";

export const Works = ({ helmetTitle }) => {
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
          <CustomDivider
            deviderText="نمونه کارهای من"
            deviderIcon={<SchoolRounded />}
            align="center"
            direction="down"
          />
          <WorksGrid />
        </CardContent>
      </Card>
    </>
  );
};
