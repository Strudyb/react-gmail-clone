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

import "./Mail.scss";
import { useHistory } from "react-router-dom";

function Mail() {
  const history = useHistory();

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
          <h2>Subject</h2>
          <LabelImportantIcon className="mail__important" />
          <p>Title</p>
          <p className="mail__time">10pm</p>
        </div>

        <div className="mail__message">
          <p>This is a message</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
