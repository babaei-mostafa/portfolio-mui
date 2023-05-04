import { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
  CardMedia,
  Slide,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { works } from "../../constants/works";

export const WorksGrid = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <>
      <Grid container sx={{ m: 3 }}>
        {works.map((work, index) => (
          <Grid key={index} xs={12} sm={6} md={6} lg={4} sx={{ px: 2, mb: 2 }}>
            <Slide
              direction="up"
              in={loading}
              style={{
                transitionDelay: loading ? `${index + 3}99ms` : "0ms",
              }}
            >
              <Card
                sx={{
                  maxWidth: 345,
                  backgroundColor: "steelblue",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="166"
                    width="300"
                    image={work.image}
                    alt={work.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="body1" textAlign="left" gutterBottom>
                      {work.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign="left"
                      gutterBottom
                      sx={{ direction: "ltr" }}
                    >
                      {work.des}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    href={work.demo}
                    size="small"
                    color="primary"
                    target="_blank"
                  >
                    مشاهده دمو
                  </Button>
                  <Button
                    href={work.code}
                    size="small"
                    color="primary"
                    target="_blank"
                  >
                    مشاهده کدها
                  </Button>
                </CardActions>
              </Card>
            </Slide>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
