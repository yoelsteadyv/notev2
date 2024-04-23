import React from "react";
import PropTypes from "prop-types";
import ThemeContext from "../contexts/ThemeContext";
import LocaleContext from "../contexts/LocaleContext";
import { Link } from "react-router-dom";
import { VscArchive } from "react-icons/vsc";
import { CgNotes } from "react-icons/cg";
import { PiMoonDuotone, PiSunDuotone } from "react-icons/pi";
import { HiTranslate } from "react-icons/hi";
import { TbLogout2 } from "react-icons/tb";

function Navigation({ logout, name }) {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { toggleLocale, selectLanguage } = React.useContext(LocaleContext);
  return (
    <>
      <div className="flex justify-between w-full h-12 text-white bg-black ">
        <div className="flex items-center ml-6">
          <CgNotes className="mr-2" />
          <Link to="/">MemoInk</Link>
        </div>
        <div className="flex items-center gap-2 mr-6">
          {logout !== undefined && (
            <div className="flex items-center">
              <VscArchive className="mr-2" />
              <Link
                to="/archives"
                title={selectLanguage({ id: "Arsip", en: "Archived" })}
              >
                {selectLanguage({ id: "Arsip", en: "Archived" })}
              </Link>
            </div>
          )}
          <p className="items-center">|</p>
          <button
            className="flex items-center toggle-locale"
            onClick={toggleLocale}
            title={selectLanguage({ id: "Terjemahan", en: "Translate" })}
          >
            <HiTranslate className="text-xl font-black text-orange-600" />
          </button>
          <p>|</p>
          <button
            className="flex items-center toggle-theme"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <PiMoonDuotone className="text-xl font-black text-orange-600" />
            ) : (
              <PiSunDuotone className="text-xl font-black text-orange-600" />
            )}
          </button>
          <p>|</p>
          {logout !== undefined && (
            <>
              <p className="items-center">Hai, {name} !! </p>
              <p>|</p>
              <button
                className="flex items-center button-logout"
                onClick={logout}
                title={selectLanguage({ id: "Keluar", en: "LogOut" })}
              >
                <TbLogout2 className="ml-1 text-xl font-black text-red-700" />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func,
  name: PropTypes.string,
};

export default Navigation;
