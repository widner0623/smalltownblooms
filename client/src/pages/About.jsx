import { Link } from "react-router-dom";
import { FaArrowRight, FaHeart, FaLeaf, FaStar } from "react-icons/fa";
import { GiFlowerPot, GiRose } from "react-icons/gi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <main className="min-h-screen bg-[#fff8f3] text-[#2d201c]">
      <Navbar />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32">
        <div className="absolute left-10 top-32 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#efd8d2] bg-white/70 px-6 py-3 backdrop-blur-md">
              <GiRose className="text-[#b85f68]" />
              <span className="text-sm font-semibold tracking-wide text-[#7a5a50]">
                Rooted in Beaver Dam, Kentucky
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
              Flowers Made with
              <span className="block italic text-[#b85f68]">
                Heart & Intention
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#6b5148]">
              Small Town Blooms is built around the beauty of meaningful
              moments — the birthdays, weddings, goodbyes, celebrations, and
              everyday gestures that deserve something personal.
            </p>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#d8787d] px-9 py-5 text-base font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Get in Touch
              <FaArrowRight />
            </Link>
          </div>

          <div className="relative h-[520px] overflow-hidden rounded-[2.5rem] shadow-2xl md:h-[620px]">
            <img
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1974&auto=format&fit=crop"
              alt="Fresh floral arrangement"
              className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
          </div>
        </div>
      </section>

      <section className="bg-[#fbf4ef] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-5xl font-semibold md:text-6xl">
              Our Floral
              <span className="block italic text-[#b85f68]">Philosophy</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#6b5148]">
              We believe flowers should feel personal, thoughtful, and
              beautifully matched to the moment they are created for.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Personal Design",
                icon: <FaHeart />,
                text: "Every arrangement is created with the person, occasion, and emotion in mind.",
              },
              {
                title: "Fresh Beauty",
                icon: <FaLeaf />,
                text: "We focus on fresh textures, soft color palettes, and seasonal floral details.",
              },
              {
                title: "Small-Town Care",
                icon: <FaStar />,
                text: "We bring warmth, patience, and attention to detail into every customer experience.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-[#f0ded8] bg-white/80 p-8 shadow-sm backdrop-blur-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#f4ddd8] text-3xl text-[#b85f68]">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-[#6b5148]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="relative h-[520px] overflow-hidden rounded-[2.5rem] shadow-2xl md:h-[620px]">
            <img
              src="https://images.unsplash.com/photo-1487070183336-b863922373d4?q=80&w=1974&auto=format&fit=crop"
              alt="Florist preparing flowers"
              className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2 text-sm font-semibold text-[#b85f68] shadow-sm">
              <GiFlowerPot />
              Local Floral Care
            </span>

            <h2 className="mt-8 text-5xl font-semibold leading-tight md:text-6xl">
              Designed for the
              <span className="block italic text-[#b85f68]">
                Moments That Matter
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#6b5148]">
              Whether someone is celebrating love, honoring a memory, sending
              encouragement, or simply brightening a room, we treat every order
              with care and intention.
            </p>

            <ul className="mt-8 space-y-4 text-[#6b5148]">
              {[
                "Handcrafted arrangements for every occasion",
                "Wedding and event floral design",
                "Thoughtful sympathy and remembrance florals",
                "Seasonal bouquets and designer’s choice arrangements",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#d8787d]" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to="/shop"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#d8787d] px-9 py-5 text-base font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Explore Florals
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;