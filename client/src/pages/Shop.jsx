import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag, FaClock } from "react-icons/fa";
import { GiRose } from "react-icons/gi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Shop = () => {
  const launchDate = new Date("July 4, 2026 00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = launchDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      ),
      minutes: Math.floor(
        (difference % (1000 * 60 * 60)) /
          (1000 * 60)
      ),
      seconds: Math.floor(
        (difference % (1000 * 60)) / 1000
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#fff8f3] text-[#2d201c]">
      <Navbar />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32">
        
        {/* Ambient Glow */}
        <div className="absolute left-10 top-32 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          
          {/* Icon */}
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#f4ddd8] text-[#b85f68] shadow-sm">
            <FaShoppingBag className="text-3xl" />
          </div>

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#efd8d2] bg-white/70 px-6 py-3 backdrop-blur-md">
            <GiRose className="text-[#b85f68]" />

            <span className="text-sm font-semibold tracking-wide text-[#7a5a50]">
              Online Ordering Launches July 4th, 2026
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
            Our Floral Shop Is
            <span className="block italic text-[#b85f68]">
              Blooming Soon
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#6b5148]">
            We’re preparing a beautiful online shopping experience for
            handcrafted arrangements, seasonal bouquets, weddings,
            events, and luxury floral gifting.
          </p>

          {/* Countdown */}
          <div className="mt-14 grid gap-4 sm:grid-cols-4">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.75rem] border border-[#f0ded8] bg-white/80 p-6 shadow-sm backdrop-blur-md"
              >
                <p className="text-5xl font-semibold text-[#b85f68]">
                  {String(item.value).padStart(2, "0")}
                </p>

                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8a6a5f]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="my-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            
            <Link
              to="/contact"
              className="rounded-full bg-[#d8787d] px-9 py-5 text-base font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Contact Us to Order
            </Link>

            <Link
              to="/weddings"
              className="flex items-center gap-3 rounded-full border border-[#2d201c] bg-white/80 px-9 py-5 text-base font-semibold text-[#2d201c] backdrop-blur-md transition hover:bg-[#2d201c] hover:text-white"
            >
              <FaClock />
              Wedding Consultations
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Shop;