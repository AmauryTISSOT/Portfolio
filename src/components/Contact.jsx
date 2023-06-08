import { contactData } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";

const Contact = () => {
  return (
    <>
      <p className={`${styles.sectionSubText} `}>Social</p>
      <h1 id="contact" className={`${styles.sectionHeadText}`}>
        Contact
      </h1>
      <div className="w-full mt-10 grid grid-cols-2 gap-12 sm:gap-0 sm:grid-cols-4 justify-items-center">
        {contactData.map((data, index) => (
          <a
            key={index}
            href={data.link}
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 sm:h-[100px] sm:w-[100px] flex flex-col justify-center items-center"
          >
            <img src={data.icon} alt={data.name} className="bg-transparent" />
            <h1 className="text-white font-bold text-[24px] mt-1">
              {data.name}
            </h1>
          </a>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
