import Slider from "react-slick";

const TestimonialsData = [
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Eaque reiciendis inventore iste ratione ex alias quis magni optio.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Eaque reiciendis inventore ratione ex alias quis magni optio.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 7,
    name: "MS Dhoni",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dicta harum doloremque vero quibusdam.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 9,
    name: "Rohit Sharma",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Perspiciatis at tempora nemo magni alias.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 11,
    name: "Yuvraj Singh",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eveniet delectus quo amet ullam modi.",
    img: "https://picsum.photos/100/100",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 604,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}{" "}
        <div className="text-center mb-10 max-w-[600] mx-auto ">
          <p className="text-lg text-primary" data-aos="fade-up">
            What our customers are saying
          </p>
          <h1 className="text-4xl font-bold" data-aos="fade-up">
            Testimonials
          </h1>
          <p className="text-xs text-gray-600" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            inventore!
          </p>
        </div>
        {/* Testimonials cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div key={data.id} className="my-6 ">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative ">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20 "
                    />
                  </div>
                  <div className="flex items-center gap-4 flex-col">
                    <div className="space-y-3">
                      <p className="text-sm text-gray-500 dark:text-gray-200">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-white ">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
