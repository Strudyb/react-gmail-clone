import React from "react";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { useHistory } from "react-router-dom";
import { selectOpenMail } from "../../features/mailSlice";
import { useSelector } from "react-redux";

import "./Mail.scss";

function Mail() {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail)

  const leftTools = [
    { Icon: ArrowBackIcon, onClick: () => history.push("") },
    { Icon: MoveToInboxIcon },
    { Icon: ErrorIcon },
    { Icon: DeleteIcon },
    { Icon: EmailIcon },
    { Icon: WatchLaterIcon },
    { Icon: CheckCircleIcon },
    { Icon: LabelImportantIcon },
    { Icon: MoreVertIcon },
  ];

  const rightTools = [
    { Icon: UnfoldMoreIcon },
    { Icon: PrintIcon },
    { Icon: ExitToAppIcon },
  ];

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          {leftTools.map(({ Icon, onClick }, index) => (
            <IconButton onClick={onClick} key={index}>
              <Icon />
            </IconButton>
          ))}
        </div>

        <div className="mail__toolsRight">
          {rightTools.map(({ Icon }, index) => (
            <IconButton key={index}>
              <Icon />
            </IconButton>
          ))}
        </div>
      </div>

      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantIcon className="mail__important" />
          <p>{selectedMail?.title}</p>
          <p className="mail__time">
            {selectedMail?.time}
          </p>
        </div>

        <div className="mail__message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
