import { Router } from "@remix-run/router";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./routes/Home";
import About from "./routes/About";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import Portfolio from "./routes/Portfolio";
import Contact from "./routes/Contact";
import Blog from "./routes/Blog";

const router: Router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <About />,
        path: "about",
      },
      {
        element: <Portfolio />,
        path: "portfolio",
      },
      {
        element: <Contact />,
        path: "contact",
      },
      {
        element: <Blog />,
        path: "blog",
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
