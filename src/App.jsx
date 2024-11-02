import { useEffect } from "react";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Products/Product";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./Components/Top Products/TopProducts";
import Banner from "./Components/Banner/Banner";
import Subscribe from "./Components/Subscribe/Subscribe";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 h-max">
      <Navbar />
      <Hero />
      <Product />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Product />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
