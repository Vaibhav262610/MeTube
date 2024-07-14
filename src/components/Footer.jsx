import React from "react";
import { GoHome } from "react-icons/go";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { useSelector } from "react-redux";

const Footer = () => {
  const selector = useSelector((store) => store.app.open);

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
      icons: <MdOutlineVideoLibrary className="" />,
      title: "Library",
    },
  ];
  return (
    <>
      <div className="bg-slate-900 text-white w-full flex sm:hidden justify-center fixed bottom-0   ">
        {sidebarItems.map((items) => {
          return (
            <>
              <div className={`flex w-full  py-3 justify-center`}>
                <div
                  key={items.id}
                  className={`flex items-center cursor-pointer py-2  mt-2 duration-200 hover:bg-[#1a1a1a] gap-6 px-8 rounded-lg font-normal`}
                >
                  <div className="text-2xl">{items.icons}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Footer;
