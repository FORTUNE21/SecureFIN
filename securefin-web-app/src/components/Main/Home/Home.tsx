import Layout from "../../Layout/Layout";
import "./Home.scss";
import Hero from "../Home/Hero/Hero";
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