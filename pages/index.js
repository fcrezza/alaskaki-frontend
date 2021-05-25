import Banner from "features/homepage/banner";
import TrendingProducts from "features/homepage/trendingproducts";
import NewProducts from "features/homepage/newproducts";
import Layout from "components/Layout";

function Home() {
  return (
    <Layout>
      <Banner />
      <TrendingProducts />
      <NewProducts />
    </Layout>
  );
}

export default Home;
