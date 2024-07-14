import React from "react";
import { GoHome } from "react-icons/go";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const sidebarItems = [
    {
      id: 1,
      icons: <GoHome className="" />,
      title: "Home",
    },
    {
      id: 2,
      icons: <SiYoutubeshorts className="" />,
      title: "Shorts",
    },
    {
      id: 3,
      icons: <MdOutlineSubscriptions className="" />,
      title: "Subscription",
    },
    {
      id: 3,
      icons: <MdOutlineSubscriptions className="" />,
      title: "Subscription",
    },
    {
      id: 3,
      icons: <MdOutlineSubscriptions className="" />,
      title: "Subscription",
    },
    {
      id: 3,
      icons: <MdOutlineSubscriptions className="" />,
      title: "Subscription",
    },
    {
      id: 3,
      icons: <MdOutlineSubscriptions className="" />,
      title: "Subscription",
    },
    {
      id: 3,
      icons: <MdOutlineSubscriptions className="" />,
      title: "Subscription",
    },
    {
      id: 3,
      icons: <MdOutlineSubscriptions className="" />,
      title: "Subscription",
    },
    {
      id: 3,
      icons: <MdOutlineSubscriptions className="" />,
      title: "Subscription",
    },
    {
      id: 3,
      icons: <MdOutlineSubscriptions className="" />,
      title: "Subscription",
    },
    {
      id: 3,
      icons: <MdOutlineSubscriptions className="" />,
      title: "Subscription",
    },
    {
      id: 3,
      icons: <MdOutlineSubscriptions className="" />,
      title: "Subscription",
    },
    {
      id: 3,
      icons: <MdOutlineSubscriptions className="" />,
      title: "Subscription",
    },
    {
      id: 3,
      icons: <MdOutlineSubscriptions className="" />,
      title: "Subscription",
    },
    {
      id: 3,
      icons: <MdOutlineSubscriptions className="" />,
      title: "Subscription",
    },
    {
      id: 3,
      icons: <MdOutlineSubscriptions className="" />,
      title: "Subscription",
    },
    {
      id: 3,
      icons: <MdOutlineSubscriptions className="" />,
      title: "Subscription",
    },
    {
      id: 3,
      icons: <MdOutlineSubscriptions className="" />,
      title: "Subscription",
    },
  ];

  const selector = useSelector((store) => store.app.open);

  return (
    <>
      <div className="h-[calc(100vh-4rem)]  sidebar overflow-x-hidden overflow-y-scroll mt-2 text-white bg-[#0c0c0c] ">
        {sidebarItems.map((items) => {
          return (
            <>
              <div className={`flex ${selector ? "w-56" : ""} justify-center`}>
                <div
                  key={items.id}
                  className={`flex items-center cursor-pointer py-2  mt-2 duration-200 hover:bg-[#1a1a1a] ${
                    selector ? "w-48" : ""
                  }  gap-6 px-8 rounded-lg font-normal`}
                >
                  <div className="text-lg">{items.icons}</div>
                  <h1 className={`text-md ${selector ? "" : "hidden"}`}>
                    {items.title}
                  </h1>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
