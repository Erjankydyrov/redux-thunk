import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="py-7">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Redux Thunk
          </h2>
          <div className="flex justify-center items-center mb-5">
            <TodoForm />
          </div>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Home;
