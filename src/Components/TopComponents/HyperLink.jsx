import { useEffect, useRef, useState } from "react";

// Importing images from src
import HyperLinkImage from "/src/assets/Buttons_PNG/HyperLinkJPG.png";
import plus_sign from "/src/assets/Buttons_PNG/plus_sign_png.png";
import leftArrow from "/src/assets/Buttons_PNG/left_arrow.png";
import chrome_sign from "/src/assets/Buttons_PNG/chrome_sign.png";
import delete_sign from "/src/assets/Buttons_PNG/delete_icon.png";

export default function HyperLink() {
  //All Use States
  const [showDiv, setShowDiv] = useState(false);
  const [showAddLinkDiv, setShowAddLinkDiv] = useState(false);
  const [totalLinks, setTotalLinks] = useState(
    JSON.parse(localStorage.getItem("links")) || []
  );
  const [searchQuery, setSearchQuery] = useState("");

  //All Use Refs
  let linkValue = useRef();
  let linkName = useRef();
  const containerRef = useRef(null);

  //All UseEffect Statement
  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(totalLinks));
  }, [totalLinks]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //All Functions
  function handleShowDiv() {
    if (showDiv || showAddLinkDiv) {
      setShowAddLinkDiv(false);
      setShowDiv(false);
    } else {
      setShowAddLinkDiv(false);
      setShowDiv(true);
    }
  }

  function showAddLink() {
    setShowDiv(false);
    setShowAddLinkDiv(true);
  }

  function showLinks() {
    setShowDiv(true);
    setShowAddLinkDiv(false);
  }

  function handleClickOutside(event) {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowDiv(false);
      setShowAddLinkDiv(false);
    }
  }

  function BtnClicked() {
    let tempLinkValue = linkValue.current.value.trim();
    let tempNameValue = linkName.current.value.trim();

    if (!tempLinkValue || !tempNameValue) {
      return;
    }

    const uniqueKey = Date.now();

    let tempObjLink = {
      id: uniqueKey,
      name: tempNameValue,
      link: tempLinkValue,
    };

    setTotalLinks((preValues) => [...preValues, tempObjLink]);

    linkValue.current.value = "";
    linkName.current.value = "";

    setShowDiv(true);
    setShowAddLinkDiv(false);
  }

  function handleKey(e) {
    if (e.key == "Enter") {
      BtnClicked();
    }
  }

  function BtnDelete(e, id) {
    e.preventDefault();
    setTotalLinks(totalLinks.filter((link) => link.id !== id));
  }

  function handleSearchQuery(e) {
    setSearchQuery(e.target.value);
  }

  const filteredLinks = totalLinks.filter((link) =>
    link.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="relative cursor-pointer" ref={containerRef}>
      <div className="dashboardLink" onClick={handleShowDiv}>
        <img src={HyperLinkImage} alt="Link" className="dashboardIcons" />
        <p className="dashboardText">Links</p>
      </div>
      {showDiv && (
        <div className="absolute mt-1 md:ml-[100%]">
          <div className=" bg-black/50 rounded-lg flex flex-col gap-2 w-60 h-65 p-3 md:w-65 md:h-70 xl:w-80 xl:h-85 xl:p-4">
            <div className="top_link_section flex justify-between items-center">
              <div className="top_link_left">
                <input
                  type="text"
                  placeholder="Click to Search"
                  className="inputBoxBottomLine w-40 p-1 font-bold" //other Css is in CSS
                  onChange={handleSearchQuery}
                  value={searchQuery}
                />
              </div>
              <div className="top_link_right">
                <img
                  src={plus_sign}
                  alt=""
                  className="w-5 h-5  hover:scale-110 my-auto xl:w-6 xl:h-6"
                  onClick={showAddLink}
                />
              </div>
            </div>
            <div className="w-full h-auto flex flex-col gap-1 overflow-y-auto [&::-webkit-scrollbar]:w-1 rounded-2xl [&::-webkit-scrollbar-track]:bg-lightGray [&::-webkit-scrollbar-thumb]:bg-black/50">
              {filteredLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:bg-black/30 text-sm p-1 rounded-lg max-w-full md:p-1.5 xl:p-3 md:text-base lg:text-lg xl:text-xl"
                >
                  <img
                    src={chrome_sign}
                    alt=""
                    className="h-4 w-4 xl:h-6 xl:w-6"
                  />
                  <p className="text-left w-full pl-2 truncate text-lightGray">
                    {link.name}
                  </p>
                  <img
                    src={delete_sign}
                    alt=""
                    className="h-4 w-4 hover:scale-110 xl:h-6 xl:w-6"
                    onClick={(e) => BtnDelete(e, link.id)}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      {showAddLinkDiv && (
        <div className="absolute mt-1 md:ml-[100%]">
          <div className=" bg-black/50 rounded-lg flex flex-col gap-2 w-60 h-65 p-3 md:w-65 xl:w-80 xl:p-4">
            <div className="flex justify-between">
              <img
                src={leftArrow}
                alt=""
                className="w-5 h-5 hover:scale-110 xl:w-8 xl:h-8"
                onClick={showLinks}
              />
              <h3 className="font-medium text-sm text-lightGray md:text-base lg:text-lg xl:text-xl xl:font-bold">
                Creating a link
              </h3>
            </div>
            <form action="#" className="flex flex-col gap-1 lg:gap-2 xl:gap-3">
              <div className="flex flex-col gap-1 md:gap-1.5 xl:gap-2">
                <label
                  htmlFor="link_name"
                  className="cursor-pointer font-bold text-sm text-lightGray md:text-base lg:text-lg xl:text-xl "
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your Link Name"
                  className="inputBoxBottomLine"
                  id="link_name"
                  ref={linkName}
                  onKeyPress={handleKey}
                  required
                />
              </div>
              <div className="flex flex-col gap-1 md:gap-1.5 xl:gap-2">
                <label
                  htmlFor="link_input"
                  className="cursor-pointer font-bold text-sm text-lightGray md:text-base lg:text-lg xl:text-xl"
                >
                  Links
                </label>
                <input
                  type="text"
                  placeholder="Enter your link"
                  className=" inputBoxBottomLine "
                  id="link_input"
                  ref={linkValue}
                  onKeyPress={handleKey}
                  required
                />
              </div>
            </form>
            <button
              className="cursor-pointer transition-all bg-btnBg text-white px-6 py-2 rounded-lg border-black/50 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] lg:mt-2 lg:text-lg xl:mt-3 xl:font-bold xl:text-xl"
              onClick={BtnClicked}
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
