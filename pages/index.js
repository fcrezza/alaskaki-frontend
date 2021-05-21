import Navigation from "features/navigation";
import Banner from "features/homepage/banner";
import TrendingProducts from "features/homepage/trendingproducts";
import NewProducts from "features/homepage/newproducts";
import Footer from "features/footer";

function Home() {
  return (
    <>
      <Navigation />
      <Banner />
      <TrendingProducts />
      <NewProducts />
      <Footer />
    </>
  );
}

export default Home;
