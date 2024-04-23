import React from "react";
import ButtonAction from "../components/ButtonAction";
import NoteDetail from "../components/NoteDetail";
import Loading from "../components/Loading";
import LocaleContext from "../contexts/LocaleContext";
import { useNavigate, useParams } from "react-router-dom";
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils/network-data";
import { MdUnarchive } from "react-icons/md";
import { IoMdArchive } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";

function DetailPage() {
  const { selectLanguage } = React.useContext(LocaleContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
      setLoading(false);
    });
  }, []);

  async function deleteNotenHandler() {
    await deleteNote(id);
    note.archived ? navigate("/archives") : navigate("/");
  }

  async function archiveNotenHandler() {
    await archiveNote(id);
    navigate("/");
  }

  async function unarchiveNoteHandler() {
    await unarchiveNote(id);
    navigate("/archives");
  }

  if (loading) {
    return <Loading />;
  }

  if (note === null) {
    return (
      <p>
        {selectLanguage({
          id: `Note dengan ID "${id}" tidak tersedia.`,
          en: `Note with ID "${id}" not available.`,
        })}
      </p>
    );
  }

  return (
    <section>
      <NoteDetail {...note} />
      <div className="flex justify-end detail-page__action flex-coll">
        <ButtonAction
          style="action bottom-0 right-0 mb-4 mr-4 bg-black w-12 h-12 rounded-full flex items-center justify-center z-30"
          title={
            note.archived
              ? selectLanguage({ id: "Aktifkan", en: "Activate" })
              : selectLanguage({ id: "Arsipkan", en: "Archive" })
          }
          onClick={note.archived ? unarchiveNoteHandler : archiveNotenHandler}
          icon={
            note.archived ? (
              <MdUnarchive className="text-3xl text-white" />
            ) : (
              <IoMdArchive className="text-3xl text-white" />
            )
          }
        />
        <ButtonAction
          style="action bottom-0 right-0 mb-4 mr-4 bg-black w-12 h-12 rounded-full flex items-center justify-center z-30"
          title={selectLanguage({ id: "Hapus", en: "Delete" })}
          onClick={deleteNotenHandler}
          icon={<FaRegTrashAlt className="text-2xl font-black text-white" />}
        />
      </div>
    </section>
  );
}

export default DetailPage;
