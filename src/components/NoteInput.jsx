import React, { useState } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
import { Input } from "@material-tailwind/react";
import { MdOutlineDone } from "react-icons/md";

function NoteInput({ state, onTitleChange, onBodyInput }) {
  const { selectLanguage } = React.useContext(LocaleContext);
  return (
    <>
      <section className="min-h-[35rem] flex flex-col">
        <div className="px-16 pt-24 pb-10 add-new-page__input md:px-24">
          <Input
            label={selectLanguage({ id: "Judul", en: "Title" })}
            type="text"
            placeholder={selectLanguage({
              id: "Catatan rahasia",
              en: "Secret note",
            })}
            variant="standard"
            value={state.title}
            onChange={onTitleChange}
            spellCheck="false"
          />
          <div className="pt-24 pb-10">
            <p>{selectLanguage({ id: "Isi", en: "Value" })}</p>
            <div
              className="h-40 border-b border-black add-new-page__input__body "
              contentEditable="true"
              type="text"
              label="Value"
              data-placeholder={selectLanguage({
                id: "Sebenarnya, saya adalah ....",
                en: "Actually, i am ...",
              })}
              onInput={onBodyInput}
              spellCheck="false"
              suppressContentEditableWarning={true}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}

NoteInput.propTypes = {
  state: PropTypes.object.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onBodyInput: PropTypes.func.isRequired,
};

export default NoteInput;
