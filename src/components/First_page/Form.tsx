import { Container, Button, Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../module/Interfaces";
interface FormData {
  user:LoginUser 
}
const Form: React.FC = () => {
  const navigate = useNavigate();
  const [state, setstate] = useState<FormData>({
    user: {
      username: "",
      phone: "",
      email: "",
    },
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setstate({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // console.log("user", state);
    localStorage.setItem("user", JSON.stringify(state.user));
    setstate({
      user: {
        username: "",
        phone: "",
        email: "",
      },
    });
    navigate("/second");
  };
  return (
    <Container sx={{ border: 2, bgcolor: "antiquewhite", p: 3  }}>
      <Box
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "25ch",
            bgcolor: "white",
            display: "flex",
          },
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            required
            name="username"
            type="text"
            value={state.user.username}
            id="outlined-required"
            label="Enter your name"
            placeholder="Enter your name"
            fullWidth
            onChange={changeHandler}
          />

          <TextField
            required
            name="email"
            type="email"
            value={state.user.email}
            id="filled-required"
            label="Email address"
            placeholder=" Email address"
            fullWidth
            onChange={changeHandler}
          />
          <TextField
            required
            id="outlined-number"
            name="phone"
            label="contact number"
            type="number"
            value={state.user.phone}
            placeholder="contact number"
            fullWidth
            onChange={changeHandler}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ "&:hover": { bgcolor: "darkgreen", color: "white" } }}
            fullWidth
          >
            submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Form;
