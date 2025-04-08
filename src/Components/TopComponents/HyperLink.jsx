import { useEffect, useRef, useState } from "react";

// Importing images from src
import HyperLinkImage from "/src/assets/Buttons_PNG/HyperLinkJPG.png";
import plus_sign from "/src/assets/Buttons_PNG/plus_sign_png.png";
import leftArrow from "/src/assets/Buttons_PNG/left_arrow.png";
import chrome_sign from "/src/assets/Buttons_PNG/chrome_sign.png";
import delete_sign from "/src/assets/Buttons_PNG/delete_icon.png";

/**
 * HyperLink Component
 * 
 * This component provides a user interface for managing and interacting with a list of hyperlinks.
 * Users can add, search, and delete links, which are stored in the browser's localStorage.
 * 
 * @component
 * @returns {JSX.Element} The rendered HyperLink component.
 * 
 * @description
 * - Displays a list of links with options to add, search, and delete.
 * - Uses `useState` for managing component state and `useRef` for accessing input values.
 * - Persists links in `localStorage` and updates it whenever the list changes.
 * - Handles click events outside the component to close dropdowns.
 * 
 * @state
 * @property {boolean} showDiv - Controls the visibility of the links dropdown.
 * @property {boolean} showAddLinkDiv - Controls the visibility of the add link form.
 * @property {Array<Object>} totalLinks - Stores the list of links with their name, URL, and unique ID.
 * @property {string} searchQuery - Stores the current search query for filtering links.
 * 
 * @refs
 * @property {React.RefObject<HTMLInputElement>} linkValue - Reference to the input field for the link URL.
 * @property {React.RefObject<HTMLInputElement>} linkName - Reference to the input field for the link name.
 * @property {React.RefObject<HTMLElement>} containerRef - Reference to the container element for detecting outside clicks.
 * 
 * @effects
 * - Updates `localStorage` whenever `totalLinks` changes.
 * - Adds and removes event listeners for detecting clicks outside the component.
 * 
 * @functions
 * @function handleShowDiv - Toggles the visibility of the links dropdown.
 * @function showAddLink - Displays the add link form and hides the links dropdown.
 * @function showLinks - Displays the links dropdown and hides the add link form.
 * @function handleClickOutside - Closes dropdowns when clicking outside the component.
 * @function BtnClicked - Adds a new link to the list and resets the input fields.
 * @function handleKey - Handles the "Enter" key press to trigger adding a link.
 * @function BtnDelete - Deletes a link from the list by its unique ID.
 * @function handleSearchQuery - Updates the search query for filtering links.
 * 
 * @variables
 * @constant {Array<Object>} filteredLinks - The list of links filtered by the search query.
 * 
 * @dependencies
 * - React hooks: `useState`, `useRef`, `useEffect`
 * - LocalStorage for persisting links
 * 
 * @example
 * <HyperLink />
 */
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
