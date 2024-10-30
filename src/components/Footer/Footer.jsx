import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold font-orbitron mb-4">E-SPACE</h2>
          <p className="text-gray-400">
            Explore the universe with us. Discover breathtaking images, daily
            insights, and the latest in space exploration.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/apod" className="hover:text-gray-300">
                APOD
              </a>
            </li>
            <li>
              <a href="/mars-rover" className="hover:text-gray-300">
                Mars Rover
              </a>
            </li>
            <li>
              <a href="/image-search" className="hover:text-gray-300">
                Image Search
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
          <p className="text-gray-400 mb-4">
            Follow us on social media for the latest updates.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-accentColorHover">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-accentColorHover">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-accentColorHover">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-accentColorHover">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} E-SPACE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
