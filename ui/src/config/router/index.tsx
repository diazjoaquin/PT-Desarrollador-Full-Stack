import { createBrowserRouter } from "react-router-dom";
import Root from "../../pages/Root";
import { Home } from "../../pages/Home";
import { SignIn } from "../../pages/SignIn";
import { SignUp } from "../../pages/SignUp";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: '/sign-in',
    element: <SignIn />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  }
]);

export default router;
