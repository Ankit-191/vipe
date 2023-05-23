import React from "react";
import { Container } from "react-bootstrap";
import propy from "../assets/image/png/propy.png";
import ciela from "../assets/image/png/ciela.png";
import revuele from "../assets/image/png/revuele.png";
import spark from "../assets/image/png/spark.png";
import Slider from "react-slick";

const Longtream = () => {
  const WordPress = {
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
      <section className="bg_F6F6F6 py-5">
        <Container className="py-lg-4">
          <p className="ff_konexy fw_400 fs_5xl text-black mb-2 mb-lg-3 maxw_693">
            Long Term WordPress Partner
          </p>
          <p className="ff_gilroy fw_400 fs_base maxw_693 mb-lg-4 mb-2">
            Our motto is the long-term partnership – we will not only develop
            your perfect website, but will be behind you through the whole
            process. They already trusted us:
          </p>
          <Slider {...WordPress} className="pt-2 overflow-hidden">
            <div>
              <img src={propy} alt="propy" className="w-75" />
            </div>
            <div>
              <img src={ciela} alt="ciela" className="w-75" />
            </div>
            <div>
              <img src={revuele} alt="revuele" className="w-75" />
            </div>
            <div>
              <img src={ciela} alt="tranding ciela" className="w-75" />
            </div>
            <div>
              <img src={spark} alt="spark" className="w-75" />
            </div>
            <div>
              <img src={ciela} alt="ciela" />
            </div>
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default Longtream;
