import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useState } from "react";

export default function ({ submitHandler }) {
  const [inputValue, setInputValue] = useState("");

  function keyPressHandler(e) {
    if (e.key === "Enter") {
      if (inputValue !== "") {
        submitHandler(inputValue);
        setInputValue("");
      } else {
        alert("put something in");
      }
    }
  }

  return (
    <div className="flex flex-row min-w-[200px] gap-4 mx-10 lg:mx-20 md:mx-15 p-3 text-lg bg-black text-white bg-opacity-80 rounded-md items-center mb-3 transition-transform hover:scale-[1.004] duration-700">
      <p
        onClick={() => {
          if (inputValue !== "") {
            submitHandler(inputValue);
            setInputValue("");
          } else {
            alert("put something in");
          }
        }}
        className="text-3xl hover:cursor-pointer hover:text-gray-300 transform transition-transform hover:scale-110 duration-300"
      >
        <MdOutlineAddCircleOutline />
      </p>

      <input
        onKeyPress={keyPressHandler}
        onChange={(e) => {
          const value = e.target.value;
          setInputValue(value);
        }}
        type="text"
        placeholder="Create Todo"
        className="w-full mx-1 bg-transparent outline-none "
        value={inputValue}
      />
    </div>
  );
}
