import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import LocaleContext from "../contexts/LocaleContext";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function LoginInput({ login }) {
  const { selectLanguage } = React.useContext(LocaleContext);
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    login({
      email,
      password,
    });
  };

  return (
    <div className="flex justify-center input-login">
      <form onSubmit={onSubmitHandler}>
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="grid mb-4 h-28 place-items-center"
          >
            <Typography variant="h3" className="text-center" color="white">
              MEMOINK <br></br>
              {selectLanguage({
                id: "MASUK",
                en: "LOGIN",
              })}
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              htmlFor="email"
              label={selectLanguage({
                id: "Surel",
                en: "Email",
              })}
              size="lg"
              type="email"
              id="email"
              value={email}
              onChange={onEmailChange}
              autoComplete="new-email"
            />

            <Input
              htmlFor="password"
              label={selectLanguage({
                id: "Kata Sandi",
                en: "Password",
              })}
              size="lg"
              type="password"
              id="password"
              value={password}
              onChange={onPasswordChange}
              autoComplete="new-password"
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" fullWidth>
              {selectLanguage({
                id: "MASUK",
                en: "LOGIN",
              })}
            </Button>
            <Typography variant="small" className="flex justify-center mt-6">
              {selectLanguage({
                id: "Belum punya akun?",
                en: "Don&apos;t have an account?",
              })}
              <Typography
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                <Link to="/register">
                  {selectLanguage({
                    id: "Daftar di sini",
                    en: "Register here",
                  })}
                </Link>
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
