import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./config/theme.config";
import "../src/config/styles.css";
import axios from "axios";

import { Provider } from "react-redux";
import { store } from "./Redux/store";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateArticle from "./Pages/CreateArticle";
import UpdateArticle from "./Pages/UpdateArticle";
import Article from "./Pages/Article";
import Articles from "./Pages/Articles";
import Homepage from "./Pages/Homepage";

axios.defaults.baseURL = "https://lavender-cuff.cyclic.app";
axios.defaults.headers.post["Content-Type"] = "application/json";


const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
  {
    path: "/",
    element:<Homepage />,
  },
  {
    path: "/articles",
    element:<Articles />,
  },
  {
    path: "/articles/:id",
    element:<Article />,
  },
  {
    path: "/articles/:id/update",
    element:<UpdateArticle />,
  },
  {
    path: "/create",
    element:<CreateArticle />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <Provider store={store}>
        {/* <BrowserRouter>
    
        </BrowserRouter> */}
          <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
