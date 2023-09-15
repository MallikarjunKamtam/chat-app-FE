import React, { useState, useEffect } from "react";
import { Form, Formik } from "formik";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LoginCreds } from "../models/login.model";


import { postLogin } from "../api/auth.api";
import { useAppDispatch } from "../app/hooks";
import { postLoginAsync } from "../slices/users.slice";


const LoginForm = () => {
  const [initialCreds, setCreds] = useState<LoginCreds>({ user_name: null, password: null });
  const [token, setToken] = useState(null)
  const dispatch = useAppDispatch()

  console.log(token, 'tokentokentoken')

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-3">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          color: "white",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ color: "white", backgroundColor: "lightgray" }}
          color="warning"
          onChange={(e) => {
            const { value } = e.target;
            setCreds({ ...initialCreds, user_name: value });
          }}
          id="login-id"
          variant="outlined"
        />
        <TextField
          sx={{ color: "white", backgroundColor: "lightgray" }}
          color="warning"
          onChange={(e) => {
            const { value } = e.target;
            setCreds({ ...initialCreds, password: value });
          }}
          id="password-id"
          variant="outlined"
        />
      </Box>

      <Stack spacing={2} direction="row">
        <Button
          onClick={async () => {
            await dispatch(postLoginAsync({ ...initialCreds }))
          }}
          variant="contained"
        >
          Login
        </Button>{" "}
        <Button
          color="warning"
          onClick={() => { }}
          variant="contained"
        >
          Create new
        </Button>
      </Stack>
    </div >
  );
};

export default LoginForm;
