import React from "react";
import PropTypes from "prop-types";

function ButtonAction({ title, onClick, icon, style }) {
  return (
    <button className={style} type="button" title={title} onClick={onClick}>
      {icon}
    </button>
  );
}

ButtonAction.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object.isRequired,
  style: PropTypes.string.isRequired,
};

export default ButtonAction;
