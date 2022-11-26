import {
  FaHome,
  FaUserFriends,
  FaTruckMoving,
  FaMapMarkedAlt,
  FaRoute,
} from "react-icons/fa";

export const links = [
  {
    links: [
      {
        ref: "dashboard",
        name: "Dashboard",
        icon: <FaHome />,
      },
    ],
  },
  {
    title: "quản lý thông tin",
    links: [
      {
        ref: "collectors",
        name: "Tài xế",
        icon: <FaUserFriends />,
      },
      {
        ref: "janitors",
        name: "Lao công",
        icon: <FaUserFriends />,
      },
      {
        ref: "vehicles",
        name: "Phương tiện",
        icon: <FaTruckMoving />,
      },
      {
        ref: "mcps",
        name: "Điểm thu gom",
        icon: <FaMapMarkedAlt />,
      },
    ],
  },
  {
    title: "quản lý vận hành",
    links: [
      {
        ref: "vehicles-task",
        name: "Phương tiện",
        icon: <FaTruckMoving />,
      },
      {
        ref: "mcps-task",
        name: "Điểm thu gom",
        icon: <FaMapMarkedAlt />,
      },
      {
        ref: "routes-task",
        name: "Tuyến đường",
        icon: <FaRoute />,
      },
    ],
  },
];
