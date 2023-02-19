import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App/App";

export const routesConfig = [
  {
    path: "/",
    element: <App />,
  },
];

const AppRouter = createBrowserRouter(routesConfig);

export default AppRouter;
