import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mars from "./components/planets/Mars.tsx";
import Moon from "./components/planets/moon.tsx";
import Jupiter from "./components/planets/Jupiter.tsx";
import Saturn from "./components/planets/Saturn.tsx";
import Neptun from "./components/planets/Neptun.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/moon",
    element: <Moon />,
  },
  {
    path: "/mars",
    element: <Mars />,
  },
  {
    path: "/jupiter",
    element: <Jupiter />,
  },
  {
    path: "/saturn",
    element: <Saturn />
  },
  {
    path: "/neptun",
    element: <Neptun />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
