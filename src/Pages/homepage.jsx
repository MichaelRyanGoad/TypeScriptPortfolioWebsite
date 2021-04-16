import React from "react";
import TitleJumbo from "../Components/TitleJumbo";
import resume from "../Assets/Resume.pdf";
import letter from "../Assets/LoR2019.pdf";
import degree from "../Assets/Degree.pdf";
import { Carousel } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <TitleJumbo />
      <Carousel>
        <Carousel.Item>
          <iframe className="pdfFrame" title="Resume" src={resume} />
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            className="pdfFrame"
            title="Letter of Recommendation"
            src={letter}
          />
        </Carousel.Item>
        <Carousel.Item>
          <iframe className="pdfFrame" title="Degree" src={degree} />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomePage;
