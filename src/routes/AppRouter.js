import { createBrowserRouter } from "react-router-dom";
import Accordion from "../pages/Accordion";
import App from "../pages/App/App";
import QuoteGenerator from "../pages/QuoteGenerator";
import ShoppingList from "../pages/ShoppingList";
import HooksExercises from "../pages/HooksExercises";


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
  },
  {path:"/hooks",
  element:<HooksExercises/>
  }
];

const AppRouter = createBrowserRouter(routesConfig);

export default AppRouter;
