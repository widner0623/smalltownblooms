import { Link } from "react-router-dom";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { GiBigDiamondRing, GiRose, GiFlowerPot } from "react-icons/gi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Weddings = () => {
  return (
    <main className="min-h-screen bg-[#fff8f3] text-[#2d201c]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1974&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-[#fff8f3]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-[#fff8f3]/30 to-[#fff8f3]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#efd8d2] bg-white/70 px-6 py-3 backdrop-blur-md">
            <GiBigDiamondRing className="text-[#b85f68]" />
            <span className="text-sm font-semibold tracking-wide text-[#7a5a50]">
              Wedding Florals & Event Design
            </span>
          </div>

          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
            Romantic Florals for
            <span className="block italic text-[#b85f68]">
              Unforgettable Weddings
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[#5f4a42]">
            From bridal bouquets to full venue floral design, we create elegant,
            personal arrangements that bring your wedding vision to life.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="group flex items-center gap-3 rounded-full bg-[#d8787d] px-9 py-5 text-base font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Book Consultation
              <FaArrowRight className="transition group-hover:translate-x-1" />
            </Link>

            <Link
              to="/events"
              className="rounded-full border border-[#2d201c] bg-white/80 px-9 py-5 text-base font-semibold text-[#2d201c] backdrop-blur-md transition hover:bg-[#2d201c] hover:text-white"
            >
              View Event Florals
            </Link>
          </div>
        </div>
      </section>

      {/* Wedding Service Cards */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-5xl font-semibold md:text-6xl">
              Designed Around
              <span className="block italic text-[#b85f68]">Your Love Story</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#6b5148]">
              Every wedding is different. We help shape florals that match your
              colors, venue, season, and personal style.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Bridal Bouquets",
                icon: <GiRose />,
                text: "Elegant bouquets designed to complement your dress, colors, and wedding style.",
              },
              {
                title: "Ceremony Florals",
                icon: <FaHeart />,
                text: "Aisle florals, arches, altar pieces, and romantic ceremony details.",
              },
              {
                title: "Reception Design",
                icon: <GiFlowerPot />,
                text: "Centerpieces, table florals, sweetheart table designs, and venue accents.",
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

      {/* Wedding Packages */}
      <section className="bg-[#fff8f3] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-5xl font-semibold md:text-6xl">
              Wedding Floral
              <span className="block italic text-[#b85f68]">
                Collections
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#6b5148]">
              Elegant floral packages thoughtfully designed for intimate ceremonies,
              romantic celebrations, and full wedding experiences.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Essential Florals",
                price: "Starting at $450",
                description:
                  "Perfect for intimate weddings and smaller ceremonies needing elegant floral touches.",
                features: [
                  "Bridal Bouquet",
                  "Boutonniere",
                  "Ceremony Florals",
                  "Personalized Color Palette",
                ],
              },
              {
                title: "Signature Wedding",
                price: "Starting at $1,200",
                description:
                  "A romantic full-service floral package designed for a beautifully styled wedding day.",
                features: [
                  "Bridal & Bridesmaid Bouquets",
                  "Reception Centerpieces",
                  "Ceremony Installations",
                  "Delivery & Setup",
                ],
              },
              {
                title: "Full Floral Design",
                price: "Starting at $2,500",
                description:
                  "Luxury floral styling with large-scale installations and fully customized event florals.",
                features: [
                  "Luxury Floral Installations",
                  "Custom Venue Styling",
                  "Reception Floral Design",
                  "Full Wedding Coordination",
                ],
              },
            ].map((item) => (
              <article
                key={item.title}
                className="group rounded-[2.5rem] border border-[#f0ded8] bg-white p-10 shadow-sm transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#f4ddd8] text-3xl text-[#b85f68] transition group-hover:bg-[#e8b7b1] group-hover:text-white">
                  <GiRose />
                </div>

                <h3 className="text-3xl font-semibold">{item.title}</h3>

                <p className="mt-4 text-2xl font-semibold text-[#b85f68]">{item.price}</p>

                <p className="mt-6 leading-relaxed text-[#6b5148]">{item.description}</p>

                <ul className="mt-8 space-y-4">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-[#2d201c]">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#d8787d]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#d8787d] px-7 py-4 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
                >
                  Request Consultation
                  <FaArrowRight />
                </Link>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-[#8a6a5f]">
            Every wedding is unique. Final pricing may vary based on floral
            selections, venue size, installations, seasonality, and customization.
          </p>
        </div>
      </section>

      {/* Wedding Process */}
      <section className="bg-[#fbf4ef] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-5xl font-semibold md:text-6xl">
              A Simple,
              <span className="block italic text-[#b85f68]">Beautiful Process</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#6b5148]">
              From the first conversation to wedding day delivery, we keep the floral
              experience personal, organized, and stress-free.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Consultation",
                text: "We learn your vision, colors, venue, style, budget, and floral priorities.",
              },
              {
                step: "02",
                title: "Design Plan",
                text: "We create a custom floral direction with bouquet, ceremony, and reception details.",
              },
              {
                step: "03",
                title: "Wedding Day",
                text: "Your florals are prepared with care and styled beautifully for your celebration.",
              },
            ].map((item) => (
              <article
                key={item.step}
                className="rounded-[2rem] border border-[#f0ded8] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <p className="text-5xl font-semibold text-[#e8b7b1]">{item.step}</p>
                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-[#6b5148]">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#d8787d] px-9 py-5 text-base font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Start Your Wedding Florals
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Weddings;