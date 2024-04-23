import React from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
import { Input } from "@material-tailwind/react";

function SearchBar({ keyword, keywordChange }) {
  const { selectLanguage } = React.useContext(LocaleContext);
  return (
    <section className="py-4">
      <div className="w-[13rem]">
        <Input
          label={selectLanguage({
            id: "Cari",
            en: "Search",
          })}
          size="sm"
          type="text"
          placeholder={selectLanguage({
            id: "Cari berdasarkan judul ...",
            en: "Search by title...",
          })}
          value={keyword}
          onChange={(event) => keywordChange(event.target.value)}
        />
      </div>
    </section>
  );
}

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
