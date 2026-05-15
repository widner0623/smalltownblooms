import { FaArrowRight, FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { GiRose, GiFlowerPot, GiBigDiamondRing } from "react-icons/gi";

const WeddingSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#fff8f3] px-6 py-32">
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-[#dce9cf]/50 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#efd4cf] bg-[#fff1ed] px-5 py-2 text-sm font-semibold text-[#9b5f5f]">
            <GiBigDiamondRing />
            Wedding Specialists
          </span>

          <h2 className="mt-8 text-5xl font-semibold leading-tight md:text-6xl">
            Your Wedding,
            <span className="block italic text-[#b85f68]">
              Beautifully Bloomed
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6b5148]">
            From intimate ceremonies to grand celebrations, we design florals
            that feel romantic, personal, and unforgettable.
          </p>

          <div className="mt-10 space-y-5">
            {[
              {
                title: "Bridal Bouquets",
                icon: <GiRose />,
              },
              {
                title: "Venue Florals",
                icon: <GiFlowerPot />,
              },
              {
                title: "Wedding Parties",
                icon: <FaHeart />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex gap-5 rounded-[1.5rem] border border-[#f0ded8] bg-white/80 p-6 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f5e7e2] text-2xl text-[#b85f68] transition group-hover:bg-[#e8b7b1] group-hover:text-white">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-[#6b5148]">
                    Custom floral details designed around your vision, colors,
                    venue, and style.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="group mt-10 flex items-center gap-3 rounded-full bg-[#d8787d] px-9 py-5 text-base font-semibold text-white shadow-lg transition hover:scale-105">
            Book Consultation
            <FaArrowRight className="transition group-hover:translate-x-1" />
          </button>
        </div>

        <div className="relative">
          <div className="relative h-[520px] md:h-[620px] overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1529634597503-139d3726fed5?q=80&w=1974&auto=format&fit=crop"
              alt="Luxury wedding floral arrangement"
              className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
          </div>

          <div className="absolute -bottom-8 left-8 max-w-sm rounded-[1.75rem] border border-white/70 bg-white/90 p-6 shadow-2xl backdrop-blur-xl">
            <p className="text-[#b85f68]">★★★★★</p>
            <p className="mt-3 text-lg font-semibold">
              “The florals were beyond our dreams.”
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-[#7a5a50]">
              <FaMapMarkerAlt />
              Beaver Dam, Kentucky Wedding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingSection;