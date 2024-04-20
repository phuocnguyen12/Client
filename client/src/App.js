import { Fragment } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { routes } from "./routes";
import DefaultComponent from "./Components/DefaultComponent/DefaultComponent";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function App() {
  // const fetchApi = async () =>{
  //   const res = await axios.get(`http://locahost:3000/product/getAll`);
  //   return res.data;
  // };

  // const query = useQuery({ queryKey : ["todos"], queryFn : fetchApi });

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
