import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
import { FiSlash } from "react-icons/fi";

function NoteList({ notes }) {
  const { selectLanguage } = React.useContext(LocaleContext);
  return (
    <div>
      {notes?.length > 0 ? (
        <section className="notes-list min-h-[31rem] flex flex-wrap gap-4 p-6 flex-grow border-t-[1px] border-black place-content-center">
          {notes.map(({ id, title, body, createdAt }) => (
            <NoteItem
              key={id}
              id={id}
              title={title}
              body={body}
              createdAt={createdAt}
            />
          ))}
        </section>
      ) : (
        <section className="notes-list-empty flex justify-center min-h-[31rem]">
          <div className="flex flex-col items-center justify-center">
            <FiSlash className="text-5xl " />
            <p className="text-center">
              {selectLanguage({
                id: "Tidak ada catatan yang tersedia.",
                en: "No notes available.",
              })}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
