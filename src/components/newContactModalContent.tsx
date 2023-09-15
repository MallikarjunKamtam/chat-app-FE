
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import { FormikProps, ErrorMessage, Form, Formik, FormikHelpers } from "formik";
import { LoginCreds } from "../models/login.model";
import { postCreateUserAsync, postLoginAsync } from "../slices/users.slice";
import * as yup from 'yup'
import { useAppDispatch } from "../app/hooks";

const NewContactModalContent = ({ setModalOpen }: { setModalOpen: any }) => {


  const validationSchema = yup.object({
    user_name: yup.string().nullable().required('User name is required'),
    password: yup.string().nullable().required('Password is required')
  })

  const initialCreds: LoginCreds = { user_name: "", password: "" };

  const dispatch = useAppDispatch();

  const FormContent = ({ formikInstance }: { formikInstance: FormikProps<LoginCreds> }
  ) => {

    const { values, setValues, touched, errors, submitForm } = formikInstance
    return (
      <div className="flex flex-col items-center justify-center p-4 pt-0 gap-3 h-[400px] bg-[#444]">
        <div className="text-2xl mb-5 text-white">Welcome to Chat App</div>
        <Box className="flex flex-col gap-3"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "30ch" },
            color: "white",
          }}
          noValidate
          autoComplete="off"
        >
          <div className="flex flex-col gap-1 items-center justify-center">

            <TextField
              onChange={(event) => {
                const { value, name } = event.target
                setValues({ ...values, [name]: value })
              }}

              placeholder="user name"
              sx={{ color: "white", backgroundColor: "lightgray", borderRadius: "8px" }}
              color="warning"
              name="user_name" // Add name attribute to match formik field
              variant="outlined"
            />

            <div className="text-[red] text-xs">
              <ErrorMessage name="user_name" />
            </div>

          </div>


          <div className="flex flex-col gap-1 items-center justify-center">
            <TextField
              onChange={(event) => {
                const { value, name } = event.target
                setValues({ ...values, [name]: value })
              }}
              type="password" placeholder="password"
              sx={{ color: "white", backgroundColor: "lightgray", borderRadius: "8px" }}
              color="warning"
              name="password" // Add name attribute to match formik field
              variant="outlined"
            />

            <div className="text-[red] text-xs">
              <ErrorMessage name="password" />
            </div>
          </div>
        </Box>

        <Stack spacing={2} direction="row">
          <Button
            type="submit" // Use type="submit" for the login button
            variant="contained"
          >
            Create
          </Button>
        </Stack>

      </div>
    );
  };

  return (
    <div className="     ">
      <Formik validationSchema={validationSchema}
        initialValues={initialCreds}
        onSubmit={async (values: LoginCreds, formikHelpers: FormikHelpers<LoginCreds>) => {
          await dispatch(postCreateUserAsync(values));
          setModalOpen(false)
        }}
      >
        {(formikInstance) => (
          <Form>
            <FormContent formikInstance={formikInstance} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewContactModalContent;
