import Layout from "../../Layout/Layout";
import { Text } from "../../ui";
import "./Features.scss";

const Features = () => {
  return (
    <>
      <Layout>
        <div className="features"/>
        <Text className="features__title" tag="h2">
          Features
          </Text>
      </Layout>
    </>
  );
};

export default Features;
