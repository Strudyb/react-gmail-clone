import React from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";

import "./EmailRow.scss";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../../features/mailSlice";

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );

    history.push("/mail")
  };

  return (
    <div className="emailRow" onClick={openMail}>
      <div className="emailRow__options">
        <Checkbox />

        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>

      <h3 className="emailRow__title">{title}</h3>

      <div className="emailRow__message">
        <h4>
          {subject} <span className="emailRow__description">{description}</span>
        </h4>
      </div>

      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
