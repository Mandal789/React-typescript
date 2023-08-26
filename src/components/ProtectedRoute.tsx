import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Form from "./First_page/Form";

interface ComponentProps {
  Component: JSX.Element;
}

const Protected: React.FC<ComponentProps> = ({ Component }) => {
  const [state, setstate] = useState<boolean>();
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("user");
    if (!login) {
      navigate("/");
      alert("Enter details first");
      setstate(false);
      //console.log(login);
    } else {
      setstate(true);
      //console.log(JSON.parse(login));
    }
  }, [Component]);
  if (state) {
    return (
      <Box>
        <h2>Data From API </h2>
        {Component}
      </Box>
    );
  } else {
    return <Form />;
  }
};

export default Protected;
