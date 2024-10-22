import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname; // Get the current path

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Le Ciel
        </span>
        Blog
      </Link>

      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden sm:inline-flex"
        />
      </form>

      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-4 md:order-2">
        <Button className="w-12 h-10 sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToPink">Sign In</Button>
        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link
            to="/"
            className={`block p-2 border rounded-lg transition-all duration-300 ${
              path === "/"
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white scale-110"
                : "text-gray-700 border border-transparent hover:border-purple-500 hover:text-gray-900"
            }`}
          >
            Home
          </Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link
            to="/about"
            className={`block p-2 border rounded-lg transition-all duration-300 ${
              path === "/about"
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white scale-110"
                : "text-gray-700 border border-transparent hover:border-purple-500 hover:text-gray-900"
            }`}
          >
            About
          </Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link
            to="/projects"
            className={`block p-2 border rounded-lg transition-all duration-300 ${
              path === "/projects"
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white scale-110"
                : "text-gray-700 border border-transparent hover:border-purple-500 hover:text-gray-900"
            }`}
          >
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
