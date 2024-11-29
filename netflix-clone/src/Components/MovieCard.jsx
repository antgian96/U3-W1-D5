import React from "react";
import { Card, Image, Row, Col } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const MovieCard = ({ movie }) => {
  return (
    <Card className="col p-0 text-center movie-card">
      <Image src={movie.Poster} alt="Movie Poster" fluid className="movie-img" />
    </Card>
  );
};



export default MovieCard;
