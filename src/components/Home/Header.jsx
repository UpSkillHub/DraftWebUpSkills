
import headerpic from '../../assets/headpic.jpg';

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white px-6 lg:px-8 py-8 lg:py-12 space-y-6 lg:space-y-0">
      
      <div className="max-w-lg text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold text-blue-500 leading-snug">
          UpSkills Hub <br />
        </h1>
        <p className="text-gray-600 mt-4">
          Up Skills Hub is dedicated to bridging the gap between aspiring interns and opportunities in the arts and design fields, while providing a platform for arts designers to showcase their portfolios. Our mission is to facilitate meaningful connections between talented individuals and leading creative companies, fostering growth and innovation within the industry.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded-full shadow-lg flex items-center hover:bg-blue-800">
          Learn More
          <span className="ml-2 w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 5l7 7m0 0l-7 7m7-7H6"
              />
            </svg>
          </span>
        </button>
      </div>

      
      <div className="w-full lg:w-1/2">
        <img
          src={headerpic}
          alt="Header Illustration"
          className="w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
