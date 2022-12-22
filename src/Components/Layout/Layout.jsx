import React from "react";
import Routers from "../../Routes/Routers";
import Carts from "../Cart/Carts";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Carts />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
