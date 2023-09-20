import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <section>
        <div className="flex justify-between items-center shadow-lg p-5 rounded-lg">
          <NavLink  to="/" className="text-2xl font-bold">FORMS</NavLink>
          <div className="flex justify-between gap-10 text-lg font-semibold">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-sky-400 p-2 rounded-lg"
                  : "p-2 rounded-lg"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/simple"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-sky-400 p-2 rounded-lg"
                  : "p-2 rounded-lg"
              }
            >
              Simple
            </NavLink>
            <NavLink
              to="/useref"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-sky-400 p-2 rounded-lg"
                  : "p-2 rounded-lg"
              }
            >
              useRef
            </NavLink>
            <NavLink
              to="/reusable"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-sky-400 p-2 rounded-lg"
                  : "p-2 rounded-lg"
              }
            >
              Reusable
            </NavLink>
            <NavLink
              to="/stateful"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-sky-400 p-2 rounded-lg"
                  : "p-2 rounded-lg"
              }
            >
              Stateful
            </NavLink>
            <NavLink
              to="/hook"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-sky-400 p-2 rounded-lg"
                  : "p-2 rounded-lg"
              }
            >
             Hook
            </NavLink>
            <NavLink
              to="/multiple"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-sky-400 p-2 rounded-lg"
                  : "p-2 rounded-lg"
              }
            >
              Multiple
            </NavLink>
          </div>
        </div>
      </section>
      <section className="my-20">
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default Layout;
