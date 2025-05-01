import { useEffect, useRef, useState } from "react";

export default function TodoList() {
  //All States
  const [showDiv, setshowDiv] = useState(false);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  //All UseRef
  const containerRef = useRef(null);
  const inputValue = useRef(null);

  //   All useEffect
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

  //All Functions

  function handleClickOutside(event) {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setshowDiv(false);
    }
  }

  function toogleDivShow() {
    setshowDiv((prev) => (prev === false ? true : false));
  }

  function handlekey(e) {
    if (e.key == "Enter") {
      addValue();
    }
  }

  function addValue() {
    const value = inputValue.current.value;
    if (!value) return;

    const uniqueKey = Date.now();

    let objtsk = {
      id: uniqueKey,
      status: false,
      value: value,
    };

    setTasks((prevvalue) => [...prevvalue, objtsk]);
    inputValue.current.value = "";
  }

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  return (
    <div className="relative" ref={containerRef}>
      <img
        src="https://img.icons8.com/?size=100&id=61532&format=png&color=000000"
        alt=""
        className="w-10 h-10"
        onClick={toogleDivShow}
      />
      {showDiv && (
        <div className="absolute right-0 mb-1 bottom-[100%] md:right-[100%]">
          <div className="bg-black/50 rounded-lg overflow-y-auto">
            <div className="topPart">
              <ul>
                {tasks.map((task) => (
                  <li
                    key={task.id}
                    className={` flex justify-between items-center p-2 text-xl`}
                  >
                    <input
                      type="checkbox"
                      onClick={() => handleStatus(task.id)}
                      className="w-5 h-5"
                    />
                    <span className={`${task.status ? "line-through" : ""}`}>
                      {task.value}
                    </span>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="cursor-pointer transition-all bg-btnBg text-white px-6 py-2 rounded-lg border-black/50 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] "
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bottomPart p-3 flex gap-5">
              <input
                type="text"
                className="text-center text-xl inputBoxBottomLine"
                placeholder="Add task"
                ref={inputValue}
                onKeyUp={handlekey}
              />
              <button
                className="cursor-pointer transition-all bg-btnBg text-white px-6 py-2 rounded-lg border-black/50 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] lg:mt-2 lg:text-lg xl:mt-3 xl:font-bold xl:text-xl"
                onClick={addValue}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
