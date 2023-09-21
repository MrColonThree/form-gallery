import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
const Layout = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section>
        <div className="flex justify-between items-center shadow-lg p-5 rounded-lg ">
          <NavLink to="/" className="text-2xl font-bold">
            FORMS
          </NavLink>
          <div className="text-right">
            <div onClick={() => setOpen(!open)} className= {`hover:bg-sky-300 text-2xl p-2 rounded-lg lg:hidden`}>
              {open === true ? (
                <AiOutlineClose></AiOutlineClose>
              ) : (
                <RiMenu3Fill></RiMenu3Fill>
              )}
            </div>
            <ul
              className={` bg-white border-2 lg:border-none shadow-lg lg:shadow-none rounded-bl-lg p-5 gap-2 lg:gap-10 flex flex-col lg:flex-row text-lg font-semibold duration-1000 absolute lg:static
              ${open ? "top-28 right-8" : "-top-[400px] right-8"}`}
            >
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
            </ul>
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
