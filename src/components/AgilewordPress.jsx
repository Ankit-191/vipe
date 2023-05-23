import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aglie from "../assets/image/png/agileimg.png";

const AgilewordPress = () => {
  return (
    <>
      <section className="py-lg-5 my-4 ">
        <Container className="mb-5">
          <Row>
            <Col lg={5}>
              <img src={aglie} alt="aglie" className="w-100" />
            </Col>
            <Col lg={7}>
              <p className="ff_konexy fw_400 fs_5xl fs_40 text-black mb-2 pb-1 mt-4 mt-lg-0">
                <span className="clr_6022EA">Agile WordPress</span> Development
                Project management
              </p>
              <p className="ff_gilroy fw_400 fs_base mb-4 pb-2">
                Suspendisse consequat egestas arcu et et. Viverra quis euismod
                neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
                Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum.
                Lacus tortor sollicitudin risus eget euismod in bibendum turpis.
              </p>
              <button className="ff_gilroy fw_600 btn_schedule fs_base text-white">Explore</button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AgilewordPress;
