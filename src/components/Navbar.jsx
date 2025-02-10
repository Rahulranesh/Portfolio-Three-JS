import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 w-full flex items-center py-5 transition-all duration-300 ${
        scrolled ? "bg-primary shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl justify-between items-center">
        <a
          href="/"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold flex cursor-pointer">
            Ranesh&nbsp;
            <span className="hidden sm:block">| Flutter & AWS</span>
          </p>
        </a>
        {/* Desktop Navigation */}
        <ul className="hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              onClick={() => {
                setActive(nav.title);
                const element = document.getElementById(nav.id);
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className={`text-[18px] font-medium cursor-pointer ${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex justify-end items-center">
          <button
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
            />
          </button>
          {toggle && (
            <div className="absolute right-0 top-16 p-6 black-gradient min-w-[140px] z-10 rounded-xl transition-all duration-300">
              <ul className="flex flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    onClick={() => {
                      setActive(nav.title);
                      setToggle(false);
                      const element = document.getElementById(nav.id);
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`cursor-pointer text-[16px] font-medium ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
