import { Box, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";

import { registerMutation } from "../graphql-client/mutations/mutations";
import { useMutation } from "@apollo/client";

const Register = () => {
  const initialValues: NewUserInput = { username: "", email: "", password: "" };
  interface UserMutationResponse {
    code: number;
    success: boolean;
    message: string;
    user: string;
    errors: string;
  }
  interface NewUserInput {
    username: string;
    email: string;
    password: string;
  }
  const [registerUser, { data, error }] = useMutation<
    { register: UserMutationResponse },
    { registerInput: NewUserInput }
  >(registerMutation);

  const onRegisterSubmit = (values: NewUserInput) => {
    registerUser({
      variables: {
        registerInput: values,
      },
    });

  };
  return (
    <Wrapper size="small">
      {error && <p>failed to register</p>}
      {data && data.register.success && (
        <p>register successfully {JSON.stringify(data)}</p>
      )}
      <Formik initialValues={initialValues} onSubmit={onRegisterSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              placeholder="Username"
              label="Username"
              type="text"
            />
            <Box mt={4}>
              <InputField
                name="email"
                placeholder="Email"
                label="Email"
                type="text"
              />
            </Box>
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="Password"
                label="Password"
                type="password"
              />
            </Box>
            <Button
              type="submit"
              colorScheme="teal"
              mt={4}
              isLoading={isSubmitting}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
