import Layout from "./layout/Layout/Layout";
import RouterView from "./router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTodos } from "./store/slices/todoSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <RouterView />
      </Layout>
    </>
  );
}

export default App;
