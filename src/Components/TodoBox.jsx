import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";

export default function TodoBox({ handleDelete, handleUpdate, data }) {
  const [edit, setEdit] = useState(false);
  const inputRef = useRef();

  const submitUpdate = () => {
    let { value } = inputRef?.current;
    value = value?.trim();

    if (!value) return;
    if (value === data?.value) {
      setEdit(false);
      return;
    }

    handleUpdate({ ...data, value });
    setEdit(false);
  };

  return (
    <div className="rounded my-2 w-full max-w-sm p-4 drop-shadow-md bg-orange-400 opacity-70 capitalize">
      {edit ? (
        <div className="flex items-center w-full justify-center p-5 gap-4">
          <input
            ref={inputRef}
            defaultValue={data?.value}
            className="p-2 border-2 text-sm font-medium text-gray-400 border-white focus:outline-none focus:ring focus:ring-orange-400 rounded-md h-8 w-full max-w-xs"
          />

          <button
            onClick={submitUpdate}
            className="rounded-md h-8 border-2 border-white text-center px-2"
          >
            Update
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-4 font-semibold text-base">
            {data?.value}
          </div>

          <div className="col-span-1 flex items-center justify-end gap-2">
            <PencilIcon
              className="w-4 h-4 cursor-pointer"
              onClick={() => setEdit(true)}
            />

            <TrashIcon
              className="w-4 h-4 cursor-pointer"
              onClick={() => handleDelete(data?.id)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
