import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import enterprise from "../assets/image/svg/Enterprise.svg";
import small from "../assets/image/svg/smalldevelopment.svg";
import support from "../assets/image/svg/support.svg";

const Integer = () => {
  const integer = [
    {
      id: 1,
      heading: "Enterprise WordPress Solutions	",
      para: "Pretium, a et sapien non nunc libero. Id dolor sed quis convallis turpis purus feugiat nibh eu. Auctor cras hac ac, sociis diam montes, turpis commodo elit.",
      svg: enterprise,
    },
    {
      id: 2,
      heading: "Small to Mid Size Business Development		",
      para: "Et nunc fermentum id amet tempus, elementum. Eget ac ultrices tortor, mattis amet blandit aenean amet. Massa diam lacus, aliquam neque, cursus.",
      svg: small,
    },
    {
      id: 3,
      heading: "Support & Maintenance	",
      para: "Ac donec ipsum fringilla tortor, consectetur etiam sociis amet quis. Viverra volutpat pretium non in fusce tellus sed urna. Pharetra ullamcorper et donec aliquam.",
      svg: support,
    },
  ];
  return (
    <>
      <section className="bg_F6F6F6 py-lg-5">
        <Container className="py-5">
          <p className="ff_konexy fw_400 fs_5xl text-black mb-lg-5 mb-0">
            Integer et nisl non
          </p>
          <Row className="mb-4">
            {integer.map((PPC) => {
              return (
                <Col xl={4} lg={6} key={PPC.id} className="mt-4">
                  <div className="integer_boxes d-flex flex-column align-items-center h-100">
                    <img src={PPC.svg} alt="" />
                    <p className="ff_Inter fw_600 fs_2xl text-center mt-5">
                      {PPC.heading}
                    </p>
                    <p className="ff_gilroy fw_400 fs_base text-center">
                      {PPC.para}
                    </p>
                    <a
                      href=""
                      className="ff_gilroy fw_600 fs_base clr_6022EA mt-1"
                    >
                      Learn More
                    </a>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Integer;
