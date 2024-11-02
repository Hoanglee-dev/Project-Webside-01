import { GrSecure } from "react-icons/gr";
import BannerImg from "../../assets/Women/women2.png";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid gr-col-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[300px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          {/* text detail section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl font-bold" data-aos="fade-up">
              Winter Sale upto 50% Off
            </h1>
            <p
              className="text-sm text-gray-500 tracking-wide leading-5"
              data-aos="fade-up"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              fugiat optio vitae saepe quidem placeat numquam nesciunt ratione,
              doloremque voluptatibus pariatur. Doloribus molestiae qui
              laboriosam fugit ab. Odit, expedita velit.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4" data-aos="fade-up">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div className="flex items-center gap-4" data-aos="fade-up">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div className="flex items-center gap-4" data-aos="fade-up">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment method</p>
              </div>
              <div className="flex items-center gap-4" data-aos="fade-up">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
