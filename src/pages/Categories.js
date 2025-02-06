import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderWrapper = styled.div`
  background-color: #0d1117;
  padding: 20px;
  color: #fff;
  text-align: center;
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
  }
  .slick-prev,
  .slick-next {
    z-index: 10;
  }
  .slick-dots li button:before {
    color: white;
  }
`;

const Card = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  background-color: #1c1f26;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 20px;
    text-align: center;

    h3 {
      font-size: 1rem;
      margin-bottom: 5px;
    }
    h2 {
      font-size: 1.4rem;
      margin-bottom: 5px;
    }
    p {
      font-size: 1rem;
    }
  }

  .play-button {
    position: absolute;
    bottom: 15px;
    left: 15px;
    background-color: red;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg {
      color: white;
      font-size: 24px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 20px;
  align-items: flex-start;
  max-width: 70vw;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #aaa;
  margin: 5px 0 0;
`;

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div
          className="skeleton"
          style={{ height: "350px", backgroundColor: "#ccc", borderRadius: "15px" }}
        ></div>
      )}
      <img
        src={src}
        alt={alt}
        style={{ display: loaded ? "block" : "none" }}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
};

const VideoSlider = () => {
  const slides = [
    {
      image: require("../media/images/images01.jpeg"),
      title: "Master Category Name",
      subtitle: "Text Thumbile Overlap on Video",
      description: "Text Description",
      subCategory: "subcategory1", // Add a unique identifier for the subcategory
    },
    {
      image: require("../media/images/Half Saree 05.jpeg"),
      title: "Master Category Name",
      subtitle: "Text Thumbile Overlap on Video",
      description: "Text Description",
      subCategory: "subcategory2",
    },
    {
      image: require("../media/images/Half Saree 03.jpeg"),
      title: "Master Category Name",
      subtitle: "Text Thumbile Overlap on Video",
      description: "Text Description",
      subCategory: "subcategory3",
    },
    {
      image: require("../media/images/Half Saree 02.jpg"),
      title: "Master Category Name",
      subtitle: "Text Thumbile Overlap on Video",
      description: "Text Description",
      subCategory: "subcategory4",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <SliderWrapper>
      <Wrapper>
        <Title>Category</Title>
        <Subtitle>Category List</Subtitle>
      </Wrapper>
      <StyledSlider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <Link to={`/subcategory/${slide.subCategory}`}>  {/* Use Link to navigate to subcategory */}
              <Card>
                <LazyImage src={slide.image} alt={slide.title} />
                <div className="overlay">
                  <h3>{slide.subtitle}</h3>
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
                <div className="play-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24px"
                    height="24px"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </StyledSlider>
    </SliderWrapper>
  );
};

export default VideoSlider;
