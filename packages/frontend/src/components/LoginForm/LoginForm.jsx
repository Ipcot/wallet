import { Button, Formcontactlabel, ContactFormField } from "@mui/material";

const LoginForm = () => {
  return (
    <form>
      <input />
      <input />
      <Button
        sx={{
          width: 300,
          color: "green",
          backgroundColor: "white",
        }}
      >
        Login
      </Button>

      <button type="submit">Register</button>
    </form>
  );
};
export default LoginForm;
