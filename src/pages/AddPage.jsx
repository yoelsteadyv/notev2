import React from "react";
import NoteInput from "../components/NoteInput";
import ButtonAction from "../components/ButtonAction";
import LocaleContext from "../contexts/LocaleContext";
import { addNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";

function AddPage() {
  const { selectLanguage } = React.useContext(LocaleContext);
  const navigate = useNavigate();
  const [newNote, setNewNote] = React.useState({
    title: "",
    body: "",
  });

  function onTitleChangeEventHandler(event) {
    setNewNote((prevNewNote) => {
      return {
        ...prevNewNote,
        title: event.target.value,
      };
    });
  }

  function onBodyInputEventHandler(event) {
    //   const { value } = event.target; // Mendapatkan nilai dari event
    //   setNewNote((prevNewNote) => ({
    //     ...prevNewNote,
    //     body: value, // Menyimpan nilai dalam state newNote
    //   }));
    // }

    setNewNote((prevNewNote) => {
      return {
        ...prevNewNote,
        body: event.target.innerHTML,
      };
    });
  }

  async function onSaveNoteHandler() {
    await addNote(newNote);
    navigate("/");
  }

  return (
    <section className="add-new-page">
      <NoteInput
        state={newNote}
        onTitleChange={onTitleChangeEventHandler}
        onBodyInput={onBodyInputEventHandler}
      />
      <div className="flex justify-end add-new-page__action">
        <ButtonAction
          style="bottom-0 right-0 z-30 flex items-center justify-center w-12 h-12 mb-4 mr-4 bg-black rounded-full"
          title={selectLanguage({ id: "Simpan", en: "Save" })}
          onClick={onSaveNoteHandler}
          icon={<MdOutlineDone className="text-3xl text-white" />}
        />
      </div>
    </section>
  );
}

export default AddPage;
