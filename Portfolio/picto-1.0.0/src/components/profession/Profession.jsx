import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "User Experience (Frontend)",
    description:
      "I build intuitive and enjoyable user experiences by understanding user needs and transforming ideas into clean interfaces using modern frontend tools.",
  },
  {
    id: 2,
    title: "User Interface (Backend)",
    description:
      "I build reliable and scalable backend systems, focusing on architecture, data flow, and performance to ensure a smooth and efficient user experience.",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "I build responsive and high-performance web applications using modern technologies, ensuring accessibility, scalability, and maintainability.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I build user-focused interfaces and powerful web applications that
            balance performance with aesthetics. By combining creativity with
            technical expertise, I deliver digital experiences that are both
            visually polished and functionally strong.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            I create modern, user-friendly web applications by blending design
            clarity with efficient, high-quality development.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
