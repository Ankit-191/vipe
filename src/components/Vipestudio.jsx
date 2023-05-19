import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import girl from "../assets/image/png/woman.png";

const Vipestudio = () => {
  return (
    <>
      <section className="bg-black py-lg-5 py-2 overflow-hidden">
        <Container className="py-5">
          <Row className="pb-lg-5">
            <Col sm={12} xl={5}>
              <p
                className="ff_konexy fw_400 fs_4xl text-white"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="400"
              >
                All Vipe Studio WordPress services include:
              </p>
            </Col>
            <Col sm={12} xl={7}>
              <Row className="pt-3 pt-lg-4">
                <Col
                  sm={6}
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <p className="ff_gilroy fw_600 fs_2xl text-white mb-3 mb-lg-4 ">
                    By Industry
                  </p>
                  <ul className="ps-2">
                    <li className="ff_gilroy fw_400 click fs_base text-white">
                      Lorem in elementum pellentesque
                    </li>
                    <li className="ff_gilroy fw_400 click fs_base text-white pt-2">
                      Molestie cursus praesent mi
                    </li>
                    <li className="ff_gilroy fw_400 click fs_base text-white pt-2">
                      Leo sed viverra cras
                    </li>
                    <li className="ff_gilroy fw_400 click fs_base text-white pt-2">
                      Laoreet feugiat ut at
                    </li>
                    <li className="ff_gilroy fw_400 click fs_base text-white pt-2">
                      Risus aliquam molestie viverra
                    </li>
                    <li className="ff_gilroy fw_400 click fs_base text-white pt-2">
                      Diam enim pulvinar velit
                    </li>
                  </ul>
                </Col>
                <Col
                  sm={6}
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1200"
                >
                  <p className="ff_gilroy fw_600 fs_2xl text-white mb-3 mb-lg-4 pt-2 pt-sm-0">
                    By Services
                  </p>
                  <ul className="ps-2">
                    <li className="ff_gilroy fw_400 click fs_base text-white">
                      Accumsan, dui a semper
                    </li>
                    <li className="ff_gilroy fw_400 click fs_base text-white pt-2">
                      Interdum malesuada vulputate neque
                    </li>
                    <li className="ff_gilroy fw_400 click fs_base text-white pt-2">
                      Nullam non a, morbi
                    </li>
                    <li className="ff_gilroy fw_400 click fs_base text-white pt-2">
                      Arcu morbi leo eu
                    </li>
                    <li className="ff_gilroy fw_400 click fs_base text-white pt-2">
                      Viverra venenatis, in ornare
                    </li>
                    <li className="ff_gilroy fw_400 click fs_base text-white pt-2">
                      Erat id aliquam habitant
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className=" schedulebox aftershadow beforeshadow mt-5 pt-2 pt-lg-5">
            <Row className="bg-black p-3 p-lg-4 boder_r">
              <Col
                sm={12}
                xl={4}
                data-aos="fade-up-right"
                data-aos-easing="linear"
                data-aos-duration="400"
              >
                <p className="ff_konexy fw_400 fs_3lg text-white">
                  Not Sure which service you need yet?
                </p>
                <button className="ff_gilroy fw_600 btn_schedule fs_base text-white mt-2 mt-lg-4">
                  Schedule An Appointment
                </button>
              </Col>
              <Col
                md={6}
                xl={4}
                className="mt-3 mt-xl-0"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                <p className="ff_gilroy fw_700 fs_2xl text-white mb-4">
                  20-m free consultation that will help us identifyif you need
                </p>
                <ul className="ps-2">
                  <li className="ff_gilroy fw_400 yes fs_base text-white">
                    Technical Description & Discovery
                  </li>
                  <li className="ff_gilroy fw_400 yes fs_base text-white pt-2">
                    Custom WordPress Development
                  </li>
                  <li className="ff_gilroy fw_400 yes fs_base text-white pt-2">
                    Support & Maintenance
                  </li>
                  <li className="ff_gilroy fw_400 yes fs_base text-white pt-2">
                    Other WordPress Service
                  </li>
                </ul>
              </Col>
              <Col
                md={6}
                xl={4}
                className="text-center mt-3 mt-xl-0 text-md-end"
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1200"
              >
                <img src={girl} alt="girl" className="w-100 imgshadow " />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Vipestudio;
