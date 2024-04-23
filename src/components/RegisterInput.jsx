import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import LocaleContext from "../contexts/LocaleContext";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

function RegisterInput({ register }) {
  const { selectLanguage } = React.useContext(LocaleContext);
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return alert("Password and password confirm must be same.");
    }

    register({
      name,
      email,
      password,
    });
  };
  return (
    <div className="flex justify-center input-register">
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
                id: "DAFTAR",
                en: "REGISTER",
              })}
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              htmlFor="name"
              label={selectLanguage({ id: "Nama", en: "Name" })}
              type="text"
              id="name"
              value={name}
              onChange={onNameChange}
            />

            <Input
              htmlFor="email"
              label={selectLanguage({
                id: "Surel",
                en: "Email",
              })}
              type="email"
              id="email"
              value={email}
              onChange={onEmailChange}
              autoComplete="new-email"
            />

            <Input
              htmlFor="password"
              label={selectLanguage({ id: "Kata Sandi", en: "Password" })}
              type="password"
              id="password"
              value={password}
              onChange={onPasswordChange}
              autoComplete="new-password"
            />

            <Input
              htmlFor="confirmPassword"
              label={selectLanguage({
                id: "Konfirmasi Kata Sandi",
                en: "Confirm Password",
              })}
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              autoComplete="new-confirm-password"
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" fullWidth>
              {selectLanguage({
                id: "DAFTAR",
                en: "REGISTER",
              })}
            </Button>

            <Typography variant="small" className="flex justify-center mt-6">
              {selectLanguage({
                id: "Sudah punya akun?",
                en: "Already have an account?",
              })}
              <Typography
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                <Link to="/">
                  {selectLanguage({ id: "Masuk di sini", en: "Login here" })}
                </Link>
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
