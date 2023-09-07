import React, { useState } from "react";
import { Form, Formik } from "formik";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LoginCreds } from "../models/login.model";
import { v4 as uuid } from "uuid";

const LoginForm = ({ setId }: { setId: any }) => {
  const [initialCreds, setCreds] = useState<LoginCreds>({ loginID: null });

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
            setCreds({ loginID: value });
          }}
          id="login-id"
          variant="outlined"
        />
      </Box>

      <Stack spacing={2} direction="row">
        <Button
          onClick={() => {
            setId(initialCreds.loginID);
          }}
          variant="contained"
        >
          Login
        </Button>{" "}
        <Button
          color="warning"
          onClick={() => {
            setId(uuid());
          }}
          variant="contained"
        >
          Create new
        </Button>
      </Stack>
    </div>
  );
};

export default LoginForm;
