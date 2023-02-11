import Layout from "../../Layout/Layout";
import Hero from "./Hero/Hero";
import MiddleSection from "./MiddleSection/MiddleSection";
import Support from "./Support/Support";
import "./Home.scss";
import AskQuestion from "./AskQuestion/Faq";

const Home = () => {
  return (
    <>
      <Layout layoutMainClass="home-page">
        <Hero />
        <MiddleSection />
        <Support />
        <AskQuestion />
      </Layout>
    </>
  );
};

export default Home;
