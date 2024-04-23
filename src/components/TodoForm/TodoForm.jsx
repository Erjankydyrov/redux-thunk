import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slices/todoSlice";
import axios from "axios";

const TodoForm = () => {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleAdd = () => {
    if (message.length > 3) {
      const data = {
        title: message,
        completed: false,
      };
      axios
        .post("http://localhost:3001/todos", data)
        .then((responce) => {
          dispatch(addTodo(responce.data));
          setMessage("");
        })
        .catch((error) => console.error(error));
    } else {
      return;
    }
  };

  return (
    <div className="flex justify-center items-center w-full sm:w-auto flex-col sm:flex-row gap-3 py-3 px-0 sm:px-3">
      <input
        type="text"
        value={message}
        className="w-full sm:w-auto shadow-md text-lg outline-none focus:border-[#9877CE] focus:shadow-[0_0_0_0.25rem_#9877ceaa] transition-all duration-200 rounded-md p-2"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="w-full sm:w-auto text-lg capitalize text-[#303846] rounded-md bg-[#9877CE] hover:bg-[#a375ee] py-2 px-6 font-semibold transition-all duration-200"
      >
        add
      </button>
    </div>
  );
};

export default TodoForm;
