import Homepage from "./Containers/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import LogIn from "./Containers/LogIn/LogIn";
import SignIn from "./Containers/SignIn/SignIn";
import Footer from "./Components/Footer/Footer";
import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./Containers/AboutPage/AboutPage";
import PostJob from "./Components/post-job/postJob";
import ViewJob from "./Containers/view-jobs/ViewJob";
import Jobs from "./Containers/view-jobs/components/Jobs";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/sign-up",
    element: <SignIn />,
  },
  { path: "/", element: <Homepage /> },
  { path: "/employer/post-job", element: <PostJob /> },
  {
    path: "/employer/view-job",
    element: <ViewJob />,
    children: [{ path: "/employer/view-job/jobs", element: <Jobs /> }],
  },
]);

export { router };
