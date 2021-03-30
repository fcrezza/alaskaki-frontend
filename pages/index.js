import Navigation from "features/navigation";
import Banner from "features/homepage/banner";
import Head from "components/Head";

function Home() {
  return (
    <>
      <Head
        title="Alas Kaki | Temukan sepatu terbaik produksi anak negeri"
        description="Alas Kaki | Temukan sepatu terbaik produksi anak negeri"
      />
      <Navigation />
      <Banner />
    </>
  );
}

export default Home;
