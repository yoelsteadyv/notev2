import React from "react";
import RegisterInput from "../components/RegisterInput";
import LocaleContext from "../contexts/LocaleContext";
import { register } from "../utils/network-data";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const { selectLanguage } = React.useContext(LocaleContext);
  const navigate = useNavigate();
  async function onRegisterHandler(user) {
    const { error, message } = await register(user);
    if (!error) {
      alert("User created successfully");
      navigate("/");
    }
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen register-page">
      <h2>
        {selectLanguage({
          id: "Isi form untuk mendaftar akun.",
          en: "Fill the form to register account.",
        })}
      </h2>
      <RegisterInput register={onRegisterHandler} />
    </section>
  );
}

export default RegisterPage;
