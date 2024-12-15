


// import { Mail, Building, Phone } from "lucide-react";
// import { Link } from "react-router-dom"; // Import Link for routing

// const Footer = () => {
//   return (
//     <footer className="mt-20 border-t py-10 border-neutral-700">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
//         {/* Newsletter Section */}
//         <div className="ml-0 sm:ml-20">
//           <h3 className="text-md font-semibold mb-4">Newsletter</h3>
//           <p className="text-sm text-gray-500 mb-4">
//             Subscribe to our newsletter to receive <br />the latest updates and offers.
//           </p>
//           <form className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full sm:w-auto px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
        
//         {/* Links Section */}
//         <div className="flex flex-col items-center justify-center">
//           <h3 className="text-md font-semibold mb-4">Links</h3>
//           <ul className="space-y-2">
//             <li className="py-4">
//               <Link to="/" className=" hover:text-blue-800">Home</Link> {/* Replaced <a> with <Link> */}
//             </li>
//             <li className="py-4">
//               <Link to="/about" className=" hover:text-blue-800">About</Link> {/* Replaced <a> with <Link> */}
//             </li>
//             <li className="py-4">
//               <Link to="/services" className=" hover:text-blue-800">Services</Link> {/* Replaced <a> with <Link> */}
//             </li>
//             <li className="py-4">
//               <Link to="/contact" className=" hover:text-blue-800">Contact Us</Link> {/* Replaced <a> with <Link> */}
//             </li>
//           </ul>
//         </div>

//         {/* Contact Section */}
//         <div className="flex flex-col items-center">
//           <h3 className="text-md font-semibold mb-4">Our Contact</h3>
//           <ul className="space-y-2">
//             <li className="py-4 flex items-center">
//               <Mail className="w-5 h-5 mr-2" />
//               <a href="mailto:upskillshub2024@gmail.com" className=" hover:text-blue-800">upskillshub2024@gmail.com</a>
//             </li>
//             <li className="py-4 flex items-center">
//               <Building className="w-5 h-5 mr-2 flex-shrink-0" />
//               <span className="text-center hover:text-blue-800">
//                 Makuza Peace Plaza <br />
//                 KN 48 Street, Kigali
//               </span>
//             </li>
//             <li className="py-4 flex items-center">
//               <Building className="w-5 h-5 mr-2 flex-shrink-0" />
//               <a className="text-center hover:text-blue-800">
//                 Near Grand Legacy Hotel <br />
//                 KG 173 Street, Kigali
//               </a>
//             </li>
//             <li className="py-4 flex items-center">
//               <Phone className="w-5 h-5 mr-2" />
//               <a href="tel:+250781796283" className="hover:text-blue-800">+250 781 796 283</a>
//             </li>
//           </ul>
//         </div>
        
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { Mail, Building, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-10 sm:mt-20 border-t py-6 sm:py-10 border-neutral-700 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        
        {/* Newsletter Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Newsletter</h3>
          <p className="text-sm text-gray-600 mb-6">
            Subscribe to our newsletter to receive the latest updates and offers.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
            <button
              type="submit"
              className="w-full px-4 py-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
        
        {/* Links Section */}
        <div className="text-center">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Quick Links</h3>
          <ul className="space-y-3">
            {["Home", "About", "Services", "Contact Us"].map((link) => (
              <li key={link}>
                <Link 
                  to={`/${link.toLowerCase().replace(/\s+/g, '')}`} 
                  className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex flex-col sm:flex-row items-center justify-center md:justify-start">
              <Mail className="w-5 h-5 mb-2 sm:mb-0 sm:mr-3 text-blue-600" />
              <a 
                href="mailto:upskillshub2024@gmail.com" 
                className="text-sm text-gray-600 hover:text-blue-600 transition duration-300"
              >
                upskillshub2024@gmail.com
              </a>
            </li>
            
            <li className="flex flex-col sm:flex-row items-center justify-center md:justify-start">
              <Building className="w-5 h-5 mb-2 sm:mb-0 sm:mr-3 text-blue-600" />
              <span className="text-sm text-gray-600 text-center md:text-left">
                Makuza Peace Plaza
                <br />
                KN 48 Street, Kigali
              </span>
            </li>
            
            <li className="flex flex-col sm:flex-row items-center justify-center md:justify-start">
              <Building className="w-5 h-5 mb-2 sm:mb-0 sm:mr-3 text-blue-600" />
              <span className="text-sm text-gray-600 text-center md:text-left">
                Near Grand Legacy Hotel
                <br />
                KG 173 Street, Kigali
              </span>
            </li>
            
            <li className="flex flex-col sm:flex-row items-center justify-center md:justify-start">
              <Phone className="w-5 h-5 mb-2 sm:mb-0 sm:mr-3 text-blue-600" />
              <a 
                href="tel:+250781796283" 
                className="text-sm text-gray-600 hover:text-blue-600 transition duration-300"
              >
                +250 781 796 283
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;