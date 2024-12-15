import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Testify from "./Testify";
import { FaRocket, FaChartLine, FaMobileAlt, FaChalkboardTeacher, FaHeadset, FaLink } from "react-icons/fa";

const servicesprovided = [
  { 
    title: "Software Development", 
    icon: <FaRocket />, 
    description: "We specialize in custom software development to create tailored solutions that address your unique business challenges. From concept to execution, our team works with you to design, develop, and deploy high-quality software that streamlines your operations and enhances productivity." 
  },
  { 
    title: "Website Integration", 
    icon: <FaChartLine />, 
    description: "We offer seamless website integration services, connecting your website with third-party platforms, APIs, and systems. Whether you need to integrate payment gateways, CRM systems, or data analytics tools, we ensure smooth and efficient integration to enhance your website’s functionality and user experience." 
  },
  { 
    title: "Mobile App Development", 
    icon: <FaMobileAlt />, 
    description: "Our mobile app development service provides end-to-end solutions for iOS and Android platforms. We build intuitive and user-friendly apps that offer exceptional performance, helping you engage users and grow your business through innovative mobile experiences." 
  },
  { 
    title: "Technology Training & Development", 
    icon: <FaChalkboardTeacher />, 
    description: "We offer training programs designed to empower individuals and teams with the skills they need to excel in the tech industry. From coding boot camps to specialized workshops in software development, mobile app creation, and website integration, our training is hands-on and aimed at equipping learners with practical, in-demand skills." 
  },
  { 
    title: "Training Hub", 
    icon: <FaLink />, 
    description: "Our Training Hub is a one-stop platform for ongoing education and skill development in various technology domains. It provides access to resources such as video tutorials, documentation, live webinars, and interactive courses, designed to cater to learners of all levels. Whether you're a beginner or looking to deepen your expertise, our hub has you covered." 
  },
  { 
    title: "Support & Maintenance", 
    icon: <FaHeadset />, 
    description: "Our support and maintenance services ensure that your software, website, or mobile app remains up-to-date and operates smoothly. We offer proactive monitoring, regular updates, bug fixes, and technical support to ensure that your systems run without interruptions, allowing you to focus on what matters most—your business." 
  },
];

const Services = () => {
  return (
    <div>
      <Navbar />
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 text-blue-600">
        Upskills Hub Services
      </h2>

      <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {servicesprovided.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100"
            >
              <div className="flex justify-center items-center bg-blue-100 rounded-full w-12 h-12 mx-auto mb-4 text-blue-600 text-2xl">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              {/* <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700 flex items-center justify-center">
                Learn More <span className="ml-2">&rarr;</span>
              </button> */}
            </div>
          ))}
        </div>
      </div>

      <Testify />

      <Footer />
    </div>
  );
};

export default Services;
