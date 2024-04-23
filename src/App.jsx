import Layout from "./layout/Layout/Layout";
import RouterView from "./router";
import { useDispatch } from "react-redux";
import { getTodos } from "./store/slices/todoSlice";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/todos")
      .then((responce) => {
        dispatch(getTodos(responce.data));
      })
      .catch((error) => console.error(error));
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
