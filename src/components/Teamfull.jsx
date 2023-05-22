import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import teamfull from "../assets/image/png/fullteam.png";

const Teamfull = () => {
  return (
    <>
      <section className="bg_F6F6F6">
        <Container>
          <Row className="align-items-center py-lg-0 py-4">
            <Col lg={6}>
              <p
                className="ff_konexy fw_400 fs_5xl text-black mb-2 textanim"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="400"
              >
                <span>Team</span> <span>Full</span> <span>of </span>
                <span>Stars</span>
              </p>
              <p
                className="ff_gilroy fw_400 fs_base text-black"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                Suspendisse consequat egestas arcu et et. Viverra quis euismod
                neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
                Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum.
                Lacus tortor sollicitudin risus eget euismod in bibendum turpis.
              </p>
              <button
                className="ff_gilroy fw_600 btn_schedule fs_base text-white mt-0 mt-lg-3"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1200"
              >
                Explore
              </button>
            </Col>
            <Col
              lg={6}
              className="pt-4 pt-lg-0"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1100"
            >
              <img
                src={teamfull}
                alt=""
                className="teamfullimg w-100 position-relative"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Teamfull;
