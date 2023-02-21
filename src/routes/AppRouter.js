import { createBrowserRouter } from "react-router-dom";
import Accordion from "../pages/Accordion";
import App from "../pages/App/App";
import QuoteGenerator from "../pages/QuoteGenerator";
import ShoppingList from "../pages/ShoppingList";

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

  },
  {
    path:"/shopping-list",
    element:<ShoppingList/>
  }
];

const AppRouter = createBrowserRouter(routesConfig);

export default AppRouter;
