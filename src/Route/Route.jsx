import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import SimpleForm from "../Pages/SimpleForm/SimpleForm";
import StatefulForm from "../Pages/StatefulForm/StatefulForm";
import ReusableForm from "../Pages/ReusableForm/ReusableForm";
import RefForm from "../Pages/refForm/refForm";
import Home from "../Pages/Home/Home";
import MultipleForms from "../Pages/MultipleForms/MultipleForms";
import HookForm from "../Pages/HookForm/HookForm";
const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/simple",
        element: <SimpleForm></SimpleForm>,
      },
      {
        path: "/stateful",
        element: <StatefulForm></StatefulForm>,
      },
      {
        path: "/useref",
        element: <RefForm></RefForm>,
      },
      {
        path: "/reusable",
        element: <ReusableForm></ReusableForm>,
      },
      {
        path: "/hook",
        element: <HookForm></HookForm>,
      },
      {
        path: "/multiple",
        element: <MultipleForms></MultipleForms>,
      },
    ],
  },
]);

export default Route;
