import { cloneElement } from "react";
import { AppBar, Toolbar, Button, useScrollTrigger } from "@mui/material";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = () => {
  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Button variant="primary">Click Here</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;
