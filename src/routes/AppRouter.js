import { createBrowserRouter } from "react-router-dom";
import Accordion from "../pages/Accordion";
import App from "../pages/App/App";

export const routesConfig = [
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/accordion",
    element: <Accordion />,
  },
];

const AppRouter = createBrowserRouter(routesConfig);

export default AppRouter;
