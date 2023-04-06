import { Box } from "@mui/system";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";

export const Page = ({ children, index, title, ...others }) => {
  const { pageNumber } = useContext(MainContext);
  return (
    <div
      role="tabpanel"
      hidden={pageNumber !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`sidebar-tab-${index}`}
      {...others}
    >
      {pageNumber === index && (
        <Box sx={{ height: "100vh", overflow: "hidden" }}>{children}</Box>
      )}
    </div>
  );
};
