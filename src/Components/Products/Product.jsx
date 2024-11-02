import women1 from "../../assets/Women/women1.png";
import women2 from "../../assets/Women/women2.png";
import women3 from "../../assets/Women/women3.png";
import women4 from "../../assets/Women/women4.png";
import women5 from "../../assets/Women/women5.png";
import { FaStar } from "react-icons/fa6";
const ProductsData = [
  {
    id: 1,
    img: women1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: women2,
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: women3,
    title: "Men Casual",
    rating: 4.8,
    color: "Blue",
    aosDelay: "400",
  },
  {
    id: 4,
    img: women4,
    title: "Kids Wear",
    rating: 4.2,
    color: "Green",
    aosDelay: "600",
  },
  {
    id: 5,
    img: women5,
    title: "Accessories",
    rating: 4.7,
    color: "Black",
    aosDelay: "800",
  },
];

const Product = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600] mx-auto ">
          <p className="text-lg text-primary" data-aos="fade-up">
            Top selling
          </p>
          <h1 className="text-4xl font-bold" data-aos="fade-up">
            Product
          </h1>
          <p className="text-xs text-gray-600" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            inventore!
          </p>
        </div>
        {/* body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((item) => (
              <div
                key={item.id}
                className="space-y-3"
                data-aos="fade-up"
                data-aos-delay={item.aosDelay}
              >
                <img
                  src={item.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className=" flex justify-center ">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
