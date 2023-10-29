import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useState } from "react";

export default function ({ submitHandler }) {
  const [inputValue, setInputValue] = useState("");

  function keyPressHandler(e) {
    if (e.key === "Enter") {
      submitHandler(inputValue);
      setInputValue("");
    }
  }

  return (
    <div className="flex flex-row gap-4 ml-20 mr-20 p-3 text-lg bg-black text-white bg-opacity-80 rounded-md items-center mb-3">
      <p
        onClick={() => {
          if (inputValue !== "") {
            submitHandler(inputValue);
            setInputValue("");
          } else {
            alert("put something in");
          }
        }}
        className="text-3xl hover:cursor-pointer hover:text-gray-300 ease-in-out transition-colors"
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
