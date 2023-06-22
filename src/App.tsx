import { Router } from "@remix-run/router";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./routes/Home";

const router: Router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "/",
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
