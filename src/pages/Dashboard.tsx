import React, { useState } from "react";
import Footer from "../components/loreal";
import "boxicons";

type LinkName =
  | "Dashboard"
  | "Users"
  | "Messages"
  | "Bookmark"
  | "Files"
  | "Stats";

const iconMap: Record<LinkName, string> = {
  Dashboard: "grid-alt",
  Users: "user",
  Messages: "message-square-detail",
  Bookmark: "bookmark",
  Files: "folder",
  Stats: "bar-chart-alt-2",
};

const Header: React.FC = () => {
  const [isNavbarVisible, setNavbarVisible] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("Dashboard");

  const toggleNavbar = () => {
    setNavbarVisible(!isNavbarVisible);
  };

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
  };

  return (
    <div className={` bg-light ${isNavbarVisible ? "pl-36" : ""}`}>
      <header className="fixed top-0 left-0 w-full flex items-center justify-between h-12 bg-white p-4 ">
        <div
          className="text-blue-600 text-2xl cursor-pointer pl-32"
          onClick={toggleNavbar}
        >
          <i className={`bx ${isNavbarVisible ? "bx-x" : "bx-menu"}`}></i>
        </div>
        <div className="w-9 h-9 flex justify-center rounded-full overflow-hidden">
          <img src="https://i.imgur.com/hczKIze.jpg" alt="Profile" />
        </div>
      </header>
      <div
        className={`fixed top-0 left-0 h-full bg-blue-600 p-4 transition-transform ${
          isNavbarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="h-full flex flex-col justify-between">
          <div>
            <a href="#" className="flex items-center mb-8">
              <i className="bx bx-layer text-white text-lg"></i>
              <span className="text-white font-bold ml-2">NavBar 1</span>
            </a>
            <div className="flex flex-col">
              {Object.keys(iconMap).map((link) => (
                <a
                  key={link}
                  href="#"
                  className={`flex items-center text-blue-300 mb-4 nav_link ${
                    activeLink === link ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick(link as LinkName)}
                >
                  <i className={`bx bx-${iconMap[link as LinkName]}`}></i>
                  <span className="ml-2">{link}</span>
                </a>
              ))}
            </div>
          </div>
          <a
            href="#"
            className="flex items-center text-blue-300 nav_link"
            onClick={() => handleLinkClick("SignOut" as LinkName)}
          >
            <i className="bx bx-log-out text-2xl"></i>
            <span className="ml-2">SignOut</span>
          </a>
        </nav>
      </div>
      <div className="mt-16 h-screen bg-light p-4">
        <h4 className="text-xl">Main Components</h4>
      </div>
      <div className="bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Header;
