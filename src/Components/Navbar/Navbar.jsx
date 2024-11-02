import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa6";
import logo from "../../assets/Logo/logo.png";
const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Men Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronic",
    link: "/#",
  },
];

const DropdownLink = [
  {
    id: 1,
    name: "Trending Product",
    link: "/#",
  },
  {
    id: 2,
    name: "Best selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rate",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="#"
              className="font-thin text-2xl sm:text-3xl flex gap-2 items-center font-serif"
            >
              <img src={logo} alt="logo" className="w-14 uppercase" />
              Rina
            </a>
          </div>
          {/* search bar*/}
          <div className="flex justify-between items-center gap-4">
            <div>
              <div className="group relative hidden sm:block">
                <input
                  type="text"
                  placeholder="search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1  focus:border-primary dark:border-gray-500 dark:bg-gray-800 "
                />
                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
            </div>
            {/* order button */}
            <button
              onClick={() => alert("odderring not")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group "
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-md cursor-pointer" />
            </button>
            {/* darkmode switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className="flex justify-center items-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li
              key={data.id}
              className="inline-block px-4 hover:text-primary duration-200"
            >
              <a href={data.link}>{data.name}</a>
            </li>
          ))}
          {/* simple dropdown and links */}
          <li className=" group relative cursor-pointer ">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[11111] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black">
              <ul>
                {DropdownLink.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
