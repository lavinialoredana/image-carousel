import { createBrowserRouter } from "react-router-dom";
import Accordion from "../pages/Accordion";
import App from "../pages/App/App";
import QuoteGenerator from "../pages/QuoteGenerator";

export const routesConfig = [
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/accordion",
    element: <Accordion />,
  },

  {
    path:"/quote-generator",
    element: <QuoteGenerator />

  }
];

const AppRouter = createBrowserRouter(routesConfig);

export default AppRouter;
