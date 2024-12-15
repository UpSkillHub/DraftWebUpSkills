

import { FaReact, FaNodeJs, FaPython, FaJava, FaGithub } from "react-icons/fa";

const Partners = () => {
  return (
    <div className="bg-blue-500 py-6 px-4">
      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 text-white max-w-6xl mx-auto">
        {[
          { Icon: FaReact, name: "React" },
          { Icon: FaNodeJs, name: "Node.js" },
          { Icon: FaPython, name: "Python" },
          { Icon: FaJava, name: "Java" },
          { Icon: FaGithub, name: "GitHub" }
        ].map(({ Icon, name }) => (
          <div 
            key={name} 
            className="flex flex-col items-center gap-2 w-20 sm:w-24 md:w-32 hover:scale-110 transition-transform duration-200"
          >
            <Icon className="text-3xl sm:text-4xl md:text-5xl" />
            <p className="text-xs sm:text-sm font-medium">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;