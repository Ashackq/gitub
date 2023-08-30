import React from "react";
import * as FaIcons from "react-icons/fa";

import * as IoIcons from "react-icons/io";
import { BsFillClipboard2DataFill,BsFillCalendarMonthFill } from "react-icons/bs";

export const SidebarData = [
  {
    title: "About",
    path: "/About",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Events",
    path: "/Event",
    icon: <BsFillCalendarMonthFill />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/Teams",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Let's Connect",
    path: "/Con",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Future Plans",
    path: "/Fut",
    icon: <BsFillClipboard2DataFill />,
    cName: "nav-text",
  },
];