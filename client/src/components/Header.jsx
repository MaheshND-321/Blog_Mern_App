import { Button, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg text-white">
          Mahi's
        </span>
        Blogs
      </Link>
      <form action="">
        <TextInput
          type="text"
          placeholder="search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray">
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/signin">
          <Button gradientDuoTone="purpleToBlue">Sign IN</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={Link} to="/">
          Home
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={Link} to="/about">
          About
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={Link} to="/projects">
          Sign In
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
