import React, { Fragment, useEffect } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { routes } from "./routes";
import DefaultComponent from "./Components/DefaultComponent/DefaultComponent";
import { useDispatch } from "react-redux";
import { getCategories } from "./apis/app";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
