import { useCallback, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import bg from "../assets/images/home-bg.jpg";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { links } from "../constants/particles";
import { Helmet } from "react-helmet-async";

const strings = [
  "من یک توسعه‌دهنده وب هستم",
  "من یک برنامه‌نویس فرانت‌اند هستم",
  "من یک طراح هستم",
];

export const Home = ({helmetTitle}) => {
  const nameEl = useRef(null);
  const infoEl = useRef(null);
  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["مصطفی بابایی"],
      typeSpeed: 110,
      backSpeed: 80,
      backDelay: 50,
      showCursor: false,
    });

    const typedInfo = new Typed(infoEl.current, {
      strings,
      startDelay: 1500,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 50,
      loop: true,
      showCursor: false,
    });
    return () => {
      typedName.destroy();
      typedInfo.destroy();
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Box
        sx={{
          backgroundImage: `url(${bg})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={links}
        />
        <Box variant="div" sx={{ display: "flex", color: "tomato" }}>
          <Typography variant="h3">{"{{ "} </Typography>
          <Typography ref={nameEl} variant="h3"></Typography>
          <Typography variant="h3"> {" }}"}</Typography>
        </Box>
        <Typography
          ref={infoEl}
          variant="h3"
          color="whitesmoke"
          sx={{ textDecoration: "underline" }}
        ></Typography>
      </Box>
    </>
  );
};
