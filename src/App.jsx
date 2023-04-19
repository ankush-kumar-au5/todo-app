import { useRef, useState } from "react";
import TodoBox from "./Components/TodoBox";
let id = 1;

export default function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleSave = () => {
    let { value } = inputRef?.current;
    value = value?.trim();
    if (!value) return;

    setTodos([...todos, { id, value }]);
    inputRef.current.value = "";
    id++;
  };

  const handleDelete = (id) => {
    setTodos((pre) => pre.filter((ele) => ele?.id !== id));
  };

  const handleUpdate = (data) => {
    setTodos((pre) => pre.map((ele) => (ele?.id === data?.id ? data : ele)));
  };

  return (
    <div className="flex items-center flex-col text-white bg-orange-300 min-h-screen">
      <div className="flex flex-col items-center border-b w-full border-white p-2">
        <h1 className="text-3xl font-semibold">Todo List</h1>
        <p className="font-medium ">A simple React Todo List App </p>
      </div>

      <div className="flex items-center w-full justify-center p-5 gap-4">
        <input
          ref={inputRef}
          className="p-2 border-2 text-sm font-medium text-gray-400 border-white focus:outline-none focus:ring focus:ring-orange-400 rounded-md h-8 w-full max-w-xs"
          placeholder="Add new task..."
        />

        <button
          onClick={handleSave}
          className="rounded-md h-8 border-2 border-white text-center px-4"
        >
          Save
        </button>
      </div>

      {todos?.map((val) => (
        <TodoBox
          key={val?.id}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          data={val}
        />
      ))}
    </div>
  );
}
