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
      <div className="px-[25vh]">
        <div className=" flex flex-col items-start pt-10 pl-20 mb-4">
          <h1 className="flex flex-row font-mono font-bold tracking-wider text-5xl items-center gap-1">
            TODO <RiTodoFill size={30} />
          </h1>
          <p className="font-sans text-xl pl-[5px]">{currentDate}</p>
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
          className={`flex flex-row bg-black mx-20 mt-7 rounded-md bg-opacity-80 my-3 items-center hover:cursor-pointer transform transition-transform hover:scale-[1.005] duration-600${
            !completedCollapsed && "transition-opacity-50"
          }`}
        >
          <p className="text-3xl text-white pl-3">
            {completedCollapsed === true ? (
              <div>
                <MdOutlineKeyboardArrowRight />
              </div>
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </p>
          <p className="text-white text-xl p-2 font-mono pl-4">Completed</p>
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
