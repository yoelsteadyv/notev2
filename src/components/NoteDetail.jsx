import React from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import LocaleContext from "../contexts/LocaleContext";
import { showFormattedDate } from "./../utils/index";

function NoteDetail({ title, body, createdAt }) {
  const { selectLanguage } = React.useContext(LocaleContext);
  return (
    <>
      <section className="min-h-[25rem] w-auto">
        <h3 className="mx-24 mt-24 text-5xl">{title}</h3>
        <p className="mx-24 mt-3 text-gray-600">
          {selectLanguage({
            id: showFormattedDate(createdAt, "id-ID"),
            en: showFormattedDate(createdAt, "en-US"),
          })}
        </p>
        <div className="mx-24 mt-6 mb-24 text-xl">{parser(body)}</div>
      </section>
    </>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteDetail;
