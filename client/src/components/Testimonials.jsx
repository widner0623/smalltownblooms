import { FaHeart, FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote: "Absolutely beautiful flowers and amazing service from start to finish.",
    name: "Local Customer",
  },
  {
    quote: "They made our wedding florals feel personal, romantic, and perfect.",
    name: "Wedding Client",
  },
  {
    quote: "Every arrangement feels handcrafted with love, care, and detail.",
    name: "Small Town Blooms Customer",
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-[#fbf4ef] px-6 py-32">
      <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-pink-200/30 blur-3xl" />
      <div className="absolute right-10 bottom-20 h-64 w-64 rounded-full bg-[#dce9cf]/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2 text-sm font-semibold text-[#b85f68] shadow-sm">
            <FaHeart />
            Customer Stories
          </span>

          <h2 className="mt-8 text-5xl font-semibold md:text-6xl">
            Loved by Our
            <span className="block italic text-[#b85f68]">Community</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#6b5148]">
            Kind words from customers who trusted us with their most meaningful
            moments.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.quote}
              className="group rounded-[2.5rem] border border-[#f0ded8] bg-white/80 p-8 shadow-sm backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex gap-1 text-[#b85f68]">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="fill-current" />
                ))}
              </div>

              <p className="mt-8 text-xl leading-relaxed text-[#2d201c]">
                “{item.quote}”
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5e7e2] text-[#b85f68]">
                  <FaHeart />
                </div>

                <div>
                  <p className="font-semibold text-[#2d201c]">{item.name}</p>
                  <p className="text-sm text-[#8a6a5f]">Verified Review</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;