import { useSelector } from 'react-redux';
import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import { useEffect, useState } from 'react';

const Home = () => {
  const { status, error } = useSelector((state) => state.todos);
  const [loadingTimeout, setLoadingTimeout] = useState(null);

  useEffect(() => {
    if (status === "loading") {
      const timeoutId = setTimeout(() => {
        setLoadingTimeout(null);
      }, 1000);
      setLoadingTimeout(timeoutId);
    }
  }, [status]);

  const isLoading = status === "loading" || loadingTimeout !== null;

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
          {error && <h2>An error occurred: {error}</h2>}
          {isLoading ? <h2>Loading...</h2> : <TodoList />}
        </div>
      </div>
    </div>
  );
};

export default Home;
