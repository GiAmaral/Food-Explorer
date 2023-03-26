import { Form, FormTitle } from "./styles";

function SignFormTitle({ children }) {
  return <FormTitle>{children}</FormTitle>;
}

function SignForm({ children, ...props }) {
  return <Form {...props}>{children}</Form>;
}

SignForm.Title = SignFormTitle;

export default SignForm;
