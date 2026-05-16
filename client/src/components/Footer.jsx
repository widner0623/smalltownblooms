import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
   <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="bg-[#2d201c] px-6 py-20 text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-semibold">Small Town Blooms</h3>
          <p className="mt-4 text-sm text-[#d8b7b0]">
            Handcrafted floral arrangements for every meaningful moment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-[#d8b7b0]">
            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/shop" },
              { name: "Weddings", path: "/weddings" },
              { name: "Events", path: "/events" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="transition hover:text-[#b85f68]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-xl font-semibold">Contact</h4>
          <p className="flex items-center gap-2 text-md text-[#d8b7b0]">
            <FaMapMarkerAlt /> 123 Main Street, Beaver Dam, KY
          </p>
          <p className="flex items-center gap-2 text-md text-[#d8b7b0] mt-1">
            <FaPhoneAlt /> (555) 123-4567
          </p>
          <p className="flex items-center gap-2 text-md text-[#d8b7b0] mt-1">
            <FaEnvelope /> info@smalltownblooms.com
          </p>
        </div>

        {/* Social */}
        <div>
          <h4 className="mb-4 text-xl font-semibold">Follow Us</h4>
          <div className="flex items-center gap-4 text-2xl text-[#d8b7b0]">
            <FaInstagram className="transition hover:text-[#b85f68] cursor-pointer" />
            <FaFacebookF className="transition hover:text-[#b85f68] cursor-pointer" />
            <FaPinterestP className="transition hover:text-[#b85f68] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 text-center text-sm text-[#bba69e]">
        &copy; {new Date().getFullYear()} Small Town Blooms. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;