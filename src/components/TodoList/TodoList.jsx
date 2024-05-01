import { useDispatch, useSelector } from "react-redux";
import { completedTodo, deleteTodo } from "../../store/slices/todoSlice";
import { RxCross2 } from "react-icons/rx";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(deleteTodo(id))
  };

  const handleCompleted = (id) => {
    dispatch(completedTodo(id))
  };

  return (
    <div>
      <div className="flex justify-start items-center gap-5 flex-wrap">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="p-2 w-full sm:w-auto flex-grow border shadow-md rounded-md self-stretch"
          >
            <div className="flex justify-between items-center mb-2">
              <input
                type="checkbox"
                defaultChecked={todo.completed}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                onChange={() => handleCompleted(todo.id)}
              />
              <button
                className="text-red-700"
                onClick={() => handleRemove(todo.id)}
              >
                <RxCross2 className="w-5 h-5" />
              </button>
            </div>
            <p className="text-lg">{todo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
