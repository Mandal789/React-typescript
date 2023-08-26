import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Second Page", path: "/second" },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                style={{ margin: "0 20px", color: "#fff" }}
              >
                {item.name}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
