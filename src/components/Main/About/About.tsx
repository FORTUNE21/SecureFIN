import { Text } from "../../ui";
import "./About.scss";
import Layout from "../../Layout/Layout";

const About = () => {
  return (
    <>
    <Layout>
      <div className="about">
        <Text className="about__title" tag="h2">
          SecureFin is Secured Fintech with
          Security at heart.
        </Text>
     </div>
    </Layout>
    </>
  );
};
  
export default About;
