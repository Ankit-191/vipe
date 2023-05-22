import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import news from "../assets/image/png/yahoonews.png";
import finance from "../assets/image/png/yahoofinance.png";
import life from "../assets/image/png/yahoolife.png";
import topics from "../assets/image/png/trendingtopics.png";

const Featuredon = () => {
  const Featured = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-5">
        <Container className="py-lg-5 mt-lg-2">
          <p className="ff_konexy fw_400 fs_5xl text-black mb-4">Featured on</p>
          <Slider {...Featured} className="pt-lg-5 overflow-hidden">
            <div>
              <img src={news} alt="yahoonews" />
            </div>
            <div>
              <img src={finance} alt="yahoofinance" />
            </div>
            <div>
              <img src={news} alt="yahoonews" />
            </div>
            <div>
              <img src={topics} alt="tranding topics" />
            </div>
            <div>
              <img src={life} alt="yahoolife" />
            </div>
            <div>
              <img src={topics} alt="tranding topics" />
            </div>
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default Featuredon;
