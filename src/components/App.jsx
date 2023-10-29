import React, { useState } from "react";
import Todo from "./Todo";
import Input from "./Input";
import { RiTodoFill } from "react-icons/ri";

function App() {
  const [todos, setTodos] = useState([]);
  // const [date, setDate] = useState(new Date());
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

  return (
    <div>
      <div className="px-[25vh]">
        <div className=" flex flex-col items-start pt-10 pl-20 mb-4">
          <h1 className="flex flex-row font-mono font-bold tracking-wider text-5xl items-center gap-1">
            TODO <RiTodoFill size={30} />
          </h1>
          <p className="font-sans text-xl pl-[5px]">Sunday, 20 October</p>
        </div>
        <Input submitHandler={submitHandler} />
        {todos.map((todo, index) => {
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
        })}
      </div>
    </div>
  );
}

export default App;
