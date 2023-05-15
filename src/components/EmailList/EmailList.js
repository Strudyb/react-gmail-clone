import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import React from "react";
import "./EmailList.scss";
import Section from "../Section/Section";
import EmailRow from "../EmailRow/EmailRow";

function EmailList() {
  const leftSettingsIcons = [ArrowDropDownIcon, RedoIcon, MoreVertIcon];
  const rightSettingsIcons = [
    ChevronLeftIcon,
    ChevronRightIcon,
    KeyboardHideIcon,
    SettingsIcon,
  ];

  const mailSections = [
    {
      icon: InboxIcon,
      title: "Primary",
      color: "red",
      selected: true,
    },
    {
      icon: PeopleIcon,
      title: "Social",
      color: "#1A73E8",
      selected: false,
    },
    {
      icon: LocalOfferIcon,
      title: "Promotions",
      color: "green",
      selected: false,
    },
  ];

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />

          {leftSettingsIcons.map((Icon, index) => (
            <IconButton key={index}>
              <Icon />
            </IconButton>
          ))}
        </div>

        <div className="emailList__settingsRight">
          {rightSettingsIcons.map((Icon, index) => (
            <IconButton key={index}>
              <Icon />
            </IconButton>
          ))}
        </div>
      </div>

      <div className="emailList__sections">
        {mailSections.map(({ icon, title, color, selected }, index) => (
          <Section
            Icon={icon}
            title={title}
            color={color}
            selected={selected}
            key={index}
          />
        ))}
      </div>

      <div className="emailList__list">
        <EmailRow
          title="gmail"
          subject="hey follower"
          description="this is a test"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
