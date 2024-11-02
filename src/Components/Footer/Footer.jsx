import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import FooterBanner from "../../assets/Footer/Footer-Banner.png";
import logo from "../../assets/Logo/logo.png";
import { FaSquareXTwitter } from "react-icons/fa6";

const BannerImg = {
  backgroundImage: `url(${FooterBanner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="text-white mb-20" style={BannerImg}>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-44 pt-5 " data-aos="zoom-in">
          {/* cpmpany detail */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              <img src={logo} alt="" className="max-w-[90px]" />
              Rina
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda dolorum atque optio natus incidunt aliquid debitis
              quaerat nisi, aspernatur sunt culpa quibusdam eligendi illum! At
              nemo molestiae quasi sequi fugit.
            </p>
          </div>
          {/* footer link */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={data.title}
                    >
                      {" "}
                      <span>{data.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={data.title}
                    >
                      {" "}
                      <span>{data.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* socical links */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaSquareXTwitter className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3 ">
                  <FaLocationArrow />
                  <p>Le Thanh Nghi, Da Nang City</p>
                </div>
                <div className="flex items-center gap-3 mt-3 ">
                  <FaMobileAlt />
                  <p>+84 123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
