"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IconContext } from "react-icons";
import { useMediaQuery } from "react-responsive";
import "react-tippy/dist/tippy.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo/Fake-New-Logo2.webp";

interface MenuItem {
  name: string;
  title: string;
  icon: any;
  url: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar = ({ menuItems }: SidebarProps): JSX.Element => {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (isMobile) setIsCollapsed(true);
  }, [isMobile]);

  const toggleCollapse = () => {
    if (!isMobile) setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-zinc-950 border-slate-700 border-r h-screen sticky top-0 ease-out delay-150 duration-300 ${
        !isCollapsed ? "w-60" : "w-auto"
      }`}
    >
      <div className="p-4">
        <div className="flex justify-start items-center my-4">
          <button
            className="focus:outline-none w-full flex justify-center"
            onClick={toggleCollapse}
          >
            {isCollapsed ? (
              <Image
                src={logo}
                width={32}
                height={32}
                alt="Picture of the author"
              />
            ) : (
              <p className="w-full text-center font-bold text-2xl text-white">
                FAKEMONEY
              </p>
            )}
          </button>
        </div>
        <ul>
          {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className={`${!isCollapsed ? "my-5" : "my-6"} ${
                pathname.split("/").includes(menuItem.name)
                  ? "text-amber-400"
                  : "text-white"
              }`}
            >
              <Link
                href={menuItem.url}
                className="flex items-center p-2 rounded-lg hover:text-amber-400"
              >
                <IconContext.Provider value={{ size: "2rem" }}>
                  {menuItem.icon}
                </IconContext.Provider>
                {!isCollapsed && <span className="ml-2">{menuItem.title}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
