import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import success from "../assets/image/png/success.png";
import ppc from "../assets/image/png/PPC.png";

const Succes = () => {
  const vipeppc = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  return (
    <>
      <section className="overflow-hidden">
        <div className="height_100px d-none d-lg-block"></div>
        <Container className="py-lg-5 my-5">
          <Row className="my-5 pb-4 align-items-center">
            <Col
              lg={3}
              xl={4}
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <img src={success} alt="" className="w_100" />
            </Col>
            <Col
              lg={9}
              xl={8}
              className="mt-4 mt-lg-0"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <p className="ff_gilroy fw_400 fs_base clr_868687 mb-0">
                HAVE YOU SEEN OUR MASCOT?
              </p>
              <p className="ff_konexy fw_400 fs_5xl text-black mb-2">
                Success Guides
              </p>
              <div className="d-md-flex gap-2 btncategory_first mb-2">
                <button className="ff_gilroy fw_600 fs_base btn_category ms-2 ">
                  Category-1
                </button>
                <button className="ff_gilroy fw_600 fs_base btn_category ms-2 ">
                  Category-2
                </button>
                <button className="ff_gilroy fw_600 fs_base btn_category ms-2 mt-2 mt-sm-0">
                  Category-3
                </button>
                <button className="ff_gilroy fw_600 fs_base btn_category ms-2 mt-2 mt-sm-0">
                  Category-4
                </button>
              </div>
              <Row className="mt-4">
                {vipeppc.map((PPC) => {
                  return (
                    <Col
                      sm={6}
                      md={4}
                      key={PPC.id}
                      data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    >
                      <div className="PPC mt-3">
                        <img src={ppc} alt="vipe PCP" className="w-100" />
                        <p className="ff_gilroy fw_600 fs_2xl text-black mt-3 mb-2">
                          Sit diam metus
                        </p>
                        <p className="ff_gilroy fw_400 fs_base text-black mb-2">
                          Arcu amet, consectetur vel pellentesque mattis ipsum
                          sed mattis sed.
                        </p>
                        <p className="ff_gilroy fw_600 fs_base clr_6022EA crsor">
                          Read More....
                        </p>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="height_101px"></div>
      </section>
    </>
  );
};

export default Succes;
