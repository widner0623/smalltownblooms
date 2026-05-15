import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaShoppingBag, FaTimes } from "react-icons/fa";
import { GiFlowerPot, GiRose } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Arrangements", path: "/shop" },
    { name: "Weddings", path: "/weddings" },
    { name: "Events", path: "/events" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full bg-[#fff8f3]/90 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4ddd8] text-[#b85f68] shadow-sm">
              <GiFlowerPot className="text-2xl" />
            </div>

            <span className="text-2xl font-semibold tracking-tight text-[#2d201c] sm:text-3xl">
              Small Town Blooms
            </span>
          </Link>

          <nav className="hidden items-center gap-10 text-base font-semibold tracking-wide text-[#2d201c] xl:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                className="transition hover:text-[#b85f68]"
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 xl:flex">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ead3cc] bg-white/70 text-[#2d201c] transition hover:bg-[#f4ddd8]">
              <FaShoppingBag />
            </button>

            <Link
              to="/shop"
              className="rounded-full bg-[#e8b7b1] px-8 py-4 text-base font-semibold text-[#2d201c] shadow-sm transition hover:scale-105 hover:bg-[#d99d96]"
            >
              Order Now
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4ddd8] text-[#2d201c] xl:hidden"
          >
            <FaBars />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] overflow-y-auto bg-[#fff8f3]/95 px-6 py-8 backdrop-blur-2xl transition-all duration-500 xl:hidden ${
          menuOpen
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="absolute left-10 top-24 h-40 w-40 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute bottom-20 right-8 h-52 w-52 rounded-full bg-rose-300/30 blur-3xl" />

        <div
          className={`relative z-10 flex items-center justify-between transition-all delay-100 duration-500 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f4ddd8] text-[#b85f68]">
              <GiFlowerPot className="text-2xl" />
            </div>

            <span className="text-2xl font-semibold text-[#2d201c]">
              Small Town Blooms
            </span>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#2d201c] shadow-sm"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="relative z-10 mt-16 flex flex-col items-center gap-5 pb-10">
          {links.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              style={{
                transitionDelay: menuOpen ? `${150 + index * 80}ms` : "0ms",
              }}
              className={`flex w-full max-w-sm items-center justify-center gap-3 border border-[#efd8d2] bg-white/80 px-8 py-5 text-xl font-semibold text-[#2d201c] shadow-lg backdrop-blur-md transition-all duration-500 hover:scale-105 hover:bg-[#f4ddd8] ${
                index % 2 === 1
                  ? "rounded-[999px_999px_40px_999px]"
                  : "rounded-[999px_999px_999px_40px]"
              } ${
                menuOpen
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-6 scale-95 opacity-0"
              }`}
            >
              <GiRose className="text-[#b85f68]" />
              {link.name}
            </Link>
          ))}

          <Link
            to="/shop"
            onClick={() => setMenuOpen(false)}
            style={{
              transitionDelay: menuOpen ? `${150 + links.length * 80}ms` : "0ms",
            }}
            className={`mt-6 flex w-full max-w-sm items-center justify-center gap-3 rounded-full bg-[#d8787d] px-8 py-5 text-xl font-semibold text-white shadow-xl transition-all duration-500 ${
              menuOpen
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-6 scale-95 opacity-0"
            }`}
          >
            <FaShoppingBag />
            Order Flowers
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;