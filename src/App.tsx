import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import { ABOUT, BLOG, CAREERS, COURSES, HOMEPAGE, LOGIN } from "./paths/Paths";
import { store } from "./store/store";
import { Provider } from "react-redux";

import Login from "./pages/login/Login";
import BlogPage from "./pages/BlogPage/BlogPage";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <div className="wrapper">
            <Routes>
              <Route path={HOMEPAGE} element={<HomePage></HomePage>}></Route>
              <Route path={"/"} element={<HomePage></HomePage>}></Route>
              <Route path={COURSES}></Route>

              <Route path={CAREERS}></Route>
              <Route path={ABOUT}></Route>
              <Route path={LOGIN} element={<Login></Login>}></Route>
              <Route path={BLOG} element={<BlogPage></BlogPage>}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
