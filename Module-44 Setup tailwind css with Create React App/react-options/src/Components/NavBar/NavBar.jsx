import { useState } from "react";
import Link from "../Link/Link";
import { IoIosMenu } from "react-icons/io";
import { FaRegWindowClose } from "react-icons/fa";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav className="p-6 bg-yellow-200 text-black">
      <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {open === true ? <FaRegWindowClose /> : <IoIosMenu></IoIosMenu>}
      </div>
      <ul
        className={`md:flex duration-1000 absolute md:static
            ${open ? 'top-16' : '-top-60'} 
            bg-yellow-200 px-6 shadow-lg`}
        >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
