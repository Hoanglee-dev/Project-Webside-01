import Slider from "react-slick";
import Image1 from "../../assets/Hero/sale.png";
import Image2 from "../../assets/Hero/shopping.png";
import Image3 from "../../assets/Hero/women.png";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Sale 50% off on all Men's Wear",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "New Arrivals: Summer Collection",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Hero = () => {
  var settings = {
    dots: false, // Hiển thị chấm chỉ số (pagination dots)
    arrows: false, // Hiển thị mũi tên điều hướng (previous/next arrows)
    infinite: true, // Vòng lặp vô hạn
    speed: 800, // Tốc độ chuyển đổi giữa các slide (milliseconds)
    slidesToShow: 1, // Số lượng slide hiển thị cùng lúc
    autoplay: true, // Tự động chuyển slide
    autoplaySpeed: 4000, // Thời gian chờ giữa các slide (milliseconds)
    cssEase: "ease-in-out", // Hiệu ứng chuyển đổi (CSS easing function)
    pauseOnHover: false, // Tạm dừng autoplay khi rê chuột vào slide
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattent */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9 "></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* conten section */}
                  <div className="relative z-10 flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 ">
                    <h1
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                      data-aos="zoom-out"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      {data.title}
                    </h1>
                    <p
                      className=" text-sm"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="500"
                    >
                      {data.description}
                    </p>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="500"
                    >
                      <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                        Order Now
                      </button>
                    </div>
                  </div>
                  {/* iamage section */}
                  <div className="order-1 sm:order-2">
                    <div
                      className="relative z-10"
                      data-aos="zoom-in"
                      data-aos-once="true"
                    >
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
