import LayoutHeader from "./LayoutHeader/LayoutHeader";
import { ReactNode } from "react";
import LayoutFooter from "./LayoutFooter/LayoutFooter";
import "./Layout.scss";

const Layout = (props: { children?: ReactNode; layoutMainClass?: string }) => {
  const { children, layoutMainClass } = props;
  return (
    <>
      <LayoutHeader />
      <main className={`layout-main ${layoutMainClass}`}>{children}</main>
      <LayoutFooter />
    </>
  );
};

export default Layout;
