import React from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
import LoginInput from "../components/LoginInput";
import { Link } from "react-router-dom";
import { login } from "../utils/network-data";

function LoginPage({ loginSuccess }) {
  const { selectLanguage } = React.useContext(LocaleContext);

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen login-page">
      <LoginInput login={onLogin} />
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
