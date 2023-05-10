import "./Home.scss";
import Hero from "../Home/Hero/Hero";
import Layout from "../../Layout/Layout";

const Home = () => {
    return (
        <>
        <Layout layoutMainClass="home-page">
        <Hero />
        </Layout>
        </>
    );
};
export default Home;