import React from "react";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import ButtonAction from "../components/ButtonAction";
import Loading from "../components/Loading";
import LocaleContext from "../contexts/LocaleContext";
import { getActiveNotes } from "../utils/network-data";
import { useSearchParams } from "react-router-dom";
import { HiPencil } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { selectLanguage } = React.useContext(LocaleContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
      setLoading(false);
    });
  }, []);

  const navigate = useNavigate();
  function onAddButtonHandler() {
    navigate("/notes/new");
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter(({ title }) => {
    return title.toLowerCase().includes(keyword.toLowerCase());
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="homepage">
      <div className="flex justify-between mx-2">
        <p className="content-center text-4xl font-bold text-center">Notes</p>
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      </div>
      <NoteList notes={filteredNotes} />
      <div className="fixed bottom-0 right-0 z-30 flex items-center justify-center w-12 h-12 mb-4 mr-4 bg-black rounded-full">
        <button
          className="action"
          type="button"
          title={selectLanguage({ id: "Tambah", en: "Add" })}
          onClick={onAddButtonHandler}
        >
          <HiPencil className="text-2xl text-orange-600" />
        </button>
      </div>
    </section>
  );
}
export default HomePage;
