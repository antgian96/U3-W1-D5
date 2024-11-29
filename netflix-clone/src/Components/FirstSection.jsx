import React, { Component } from "react";
import MovieCard from "./MovieCard";
import { Row, Col, Spinner, Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

class FirstSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remoteMovies: [], // Array per memorizzare i film
      isLoading: true, // Stato di caricamento
      error: null, // Stato per errori
    };
  }

  // Funzione per fare la fetch dei film
  fetchMovies = () => {
    const searchTerm = "star wars"; // Inserisco una searchTerm
    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=63cf26bb`;
    fetch(url)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel fetch dei film");
        }
      })
      .then((data) => {
        console.log("Risposta JSON dal server:", data);

        if (data.Search) {
          this.setState({
            remoteMovies: data.Search,
            isLoading: false,
          });
        } else {
          throw new Error("Nessun film trovato");
        }
      })
      .catch((e) => {
        console.error("Errore nella fetch:", e);
        this.setState({
          error: e.message,
          isLoading: false,
        });
      });
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { remoteMovies, isLoading, error } = this.state;

    // Se c'è un errore, mostriamo l'errore
    if (error) {
      return <div>Error: {error}</div>;
    }

    // Se sta ancora caricando, mostriamo uno spinner
    if (isLoading) {
      return (
        <div className="text-center mt-4">
          <Spinner animation="border" role="status" />
        </div>
      );
    }

    return (
      <>
         <div className="d-flex justify-content-between">
      <div className="d-flex">
        <h2 className="mb-4">TV Shows</h2>
        <div className="btn-group" role="group">
          
          <Dropdown className="ms-4 mt-1">
            <DropdownButton
              id="dropdown-genres"
              title="Genres"
              variant="secondary"
              size="sm"
              className="rounded-0"
              style={{ backgroundColor: "#221f1f" }}
            >
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </DropdownButton>
          </Dropdown>
        </div>
      </div>
      <div>
        
        <i className="bi bi-grid icons"></i>
        <i className="bi bi-grid-3x3 icons"></i>
      </div>
    </div>
  

       
        <div>
          <h4 className="text-start mt-3">Trending Now</h4>

          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
            {remoteMovies.length > 0 ? (
              remoteMovies.slice(0, 6).map((movie) => (
                <Col key={movie.imdbID} className="mb-4">
                  <MovieCard movie={movie} /> {/* Passiamo ogni film alla card */}
                </Col>
              ))
            ) : (
              <p>Loading...</p> // Mostriamo "Loading..." se non ci sono film
            )}
          </Row>
        </div>
      </>
    );
  }
}

export default FirstSection;
