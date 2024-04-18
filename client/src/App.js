import { Fragment } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { routes } from "./routes";
import DefaultComponent from "./Components/DefaultComponent/DefaultComponent";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.Page;
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