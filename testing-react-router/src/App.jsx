import {
  createBrowserRouter,
  RouterProvider,
  useParams,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";
import "./App.css";

function Root() {
  return (
    <div>
      <NavLink
        to="mission"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Messages
      </NavLink>
      <Link to={"contact"}>Contact</Link>
      <Outlet />
    </div>
  );
}

function Mission() {
  return <div>Mission</div>;
}

function ErrorPage() {
  return <div>Error</div>;
}

function Contact() {
  const params = useParams();

  console.log("contact params", params);
  return <div>Contact</div>;
}

// Or use plain objects
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/mission",
        element: <Mission />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
