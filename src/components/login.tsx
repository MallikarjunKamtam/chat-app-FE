import React from 'react'
import { Form, Formik, FormikHelpers, FormikProps, ErrorMessage } from 'formik'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { LoginCreds } from '../models/login.model'
import { useAppDispatch } from '../app/hooks'
import { postLoginAsync } from '../slices/users.slice'
import * as yup from 'yup'

const LoginForm = () => {
  const validationSchema = yup.object({
    user_name: yup.string().nullable().required('User name is required'),
    password: yup.string().nullable().required('Password is required'),
  })

  const initialCreds: LoginCreds = { user_name: '', password: '' }

  const dispatch = useAppDispatch()

  const FormContent = ({
    formikInstance,
  }: {
    formikInstance: FormikProps<LoginCreds>
  }) => {
    const { values, setValues, touched, errors, submitForm } = formikInstance
    return (
      <div className="flex flex-col items-center justify-center p-4 pt-0 gap-3 h-screen">
        <div className="text-2xl mb-5">Welcome to Chat App</div>
        <Box
          className="flex flex-col gap-3"
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '30ch' },
            color: 'white',
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
              sx={{
                color: 'white',
                backgroundColor: 'lightgray',
                borderRadius: '8px',
              }}
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
              onKeyDown={async (e) => {
                if (e.key === 'Enter') {
                  await dispatch(postLoginAsync(values))
                }
              }}
              onChange={async (event) => {
                const { value, name } = event.target
                setValues({ ...values, [name]: value })
              }}
              type="password"
              placeholder="password"
              sx={{
                color: 'white',
                backgroundColor: 'lightgray',
                borderRadius: '8px',
              }}
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
            Login
          </Button>
        </Stack>

        <div className="flex items-center justify-center gap-10 m-5 text-[#999] font-semibold">
          <span className="hover:text-white cursor-pointer">
            Forgot password ?
          </span>
          <span className="hover:text-white cursor-pointer">
            Create new account
          </span>
        </div>
      </div>
    )
  }

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialCreds}
      onSubmit={async (
        values: LoginCreds,
        formikHelpers: FormikHelpers<LoginCreds>,
      ) => {
        await dispatch(postLoginAsync(values))
      }}
    >
      {(formikInstance) => (
        <Form>
          <FormContent formikInstance={formikInstance} />
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
