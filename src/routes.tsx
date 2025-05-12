import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./app/App";
import RequireAuth from "./app/services/RequireAuth";
import Login from "./app/pages/Login/Login";
import Dashboard from "./app/pages/Dasbhoard/Dashboard";
import Form from "./app/pages/Form/Form";
import User from "./app/pages/perfil/user";

const router = createBrowserRouter([
  { path: "login", 
    element: <Login/>
  },
  { path: "/", 
    element: <RequireAuth><App /></RequireAuth>, 
    children: [
      {path: "dashboard", element: <Dashboard/> },
      {path: "form", element: <Form/>},
      {path: "perfil", element: <User/>}
    ] 
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}