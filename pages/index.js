import Navigation from "features/navigation";
import Banner from "features/homepage/banner";
import TrendingProducts from "features/homepage/trendingproducts";
import NewProducts from "features/homepage/newproducts";

function Home() {
  return (
    <>
      <Navigation />
      <Banner />
      <TrendingProducts />
      <NewProducts />
    </>
  );
}

export default Home;
