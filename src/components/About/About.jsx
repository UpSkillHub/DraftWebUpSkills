import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaRocket, FaChartLine, FaChalkboardTeacher } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl text-center text-blue-600 mb-12 font-bold">
          About UpSkills Hub
        </h1>

        <div className="max-w-4xl mx-auto space-y-12">
          
          <section className="bg-white shadow-lg rounded-lg p-8 transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
            <div className="flex items-center mb-6">
              <FaRocket className="text-4xl text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be the leading technology skills development platform that empowers individuals and organizations across Africa to thrive in the digital economy by providing innovative, accessible, and high-quality technology education and solutions.
            </p>
          </section>

          
          <section className="bg-white shadow-lg rounded-lg p-8 transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
            <div className="flex items-center mb-6">
              <FaChartLine className="text-4xl text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To bridge the technology skills gap in Africa by delivering comprehensive training, cutting-edge software development, and integrated technological solutions that transform businesses and create opportunities for personal and professional growth.
            </p>
          </section>

          
          <section className="bg-white shadow-lg rounded-lg p-8 transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
            <div className="flex items-center mb-6">
              <FaChalkboardTeacher className="text-4xl text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-gray-800">Our Core Values</h2>
            </div>
            <ul className="text-gray-600 leading-relaxed list-disc list-inside">
              <li>Innovation: Continuously pushing technological boundaries</li>
              <li>Excellence: Delivering high-quality solutions and training</li>
              <li>Empowerment: Supporting growth and skill development</li>
              <li>Collaboration: Building strong partnerships and teamwork</li>
              <li>Integrity: Maintaining the highest ethical standards</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
