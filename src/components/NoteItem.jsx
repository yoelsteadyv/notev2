import React from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import LocaleContext from "../contexts/LocaleContext";
import { showFormattedDate } from "./../utils/index";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const limitWords = (text, limit) => {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return text;
};

function NoteItem({ id, title, body, createdAt }) {
  // Batasi jumlah kata dalam teks catatan
  const limitedBody = limitWords(body, 20); // Menggunakan batas 20 kata
  const { selectLanguage } = React.useContext(LocaleContext);
  return (
    <>
      <Card className=" w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography className="mb-2 text-xs">
            {selectLanguage({
              id: showFormattedDate(createdAt, "id-ID"),
              en: showFormattedDate(createdAt, "en-US"),
            })}
          </Typography>
          <Typography>{limitedBody}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link
            to={`/notes/${id}`}
            className="text-light-blue-700 hover:text-light-blue-400"
          >
            Read Detail
          </Link>
        </CardFooter>
      </Card>
      {/* <article className="note-item">
        <h3 className="note-item__title">
          <Link to={`/notes/${id}`}>{title}</Link>
        </h3>
        <p className="note-item__createdAt">
          {selectLanguage({
            id: showFormattedDate(createdAt, "id-ID"),
            en: showFormattedDate(createdAt, "en-US"),
          })}
        </p>
        <p className="note-item__body">{parser(body)}</p>
      </article> */}
    </>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
