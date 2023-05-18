import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MovieState } from "../MovieState";
import { useState, useEffect } from "react";

const MovieDetail = () => {
  const history = useLocation();
  const url = history.pathname;

  //states
  const [movies, setMovies] = useState(MovieState());
  const [movie, setMovie] = useState(null);

  // use effect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);

    setMovie(...currentMovie);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details>
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => {
              return (
                <Award key={award.title}>
                  <h3>{award.title}</h3>
                  <div className="line"></div>
                  <p>{award.description}</p>
                </Award>
              );
            })}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled.div`
  color: white;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;
const Award = styled.div`
  padding: 5rem;

  h3 {
    font-size: 2rem;
  }

  .line {
    width: 90%;
    background: #23d997;
    margin: 1rem 0rem;
    height: 0.3rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default MovieDetail;
