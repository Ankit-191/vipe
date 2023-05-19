import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/image/png/vipelogo.png";

const Footer = () => {
  return (
    <>
      <section className="bg-black py-5 py-lg-0">
        <Container>
          <div className="check_out d-lg-flex justify-content-between mb-4 mb-lg-0 align-items-center position_relative">
            <div>
              <p className="ff_konexy fw_400 fs_5xl text-white mb-2">
                Have you
              </p>
              <p className="ff_gilroy fw_600 fs_2xl text-white mb-0">
                read our study about Speed and Performance in
                <span className="d-lg-block">WordPress?</span>
              </p>
            </div>
            <button className="ff_inter fw_600 fs_base clr_6022EA btn_checkout rounded-pill mt-lg-0 mt-2">
              Check It Out
            </button>
          </div>
          <div className="d-sm-flex align-items-center justify-content-between ">
            <img src={logo} alt="vipe" />
            <div className="bg-white rounded-pill pe-4 w_381px d-flex mt-3 mt-sm-0 justify-content-between align-items-center">
              <input
                type="text"
                placeholder="Search here...."
                className="border-0 searchbar rounded-pill w-75"
              />
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.7"
                  d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
                  stroke="#313131"
                  stroke-width="2.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
          <Row className="mt-lg-5 mt-4">
            <Col sm={6} lg={3}>
              <p className="ff_gilroy fw_400 fs_base text-white">Services</p>
              <p className="ff_gilroy fw_400 fs_sm text-white arrows_before mb-2 pb-1">
                WordPress Development
              </p>
              <p className="ff_gilroy fw_400 fs_sm text-white arrows_before mb-2 pb-1">
                WooCommerce Development
              </p>
              <p className="ff_gilroy fw_400 fs_sm text-white arrows_before mb-2 pb-1">
                WordPress Maintenance
              </p>
              <p className="ff_gilroy fw_400 fs_sm text-white arrows_before mb-2 pb-1">
                Speed Optimization
              </p>
              <p className="ff_gilroy fw_400 fs_sm text-white arrows_before mb-2 pb-1">
                Dedicated WordPress Developer
              </p>
              <p className="ff_gilroy fw_400 fs_sm text-white arrows_before mb-2 pb-1">
                Headless WordPress Development
              </p>
              <p className="ff_gilroy fw_400 fs_sm text-white arrows_before mb-2 pb-1">
                White Label Development
              </p>
            </Col>
            <Col sm={6} lg={3} className="mt-4">
              <p className="ff_gilroy fw_400 fs_base text-white">Services</p>
              <p className="ff_gilroy fw_400 fs_sm text-white arrows_before mb-2 pb-1">
                WordPress Hosting
              </p>
              <p className="ff_gilroy fw_400 fs_sm text-white arrows_before mb-2 pb-1">
                Custom WordPress Theme
              </p>
              <p className="ff_gilroy fw_400 fs_sm text-white arrows_before mb-2 pb-1">
                Custom WordPress Plugins
              </p>
              <p className="ff_gilroy fw_400 fs_sm text-white arrows_before mb-2 pb-1">
                PSD, XD, Figma to WordPress Conversion
              </p>
              <p className="ff_gilroy fw_400 fs_sm text-white arrows_before mb-2 pb-1">
                CMS to WordPress
              </p>
              <p className="ff_gilroy fw_400 fs_sm text-white arrows_before mb-2 pb-1">
                WordPress Malware Removal
              </p>
            </Col>
            <Col sm={6} lg={3} className="mt-4">
              <p className="ff_gilroy fw_400 fs_base text-white">
                Latest Articles
              </p>
              <p className="ff_gilroy fw_400 fs_sm text-white  mb-2 pb-1">
                7 WordPress Plugins to Create an Effective Newsletter 03.01.2022
              </p>
              <p className="ff_gilroy fw_400 fs_sm text-white  mb-2 pb-1">
                
                What’s the Perfect Blog Post Length for Your WordPress Site’s
                SEO? 02.01.2022
              </p>
              <p className="ff_gilroy fw_400 fs_sm text-white  mb-2 pb-1">
                5 Reasons the Future of WordPress Is Headless 01.01.2022
              </p>
              <p className="ff_gilroy fw_400 fs_sm text-white  mb-2 pb-1">
                Viptor Says: Vipe Studio’s WordPress Developers Wrap Up the
                Amazingly Successful 2021 30.12.2021
              </p>
            </Col>
            <Col sm={6} lg={3} className="mt-4">
              <p className="ff_gilroy fw_400 fs_base text-white">Contact</p>
              <p className="ff_gilroy fw_400 fs_sm align-align-items-center d-flex gap-2 text-white  mb-2 pb-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 2C12.8565 2 14.637 2.7375 15.9497 4.05025C17.2625 5.36301 18 7.14348 18 9C18 9.26522 18.1054 9.51957 18.2929 9.70711C18.4804 9.89464 18.7348 10 19 10C19.2652 10 19.5196 9.89464 19.7071 9.70711C19.8946 9.51957 20 9.26522 20 9C20 6.61305 19.0518 4.32387 17.364 2.63604C15.6761 0.948211 13.3869 0 11 0C10.7348 0 10.4804 0.105357 10.2929 0.292893C10.1054 0.48043 10 0.734784 10 1C10 1.26522 10.1054 1.51957 10.2929 1.70711C10.4804 1.89464 10.7348 2 11 2ZM19.75 13.91C19.695 13.7495 19.6 13.6056 19.4741 13.4919C19.3481 13.3781 19.1953 13.2984 19.03 13.26L13.03 11.89C12.8671 11.8531 12.6976 11.8575 12.5369 11.9029C12.3762 11.9484 12.2294 12.0333 12.11 12.15C11.97 12.28 11.96 12.29 11.31 13.53C9.1532 12.5362 7.42499 10.8009 6.44 8.64C7.71 8 7.72 8 7.85 7.85C7.96671 7.73056 8.05165 7.58379 8.09706 7.42308C8.14248 7.26238 8.14693 7.09286 8.11 6.93L6.74 1C6.70165 0.834696 6.62186 0.681871 6.50814 0.555912C6.39443 0.429952 6.25053 0.335002 6.09 0.28C5.85647 0.196589 5.61531 0.1363 5.37 0.0999999C5.11725 0.0413952 4.85933 0.00789934 4.6 0C3.38 0 2.20998 0.484642 1.34731 1.34731C0.484642 2.20998 0 3.38 0 4.6C0.00529192 8.68271 1.62949 12.5967 4.5164 15.4836C7.40331 18.3705 11.3173 19.9947 15.4 20C16.0041 20 16.6022 19.881 17.1603 19.6498C17.7184 19.4187 18.2255 19.0798 18.6527 18.6527C19.0798 18.2255 19.4187 17.7184 19.6498 17.1603C19.881 16.6022 20 16.0041 20 15.4C20.0003 15.1455 19.9802 14.8913 19.94 14.64C19.898 14.3916 19.8344 14.1474 19.75 13.91Z"
                    fill="white"
                  />
                </svg>
                EU: +359 988 993 128
              </p>
              <p className="ff_gilroy fw_400 fs_sm align-align-items-center d-flex gap-2 text-white  mb-2 pb-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 2C12.8565 2 14.637 2.7375 15.9497 4.05025C17.2625 5.36301 18 7.14348 18 9C18 9.26522 18.1054 9.51957 18.2929 9.70711C18.4804 9.89464 18.7348 10 19 10C19.2652 10 19.5196 9.89464 19.7071 9.70711C19.8946 9.51957 20 9.26522 20 9C20 6.61305 19.0518 4.32387 17.364 2.63604C15.6761 0.948211 13.3869 0 11 0C10.7348 0 10.4804 0.105357 10.2929 0.292893C10.1054 0.48043 10 0.734784 10 1C10 1.26522 10.1054 1.51957 10.2929 1.70711C10.4804 1.89464 10.7348 2 11 2ZM19.75 13.91C19.695 13.7495 19.6 13.6056 19.4741 13.4919C19.3481 13.3781 19.1953 13.2984 19.03 13.26L13.03 11.89C12.8671 11.8531 12.6976 11.8575 12.5369 11.9029C12.3762 11.9484 12.2294 12.0333 12.11 12.15C11.97 12.28 11.96 12.29 11.31 13.53C9.1532 12.5362 7.42499 10.8009 6.44 8.64C7.71 8 7.72 8 7.85 7.85C7.96671 7.73056 8.05165 7.58379 8.09706 7.42308C8.14248 7.26238 8.14693 7.09286 8.11 6.93L6.74 1C6.70165 0.834696 6.62186 0.681871 6.50814 0.555912C6.39443 0.429952 6.25053 0.335002 6.09 0.28C5.85647 0.196589 5.61531 0.1363 5.37 0.0999999C5.11725 0.0413952 4.85933 0.00789934 4.6 0C3.38 0 2.20998 0.484642 1.34731 1.34731C0.484642 2.20998 0 3.38 0 4.6C0.00529192 8.68271 1.62949 12.5967 4.5164 15.4836C7.40331 18.3705 11.3173 19.9947 15.4 20C16.0041 20 16.6022 19.881 17.1603 19.6498C17.7184 19.4187 18.2255 19.0798 18.6527 18.6527C19.0798 18.2255 19.4187 17.7184 19.6498 17.1603C19.881 16.6022 20 16.0041 20 15.4C20.0003 15.1455 19.9802 14.8913 19.94 14.64C19.898 14.3916 19.8344 14.1474 19.75 13.91Z"
                    fill="white"
                  />
                </svg>
                US: +1 (1 888) 266-6917
              </p>
              <p className="ff_gilroy fw_400 fs_sm align-align-items-center d-flex gap-2 text-white  mb-2 pb-1">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 0.5C2.20435 0.5 1.44129 0.81607 0.87868 1.37868C0.31607 1.94129 0 2.70435 0 3.5V3.8015L9 8.648L18 3.803V3.5C18 2.70435 17.6839 1.94129 17.1213 1.37868C16.5587 0.81607 15.7956 0.5 15 0.5H3Z"
                    fill="white"
                  />
                  <path
                    d="M18 5.50586L9.3555 10.1604C9.24624 10.2192 9.12409 10.25 9 10.25C8.87591 10.25 8.75376 10.2192 8.6445 10.1604L0 5.50586V12.5004C0 13.296 0.31607 14.0591 0.87868 14.6217C1.44129 15.1843 2.20435 15.5004 3 15.5004H15C15.7956 15.5004 16.5587 15.1843 17.1213 14.6217C17.6839 14.0591 18 13.296 18 12.5004V5.50586Z"
                    fill="white"
                  />
                </svg>
                office@vipestudio.com
              </p>
              <p className="ff_gilroy fw_400 fs_sm text-white align-align-items-center d-flex gap-2 mb-2 pb-1">
                <svg
                    
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6827 5.17802L4.00062 11.5051V18.3339C4.00062 18.5107 4.07086 18.6802 4.19589 18.8053C4.32091 18.9303 4.49048 19.0005 4.66729 19.0005L9.33645 18.9884C9.51269 18.9876 9.6814 18.9169 9.80571 18.792C9.93001 18.6671 9.99979 18.498 9.99979 18.3218V14.3339C9.99979 14.157 10.07 13.9875 10.195 13.8625C10.3201 13.7374 10.4896 13.6672 10.6665 13.6672H13.3331C13.5099 13.6672 13.6795 13.7374 13.8045 13.8625C13.9295 13.9875 13.9998 14.157 13.9998 14.3339V18.3189C13.9995 18.4066 14.0166 18.4935 14.0499 18.5746C14.0833 18.6557 14.1324 18.7295 14.1943 18.7916C14.2562 18.8537 14.3298 18.903 14.4108 18.9367C14.4919 18.9703 14.5787 18.9876 14.6665 18.9876L19.334 19.0005C19.5108 19.0005 19.6803 18.9303 19.8054 18.8053C19.9304 18.6802 20.0006 18.5107 20.0006 18.3339V11.5005L12.3202 5.17802C12.2299 5.10524 12.1174 5.06555 12.0015 5.06555C11.8855 5.06555 11.773 5.10524 11.6827 5.17802ZM23.8173 9.47844L20.334 6.60719V0.835938C20.334 0.703329 20.2813 0.576152 20.1875 0.482384C20.0937 0.388616 19.9666 0.335938 19.834 0.335938H17.5006C17.368 0.335938 17.2408 0.388616 17.1471 0.482384C17.0533 0.576152 17.0006 0.703329 17.0006 0.835938V3.86135L13.2702 0.792188C12.9122 0.497596 12.463 0.336526 11.9994 0.336526C11.5358 0.336526 11.0865 0.497596 10.7285 0.792188L0.181458 9.47844C0.130828 9.52029 0.0889391 9.5717 0.0581858 9.62974C0.0274324 9.68778 0.00841698 9.75132 0.0022259 9.81671C-0.00396519 9.8821 0.00278944 9.94808 0.0221038 10.0109C0.0414182 10.0736 0.0729138 10.132 0.114791 10.1826L1.17729 11.4743C1.21905 11.5251 1.27042 11.5671 1.32846 11.598C1.38649 11.6289 1.45005 11.6481 1.5155 11.6544C1.58094 11.6607 1.64699 11.654 1.70986 11.6348C1.77273 11.6155 1.83118 11.5841 1.88187 11.5422L11.6827 3.46969C11.773 3.39691 11.8855 3.35722 12.0015 3.35722C12.1174 3.35722 12.2299 3.39691 12.3202 3.46969L22.1215 11.5422C22.1721 11.5841 22.2304 11.6156 22.2932 11.6349C22.356 11.6542 22.422 11.6609 22.4873 11.6548C22.5527 11.6486 22.6163 11.6295 22.6743 11.5988C22.7324 11.568 22.7838 11.5262 22.8256 11.4755L23.8881 10.1839C23.9299 10.133 23.9613 10.0743 23.9804 10.0112C23.9995 9.94818 24.0059 9.88198 23.9993 9.81642C23.9928 9.75087 23.9733 9.68727 23.942 9.62926C23.9108 9.57126 23.8684 9.52 23.8173 9.47844Z"
                    fill="white"
                  />
                </svg>
                14 Srebarna, Sofia 1407, Bulgaria
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
