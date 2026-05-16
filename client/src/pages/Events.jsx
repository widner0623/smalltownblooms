import { Link } from "react-router-dom";
import { FaArrowRight, FaHeart, FaStar } from "react-icons/fa";
import { GiBalloons, GiFlowerPot, GiRose } from "react-icons/gi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Events = () => {
  return (
    <main className="min-h-screen bg-[#fff8f3] text-[#2d201c]">
      <Navbar />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1974&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-[#fff8f3]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-[#fff8f3]/30 to-[#fff8f3]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#efd8d2] bg-white/70 px-6 py-3 backdrop-blur-md">
            <GiFlowerPot className="text-[#b85f68]" />
            <span className="text-sm font-semibold tracking-wide text-[#7a5a50]">
              Custom Florals for Every Occasion
            </span>
          </div>

          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
            Event Florals That
            <span className="block italic text-[#b85f68]">
              Set the Mood
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[#5f4a42]">
            From intimate gatherings to meaningful celebrations, we design
            floral pieces that add beauty, warmth, and emotion to every event.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="group flex items-center gap-3 rounded-full bg-[#d8787d] px-9 py-5 text-base font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Plan Your Event
              <FaArrowRight className="transition group-hover:translate-x-1" />
            </Link>

            <Link
              to="/shop"
              className="rounded-full border border-[#2d201c] bg-white/80 px-9 py-5 text-base font-semibold text-[#2d201c] backdrop-blur-md transition hover:bg-[#2d201c] hover:text-white"
            >
              View Arrangements
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-5xl font-semibold md:text-6xl">
              Florals for
              <span className="block italic text-[#b85f68]">
                Life’s Gatherings
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#6b5148]">
              Whether it’s joyful, formal, heartfelt, or intimate, our floral
              designs help bring the moment together beautifully.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Celebrations",
                icon: <GiBalloons />,
                text: "Birthdays, showers, anniversaries, and meaningful milestones.",
              },
              {
                title: "Sympathy & Memorials",
                icon: <FaHeart />,
                text: "Thoughtful florals created with care, softness, and respect.",
              },
              {
                title: "Corporate & Community",
                icon: <FaStar />,
                text: "Elegant floral accents for business events and local gatherings.",
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

      <section className="bg-[#fbf4ef] px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2 text-sm font-semibold text-[#b85f68] shadow-sm">
              <GiRose />
              Custom Event Design
            </span>

            <h2 className="mt-8 text-5xl font-semibold leading-tight md:text-6xl">
              Designed to Match
              <span className="block italic text-[#b85f68]">
                Your Atmosphere
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#6b5148]">
              We help choose floral colors, textures, arrangements, and styling
              details that match your event’s tone, space, and purpose.
            </p>

            <ul className="mt-8 space-y-4 text-[#6b5148]">
              {[
                "Centerpieces and table arrangements",
                "Entryway and statement florals",
                "Gift table, cake table, and accent pieces",
                "Custom color palettes and seasonal blooms",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#d8787d]" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#d8787d] px-9 py-5 text-base font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Request Event Florals
              <FaArrowRight />
            </Link>
          </div>

          <div className="relative h-[520px] overflow-hidden rounded-[2.5rem] shadow-2xl md:h-[620px]">
            <img
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1974&auto=format&fit=crop"
              alt="Elegant event floral arrangement"
              className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Events;