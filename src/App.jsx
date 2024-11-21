import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ? imports for the pages
import Home from "./pages/Home";

// ? imports for UI
import AppLayout from "./UI/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
