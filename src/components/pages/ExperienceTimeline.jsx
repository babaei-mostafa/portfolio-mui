import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";
import { Slide, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { HomeRepairServiceRounded } from "@mui/icons-material";

import { devExp } from "../../constants/devInfo";

export const ExperienceTimeline = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Timeline position="right" sx={{ direction: "ltr" }}>
      {devExp.map((exp, index) => (
        <Slide
          direction="up"
          in={loading}
          style={{
            transitionDelay: loading ? `${index + 3}99ms` : "0ms",
          }}
        >
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="info" variant="outlined">
                <HomeRepairServiceRounded color="info" />
              </TimelineDot>
              {index !== 2 ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="caption" color="gray">
                {exp.year}
              </Typography>
              <Typography variant="body1" color="text.default">
                {exp.title}
              </Typography>
              <Typography variant="body2" color="text.default">
                {exp.company}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
};
