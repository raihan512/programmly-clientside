import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Routes } from "./Router/Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

export default App;
