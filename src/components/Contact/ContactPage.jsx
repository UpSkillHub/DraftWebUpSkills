import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col lg:flex-row max-w-4xl w-full rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-8 lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">We'd Love to Hear from You</h2>
            <p className="mb-6">
              Do you have a question or need some more information about our organization? We are here to help. Fill out the form below and let's start a conversation that could lead to great impact in our community and make this world a better place.
            </p>
          </div>
          <div className="bg-gray-100 p-8 lg:w-1/2">
            <h2 className="text-3xl font-bold text-black mb-4 text-center">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  placeholder="Write Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-24"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 text-white font-semibold rounded bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      
      {/* <div className="bg-gray-10 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
            <div className="bg-blue-100 text-blue-500 rounded-full p-3 text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Head Office</h3>
              <p className="text-gray-600">
                
                Makuza peace Plaza KN 48 Street, Kigali<br />
              </p>
            </div>
          </div>

          
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
            <div className="bg-blue-100 text-blue-500 rounded-full p-3 text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Branches</h3>
              <p className="text-gray-600">
              
              Makuza peace Plaza KN 48 Street, Kigali<br />
                Near Grand Legacy Hotel KG 173 Street, Kigali
              </p>
            </div>
          </div>

          
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
            <div className="bg-blue-100 text-blue-500 rounded-full p-3 text-xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Let's Talk</h3>
              <p className="text-gray-600">
                Phone: +250783168747 <br />
                
              </p>
            </div>
          </div>

          
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
            <div className="bg-blue-100 text-blue-500 rounded-full p-3 text-xl">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email Support</h3>
              <p className="text-gray-600">
              upskillshub.info@gmail.com <br />
                
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-gray-10 py-12">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
    
    {/* Head Office Card */}
    <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4 hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300">
      <div className="bg-blue-100 text-blue-500 rounded-full p-3 text-xl">
        <FaMapMarkerAlt />
      </div>
      <div>
        <h3 className="font-semibold text-lg">Head Office</h3>
        <p className="text-gray-600">
          Makuza peace Plaza KN 48 Street, Kigali<br />
        </p>
      </div>
    </div>

    {/* Branches Card */}
    <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4 hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300">
      <div className="bg-blue-100 text-blue-500 rounded-full p-3 text-xl">
        <FaMapMarkerAlt />
      </div>
      <div>
        <h3 className="font-semibold text-lg">Branches</h3>
        <p className="text-gray-600">
          Makuza peace Plaza KN 48 Street, Kigali<br />
          Near Grand Legacy Hotel KG 173 Street, Kigali
        </p>
      </div>
    </div>

    {/* Let's Talk Card */}
    <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4 hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300">
      <div className="bg-blue-100 text-blue-500 rounded-full p-3 text-xl">
        <FaPhoneAlt />
      </div>
      <div>
        <h3 className="font-semibold text-lg">Let's Talk</h3>
        <p className="text-gray-600">
          Phone: +250783168747 <br />
        </p>
      </div>
    </div>

    {/* Email Support Card */}
    <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4 hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300">
      <div className="bg-blue-100 text-blue-500 rounded-full p-3 text-xl">
        <FaEnvelope />
      </div>
      <div>
        <h3 className="font-semibold text-lg">Email Support</h3>
        <p className="text-gray-600">
          upskillshub.info@gmail.com <br />
        </p>
      </div>
    </div>
  </div>
</div>


      <Footer />
    </div>
  );
};

export default ContactPage;


