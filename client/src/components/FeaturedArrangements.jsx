import {
  FaHeart,
  FaSun,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

import {
  GiRose,
  GiFlowerPot,
} from "react-icons/gi";

const arrangements = [
  {
    title: "Birthday Celebrations",
    icon: <GiFlowerPot />,
    image:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1974&auto=format&fit=crop",
    price: "$65 - $150",
    description:
      "Bright and joyful arrangements designed to celebrate meaningful birthdays.",
  },
  {
    title: "Anniversary Romance",
    icon: <FaHeart />,
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1974&auto=format&fit=crop",
    price: "$85 - $200",
    description:
      "Romantic floral arrangements layered with elegance, softness, and warmth.",
  },
  {
    title: "Sympathy & Remembrance",
    icon: <GiRose />,
    image:
      "https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=1974&auto=format&fit=crop",
    price: "$75 - $180",
    description:
      "Thoughtful florals handcrafted to honor memories and meaningful moments.",
  },
  {
    title: "Seasonal Collections",
    icon: <FaSun />,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1974&auto=format&fit=crop",
    price: "$55 - $140",
    description:
      "Season-inspired arrangements filled with fresh textures and natural beauty.",
  },
  {
    title: "Designer’s Choice",
    icon: <GiFlowerPot />,
    image:
      "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=1974&auto=format&fit=crop",
    price: "$95 - $220",
    description:
      "Unique luxury florals creatively designed by our in-house floral artists.",
  },
  {
    title: "Everyday Elegance",
    icon: <GiRose />,
    image:
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=1974&auto=format&fit=crop",
    price: "$45 - $120",
    description:
      "Elegant handcrafted bouquets perfect for everyday beauty and gifting.",
  },
];

const FeaturedArrangements = () => {
  return (
    <section className="bg-[#fbf4ef] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full bg-[#f5e7e2] px-5 py-2 text-sm font-medium text-[#b85f68]">
            Featured Collections
          </span>

          <h2 className="mt-8 text-5xl font-semibold md:text-6xl">
            Floral Arrangements
            <span className="block italic text-[#b85f68]">
              Designed with Emotion
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#6b5148]">
            Every bouquet is handcrafted with intention, texture, and beauty
            to celebrate meaningful moments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {arrangements.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[2.5rem] border border-[#f0ded8] bg-white shadow-sm transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              
             {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

                <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-2xl text-[#b85f68] backdrop-blur-md">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2d201c]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-[#6b5148]">
                  {item.description}
                </p>

                {/* Bottom */}
                <div className="mt-8 flex items-center justify-between">
                  
                  <div>
                    <p className="text-lg font-semibold text-[#b85f68]">
                      {item.price}
                    </p>

                    <div className="mt-2 flex items-center gap-2 text-sm text-[#8a6a5f]">
                      <FaClock />
                      Same-day delivery
                    </div>
                  </div>

                  <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5e7e2] text-[#2d201c] transition group-hover:bg-[#e8b7b1]">
                    <FaArrowRight className="transition group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="rounded-full bg-[#e8b7b1] px-10 py-5 text-base font-semibold text-[#2d201c] shadow-lg transition hover:scale-105 hover:bg-[#d99d96]">
            View All Arrangements
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArrangements;