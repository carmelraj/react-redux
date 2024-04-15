import logo from "./logo.svg";
import "./App.css";
import LazyHome from "./Pages/Home/Home";
import LazyTodos from "./Pages/Todos/Todos";
import LazyCounter from "./Pages/Counter/Counter";
import LazyProduct from "./Pages/Product/Product";
import LazyLogin from "./Pages/Login/Login";
import LazyLayout from "./Pages/Layout/Layout";
import LazyRegiter from "./Pages/Regiter/Regiter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LazyLogin />} />
          <Route path="/register" element={<LazyRegiter />} />
          <Route
            path="/"
            element={
              <LazyLayout>
                <LazyHome />
              </LazyLayout>
            }
          />
          <Route
            path="/todo"
            element={
              <LazyLayout>
                <LazyTodos />
              </LazyLayout>
            }
          />
          <Route
            path="/counter"
            element={
              <LazyLayout>
                <LazyCounter />
              </LazyLayout>
            }
          />
          <Route
            path="/product"
            element={
              <LazyLayout>
                <LazyProduct />
              </LazyLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
