import React, { Component } from "react";
import MovieCard from "./MovieCard"; 
import { Row, Col, Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



class ThirdSection extends Component {
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
    const searchTerm = "harry potter"; // Inserisco una searchTerm
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
    this.fetchMovies(); // Chiamata per ottenere i film quando il componente è montato
  }

  render() {
    const { remoteMovies, isLoading, error } = this.state;

    // Se c'è un errore, mostriamo l'errore
    if (error) {
      return <div>Error: {error}</div>;
    }

    // Se stiamo ancora caricando, mostriamo uno spinner
    if (isLoading) {
      return (
        <div className="text-center">
          <Spinner animation="border" role="status" />
        </div>
      );
    }

    return (
      <div>
        <h4 className="text-start">New Release</h4>
        {/* Layout a griglia per visualizzare le card */}
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {remoteMovies.length > 0 ? (
            remoteMovies.slice(0, 6).map((movie) => (
              <Col key={movie.imdbID} className="mb-4">
                <MovieCard movie={movie} /> {/* Passiamo ogni film alla card */}
              </Col>
            ))
          ) : (
            <p>Loading...</p> // Se non ci sono film da mostrare
          )}
        </Row>
      </div>
    );
  }
}

export default ThirdSection;
