import React, { useState } from "react";
import Todo from "./Todo";
import Input from "./Input";
import { RiTodoFill } from "react-icons/ri";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

function App() {
  const [todos, setTodos] = useState([]);
  const currentDate = formatDate(new Date()); // Get the current date and format it
  const [completedCollapsed, setCompletedCollapsed] = useState(true);

  const clickHandle = (id) => {
    setTodos((prev) => {
      console.log(...prev);
      let updatedTodos = [...prev];
      updatedTodos[id] = { ...prev[id], isChecked: !prev[id].isChecked };
      return updatedTodos;
    });
  };

  function submitHandler(inputValue) {
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: prev.length + 1,
          text: inputValue,
          isChecked: false,
        },
      ];
    });
  }

  function onClickDeleteHandler(id) {
    console.log("delete with: ", id);
    setTodos((prev) => {
      return prev.filter((todo, index) => {
        console.log(todo, index, id);
        return index !== id;
      });
    });
  }

  function formatDate(date) {
    const options = { weekday: "long", day: "2-digit", month: "long" };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div>
      <div className="px-[2vh] lg:px-[20vh] md:px-[15vh] sm:px-[10vh] min-w-lg w-full h-screen bg-image">
        <div className=" flex flex-col min-w-[270px] sm:items-start items-center px-10 lg:px-20 pt-20 pb-3">
          <h1 className="flex flex-row font-mono font-bold tracking-wider text-5xl items-center gap-1">
            TODO <RiTodoFill size={30} />
          </h1>
          <p className="font-sans text-md sm:text-xl sm:pl-2">{currentDate}</p>
        </div>
        <Input submitHandler={submitHandler} />
        {todos.map((todo, index) => {
          if (!todo.isChecked) {
            return (
              <Todo
                key={index}
                id={index}
                text={todo.text}
                isChecked={todo.isChecked}
                clickHandle={clickHandle}
                onClickDeleteHandler={onClickDeleteHandler}
              />
            );
          }
        })}
        <div
          onClick={() => {
            console.log("fuck you");
            setCompletedCollapsed((prev) => {
              return !prev;
            });
          }}
          className={` min-w-[200px] flex flex-row bg-black mx-10 lg:mx-20 md:mx-15 mt-7 rounded-md bg-opacity-80 my-3 items-center justify-start hover:cursor-pointer transform transition-transform hover:scale-[1.005] duration-600${
            !completedCollapsed && "transition-opacity-50"
          }`}
        >
          <p className="text-3xl text-white pl-2 sm:pl-3">
            {completedCollapsed === true ? (
              <div>
                <MdOutlineKeyboardArrowRight />
              </div>
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </p>
          <p className="text-white text-center text-xl p-2 font-mono sm:pl-4 ">
            Completed
          </p>
        </div>
        {todos.map((todo, index) => {
          if (todo.isChecked && !completedCollapsed) {
            return (
              <Todo
                key={index}
                id={index}
                text={todo.text}
                isChecked={todo.isChecked}
                clickHandle={clickHandle}
                onClickDeleteHandler={onClickDeleteHandler}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
