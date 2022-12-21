import React from "react";
import { Col, Container, Row } from "reactstrap";

import featureImg01 from "../../assets/images/service-01.png";
import featureImg02 from "../../assets/images/service-02.png";
import featureImg03 from "../../assets/images/service-03.png";
import Category from "../Ui/Category";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    Desc: "A quick delivery service with multiple services",
  },
  {
    title: "Super Service",
    imgUrl: featureImg02,
    Desc: "Delivery of goods may be made in any of the following three ways, Actual Delivery: Also known as physical delivery",
  },
  {
    title: "Easy Pick up",
    imgUrl: featureImg03,
    Desc: "Overnight shipping is the quickest delivery option offered by couriers ",
  },
];

const Service = () => {
  return (
    <>
      <section id="service">

        <Container className="mt-3">
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="text-danger mb-4">What we serve</h5>
              <h2>Just sit back at home</h2>
              <h2>
                We will <span className="text-danger">Take Care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                We need vitamin C to support the immune system, promote radiant
                skin and help blemishes heal.
              </p>
              <p className="feature__text">
                The best sources are blackcurrants, blueberries, broccoli,
                guava, kiwi fruits, oranges, papaya, strawberries and sweet
                potatoes.
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="4" key={index} className="my-5">
                <div className="feature__item mt-3 text-center">
                  <img className="w-25 mb-3" src={item.imgUrl} alt="" />
                  <h5>{item.title}</h5>
                  <p>{item.Desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Service;
