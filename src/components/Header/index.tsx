import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useEffect, useState } from "react";
import Toolbar from "@mui/material/Toolbar";

import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  const [exists, setexits] = useState<boolean>();

  useEffect(()=>{
    if (localStorage.getItem("user")) {
      setexits(true);
    } else {
      //alert("enter details first");
      setexits(false);
    }
  },[])
  const hello = () => {
    if (localStorage.getItem("user")) {
      setexits(true);
    } else {
      alert("enter details first");
      setexits(false);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <NavLink to={"/"} style={{ margin: "0 20px", color: "#fff" }}>
              Home
            </NavLink>
            <NavLink
              onClick={() => hello()}
              to={exists ? "second" : "/"}
              style={{ margin: "0 20px", color: "#fff" }}
            >
              Second Page
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
