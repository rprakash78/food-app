import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/detail",
        element: <Menu />
      }
    ],
    errorElement: <Error />,
  },
]);

function AppWithRouter() {
  return <RouterProvider router={appRouter}>{appRouter}</RouterProvider>;
}

export default AppWithRouter;
