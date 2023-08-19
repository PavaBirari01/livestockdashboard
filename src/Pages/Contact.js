import React from "react";
import Sidenav from "../Components/Sidenav";
import { Box } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Box sx={{ height: 30 }} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Contact</h1>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
