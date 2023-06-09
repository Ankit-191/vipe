import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import wordpressman from "../assets/image/png/wordpress-development.png";
import trustpilot from "../assets/image/png/trustpilot.png";
import star from "../assets/image/png/start.png";

const Hero = () => {
  return (
    <>
      <section className="bg-black py-lg-5 overflow-hidden z_1">
        <Container className="pb-lg-5 mb-lg-5">
          <Row className="py-5 my-5 align-items-center">
            <Col lg={6} className=" ">
              <div>
                <p className="ff_konexy fw_400 fs_7xl p_before text-white lh_106pre mb-4">
                  WordPress Development Agency
                </p>
                <p className="ff_gilroy fw_600 fs_2xl text-white">
                  for Enterprise + Friendly Team
                </p>
                <p className="ff_gilroy fw_400 fs_base text-white opacity_7 mb-4">
                  Vipe Studio is a WordPress Agency for development - a
                  long-term partner for any WordPress service. Websites
                  and,online shops development, maintenance and customization is
                  what we do best.
                </p>
                <button className="ff_gilroy fw_600 fs_base started_btn rounded-pill mb-3 me-4 mb-sm-0 border-0 text-white">
                  Get Started
                </button>
                <button className="ff_gilroy fw_400 fs_base border-0 bg-black opacity_7 videobtn rounded-pill border-0 text-white">
                  <svg
                    className="me-2"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 0C7.16429 0 0 7.16429 0 16C0 24.8357 7.16429 32 16 32C24.8357 32 32 24.8357 32 16C32 7.16429 24.8357 0 16 0ZM21.1464 16.2464L13.3464 21.9214C13.3037 21.9522 13.2533 21.9705 13.2008 21.9744C13.1482 21.9784 13.0957 21.9678 13.0488 21.9438C13.0019 21.9198 12.9626 21.8834 12.9351 21.8385C12.9075 21.7936 12.8929 21.7419 12.8929 21.6893V10.3464C12.8927 10.2937 12.9071 10.2419 12.9346 10.1968C12.962 10.1518 13.0014 10.1152 13.0484 10.0912C13.0954 10.0671 13.1481 10.0566 13.2007 10.0606C13.2533 10.0647 13.3037 10.0833 13.3464 10.1143L21.1464 15.7857C21.1833 15.8118 21.2133 15.8463 21.2341 15.8864C21.2548 15.9265 21.2657 15.9709 21.2657 16.0161C21.2657 16.0612 21.2548 16.1057 21.2341 16.1458C21.2133 16.1858 21.1833 16.2204 21.1464 16.2464Z"
                      fill="white"
                    />
                  </svg>
                  What is Vipe? (1min)
                </button>
              </div>
            </Col>
            <Col>
              <div className="imgshadow_after position-relative mt-4 mt-lg-0">
                <div className="trustpilotbg position-absolute d-none d-sm-block">
                  <img
                    src={trustpilot}
                    alt="trustpilot"
                    className="d-block mb-1"
                  />
                  <img src={star} alt="star" />
                  <p className="ff_jost fw_400 fs_base text-white mb-0 mt-2">
                    Rated 5.0 Excellent
                  </p>
                </div>
                <img
                  src={wordpressman}
                  alt="wordpressman"
                  className="w-100 position-relative z_index2"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="white_transperant py-lg-5">
          <Container className="py-4">
            <Row className="align-items-center">
              <Col
                md={6}
                data-aos="zoom-in-down"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                <p className="ff_konexy fw_400 fs_3xl text-white">
                  Tell us more....
                </p>
                <p className="ff_gilroy fw_400 fs_base text-white">
                  Lectus vitae est ultrices sed. Sit aliquam commodo hac donec
                  augue in quis. Magna vel orci sem neque fringilla et lectus
                  laoreet.
                </p>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column align-items-sm-center"
                data-aos="zoom-in-down"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                <div className="rounded-pill bg_searchbar pe-4 w_537px d-flex mt-3 mt-sm-0 justify-content-between align-items-center">
                  <input
                    type="text"
                    placeholder="What do you need assistance with?		"
                    className="border-0 searchbar homesearch rounded-pill w-75 ff_gilroy fw_400 fs_base text-white"
                  />
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div className="d-sm-flex w_537px justify-content-between mt-2">
                  <p className="ff_gilroy fw_400 fs_base text-white mb-2">
                    <svg
                      className="me-2"
                      width="16"
                      height="19"
                      viewBox="0 0 16 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.71505 16L8.00001 13.7143V14.8571C9.13095 14.8573 10.2365 14.5219 11.1767 13.8934C12.117 13.2649 12.8496 12.3716 13.2819 11.3265C13.7141 10.2814 13.8266 9.13161 13.6051 8.02258C13.3835 6.91355 12.8379 5.89517 12.0373 5.09638L13.648 3.4781C14.3949 4.22041 14.9874 5.10333 15.3912 6.07588C15.795 7.04843 16.0022 8.09133 16.0008 9.14438C16.0008 13.5619 12.4198 17.1429 8.00229 17.1429H8.00077V18.2857L5.71505 16ZM0.000767779 9.14286C0.00610111 4.72686 3.58477 1.14819 8.00001 1.14286H8.00077V0L10.2865 2.28571L8.00077 4.57143V3.42857H7.99925C6.86831 3.42864 5.76281 3.7642 4.82265 4.39279C3.88249 5.02138 3.14994 5.91474 2.7177 6.95982C2.28546 8.0049 2.17296 9.15471 2.39444 10.2638C2.61592 11.3728 3.16142 12.3912 3.96191 13.1901L2.35277 14.8084C1.60627 14.0705 1.01386 13.1916 0.609962 12.2228C0.206062 11.254 -0.00127238 10.2146 5.87461e-06 9.16495V9.1421V9.14362L0.000767779 9.14286Z"
                        fill="white"
                      />
                    </svg>
                    or send us an inquire?
                  </p>
                  <p className="ff_gilroy fw_400 fs_base text-white">
                    Learn more about...
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Hero;
