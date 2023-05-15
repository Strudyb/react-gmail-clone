import React from "react";
import "./Sidebar.scss";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { Button, IconButton } from "@material-ui/core";
import SidebarOption from "./SidebarOption";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch()

  const sidebarOptions = [
    {
      icon: InboxIcon,
      title: "Inbox",
      number: 54,
      selected: true,
    },
    {
      icon: StarIcon,
      title: "Starred",
      number: 54,
      selected: false,
    },
    {
      icon: AccessTimeIcon,
      title: "Snoozed",
      number: 54,
    },
    {
      icon: LabelImportantIcon,
      title: "Important",
      number: 54,
      selected: false,
    },
    {
      icon: NearMeIcon,
      title: "Sent",
      number: 54,
      selected: false,
    },
    {
      icon: NoteIcon,
      title: "Drafts",
      number: 54,
      selected: false,
    },
    {
      icon: ExpandMoreIcon,
      title: "More",
      number: 54,
      selected: false,
    },
  ];

  const sidebarFooterOptions = [
    { Icon: PersonIcon },
    { Icon: DuoIcon },
    { Icon: PhoneIcon },
  ];
  

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon />}
        fontSize="large"
        selected={true}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      {sidebarOptions.map(({ icon, title, number, selected }, index) => (
        <SidebarOption
          Icon={icon}
          title={title}
          number={number}
          selected={selected}
          key={index}
        />
      ))}

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          {sidebarFooterOptions.map(({ Icon }, index) => (
            <IconButton key={index}>
              <Icon />
            </IconButton>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
