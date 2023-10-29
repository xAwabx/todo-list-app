import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Todo({
  text,
  isChecked,
  id,
  clickHandle,
  onClickDeleteHandler,
}) {
  return (
    <div className="flex flex-row justify-between mx-20 p-3 text-lg bg-black text-white bg-opacity-50 rounded-md mb-1 backdrop-blur-sm">
      <div className="flex flex-row gap-4 items-center">
        <p
          className={`text-2xl hover:cursor-pointer hover:text-gray-300 transform transition-transform hover:scale-105 duration-300 ${
            isChecked === true && ""
          }`}
          onClick={() => {
            clickHandle(id);
          }}
        >
          {isChecked === true ? (
            <AiFillCheckCircle />
          ) : (
            <AiOutlineCheckCircle />
          )}
        </p>
        <p
          className={`hover:cursor-default font-mono tracking-tight ${
            isChecked === true &&
            "text-gray-300 line-through transition-width duration-1000 ease-in"
          }`}
        >
          {text.charAt(0).toUpperCase() + text.slice(1)}
        </p>
      </div>
      <p
        onClick={() => {
          onClickDeleteHandler(id);
        }}
        className="flex px-2 items-center text-2xl hover:cursor-pointer hover:text-red-600 ease-in-out transform transition-transform hover:scale-105 duration-300"
      >
        <RiDeleteBin6Line />
      </p>
    </div>
  );
}
