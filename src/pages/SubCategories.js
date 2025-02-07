import React from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiOutlineShareAlt, AiOutlinePlus, AiOutlineUndo } from "react-icons/ai";

const movies = [
  { title: "Design templates 01", price: "$08.00", oldPrice: "$10.00", image: require("../media/images/Half Saree 05.jpeg"), tags: ["Landscape", "2D Paint", "Basic"] },
  { title: "Design templates 02", price: "$08.00", oldPrice: "$10.00", image: require("../media/images/Half Saree 05.jpeg"), tags: ["Landscape", "2D Paint", "Basic"] },
  { title: "Design templates 03", price: "$08.00", oldPrice: "$10.00", image: require("../media/images/Half Saree 05.jpeg"), tags: ["Landscape", "2D Paint", "Basic"] },
  { title: "Design templates 04", price: "$08.00", oldPrice: "$10.00", image: require("../media/images/Half Saree 05.jpeg"), tags: ["Landscape", "2D Paint", "Basic"] },
  { title: "Design templates 01", price: "$08.00", oldPrice: "$10.00", image: require("../media/images/Half Saree 05.jpeg"), tags: ["Landscape", "2D Paint", "Basic"] },
  { title: "Design templates 02", price: "$08.00", oldPrice: "$10.00", image: require("../media/images/Half Saree 05.jpeg"), tags: ["Landscape", "2D Paint", "Basic"] },
  { title: "Design templates 03", price: "$08.00", oldPrice: "$10.00", image: require("../media/images/Half Saree 05.jpeg"), tags: ["Landscape", "2D Paint", "Basic"] },
  { title: "Design templates 04", price: "$08.00", oldPrice: "$10.00", image: require("../media/images/Half Saree 05.jpeg"), tags: ["Landscape", "2D Paint", "Basic"] },
  { title: "Design templates 01", price: "$08.00", oldPrice: "$10.00", image: require("../media/images/Half Saree 05.jpeg"), tags: ["Landscape", "2D Paint", "Basic"] },
  { title: "Design templates 02", price: "$08.00", oldPrice: "$10.00", image: require("../media/images/Half Saree 05.jpeg"), tags: ["Landscape", "2D Paint", "Basic"] },
  { title: "Design templates 03", price: "$08.00", oldPrice: "$10.00", image: require("../media/images/Half Saree 05.jpeg"), tags: ["Landscape", "2D Paint", "Basic"] },
  { title: "Design templates 04", price: "$08.00", oldPrice: "$10.00", image: require("../media/images/Half Saree 05.jpeg"), tags: ["Landscape", "2D Paint", "Basic"] },
  { title: "Design templates 01", price: "$08.00", oldPrice: "$10.00", image: require("../media/images/Half Saree 05.jpeg"), tags: ["Landscape", "2D Paint", "Basic"] },
  { title: "Design templates 02", price: "$08.00", oldPrice: "$10.00", image: require("../media/images/Half Saree 05.jpeg"), tags: ["Landscape", "2D Paint", "Basic"] },
  { title: "Design templates 03", price: "$08.00", oldPrice: "$10.00", image: require("../media/images/Half Saree 05.jpeg"), tags: ["Landscape", "2D Paint", "Basic"] },
  { title: "Design templates 04", price: "$08.00", oldPrice: "$10.00", image: require("../media/images/Half Saree 05.jpeg"), tags: ["Landscape", "2D Paint", "Basic"] },
];

const MovieGrid = () => {
  return (
    <GridContainer>
      {movies.map((movie, index) => (
        <MovieCard key={index}>
          <ImageContainer>
            <MovieImage src={movie.image} alt={movie.title} />
            <HoverOverlay />
            <PlayIcon />
          </ImageContainer>
          <MovieDetails>
            <Title>{movie.title}</Title>
            <Tags>
              {movie.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </Tags>
            <Price>
              <NewPrice>{movie.price}</NewPrice>
              <OldPrice>{movie.oldPrice}</OldPrice>
            </Price>
            <Actions>
              <ActionButton><AiOutlineHeart /></ActionButton>
              <ActionButton><AiOutlineShareAlt /></ActionButton>
              <ActionButton><AiOutlinePlus /></ActionButton>
              <ActionButton><AiOutlineUndo /></ActionButton>
            </Actions>
          </MovieDetails>
        </MovieCard>
      ))}
    </GridContainer>
  );
};

// Styled Components
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  background: #121212;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const MovieCard = styled.div`
  background: #181818;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  color: white;
  padding: 10px;
  position: relative;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;

  &:hover div {
    opacity: 1;
    visibility: visible;
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #14141d;
  border-radius: 0.5rem;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s linear;
`;

const PlayIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  opacity: 0;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '▶';
    font-size: 24px;
    color: #ff0000;
    font-weight: bold;
  }

  ${ImageContainer}:hover & {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const MovieDetails = styled.div`
  padding: 10px;
`;

const Title = styled.h3`
  font-size: 16px;
  margin: 5px 0;
`;

const Tags = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
`;

const Tag = styled.span`
  background: #333;
  color: #fff;
  padding: 3px 6px;
  border-radius: 4px;
  font-size: 12px;
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 5px 0;
`;

const NewPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #ffcc00;
`;

const OldPrice = styled.span`
  font-size: 14px;
  text-decoration: line-through;
  color: gray;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export default MovieGrid;
