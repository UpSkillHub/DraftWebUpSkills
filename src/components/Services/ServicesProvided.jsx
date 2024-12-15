const ServicesProvided = () => {
    const testimonials = [
      {
        user: "Kwame Nkrumah",
        company: "Ghana Tech Solutions",
        image: "https://media.istockphoto.com/id/2058912736/photo/home-funny-and-black-woman-on-a-sofa-cellphone-and-connection-with-social-media-comedy-post.jpg?s=1024x1024&w=is&k=20&c=v-gSzf8Y_kVZ_zPTPKyZtY2S0-w7w49O6SH2RHYR_A0=",
        text: "Up Skills Hub exceeded our expectations with their exceptional service. Their team's expertise and dedication were instrumental in driving our project's success.",
      },
      {
        user: "Ngozi Okonjo-Iweala",
        company: "Lagos Innovations",
        image: "https://media.istockphoto.com/id/2058912736/photo/home-funny-and-black-woman-on-a-sofa-cellphone-and-connection-with-social-media-comedy-post.jpg?s=1024x1024&w=is&k=20&c=v-gSzf8Y_kVZ_zPTPKyZtY2S0-w7w49O6SH2RHYR_A0=",
        text: "Collaborating with Up Skills Hub was a fantastic experience. Their innovative solutions and commitment to quality helped us achieve remarkable results.",
      },
      {
        user: "Desmond Tutu",
        company: "Cape Town Enterprises",
        image: "https://media.istockphoto.com/id/2058912736/photo/home-funny-and-black-woman-on-a-sofa-cellphone-and-connection-with-social-media-comedy-post.jpg?s=1024x1024&w=is&k=20&c=v-gSzf8Y_kVZ_zPTPKyZtY2S0-w7w49O6SH2RHYR_A0=",
        text: "I was impressed by the professionalism and efficiency of the Up Skills Hub team. Their training programs were insightful and practical, empowering our staff to excel.",
      },
      {
        user: "Chimamanda Ngozi Adichie",
        company: "Enugu Enterprises",
        image: "https://media.istockphoto.com/id/2058912736/photo/home-funny-and-black-woman-on-a-sofa-cellphone-and-connection-with-social-media-comedy-post.jpg?s=1024x1024&w=is&k=20&c=v-gSzf8Y_kVZ_zPTPKyZtY2S0-w7w49O6SH2RHYR_A0=",
        text: "Up Skills Hub's dedication to client satisfaction is unparalleled. They went the extra mile to ensure our project was delivered on time and within budget.",
      },
      {
        user: "John Magufuli",
        company: "Dodoma Dynamics",
        image: "https://media.istockphoto.com/id/2058912736/photo/home-funny-and-black-woman-on-a-sofa-cellphone-and-connection-with-social-media-comedy-post.jpg?s=1024x1024&w=is&k=20&c=v-gSzf8Y_kVZ_zPTPKyZtY2S0-w7w49O6SH2RHYR_A0=",
        text: "The team at Up Skills Hub provided invaluable expertise and support, helping us navigate complex challenges and achieve our goals.",
      },
      {
        user: "Ellen Johnson Sirleaf",
        company: "Monrovia Systems",
        image: "https://media.istockphoto.com/id/2058912736/photo/home-funny-and-black-woman-on-a-sofa-cellphone-and-connection-with-social-media-comedy-post.jpg?s=1024x1024&w=is&k=20&c=v-gSzf8Y_kVZ_zPTPKyZtY2S0-w7w49O6SH2RHYR_A0=",
        text: "Up Skills Hub's innovative solutions and commitment to quality have transformed our business operations. We are grateful for their partnership.",
      },
      {
        user: "Salif Keita",
        company: "Bamako Innovations",
        image: "https://media.istockphoto.com/id/2058912736/photo/home-funny-and-black-woman-on-a-sofa-cellphone-and-connection-with-social-media-comedy-post.jpg?s=1024x1024&w=is&k=20&c=v-gSzf8Y_kVZ_zPTPKyZtY2S0-w7w49O6SH2RHYR_A0=",
        text: "Up Skills Hub's training programs were exceptional, equipping our team with the skills and knowledge to drive innovation and growth.",
      },
      {
        user: "Wangari Maathai",
        company: "Nairobi Green Solutions",
        image: "https://media.istockphoto.com/id/2058912736/photo/home-funny-and-black-woman-on-a-sofa-cellphone-and-connection-with-social-media-comedy-post.jpg?s=1024x1024&w=is&k=20&c=v-gSzf8Y_kVZ_zPTPKyZtY2S0-w7w49O6SH2RHYR_A0=",
        text: "Up Skills Hub's dedication to sustainability and social impact aligns perfectly with our mission. We are proud to partner with them to create a greener future.",
      },
    ];
  
    return (
      <div className="mt-20 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 text-blue-600">
          What Our Clients Say
        </h2>
        <div className="flex flex-wrap justify-start">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
              <div className="bg-white rounded-md p-6 text-md border border-blue-300 shadow-lg">
                <p className="text-gray-800">{testimonial.text}</p>
                <div className="flex mt-8 items-start">
                  <img
                    className="w-12 h-12 mr-6 rounded-full border border-blue-200"
                    src={testimonial.image}
                    alt="User"
                  />
                  <div>
                    <h6 className="text-blue-600">{testimonial.user}</h6>
                    <span className="text-sm font-normal italic text-blue-400">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ServicesProvided;
  
