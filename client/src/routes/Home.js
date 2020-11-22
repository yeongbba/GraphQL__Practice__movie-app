import React from "react";
import Movie from "../components/Movie";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import "./Home.css";

const GET_MOVIES = gql`
  {
    movies {
      id
      year
      title
      description_full
      genres
      medium_cover_image
      isLiked @client
    }
  }
`;

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);
  console.log(data);
  return (
    <section className="container">
      {loading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="container">
          <div className="title">
            <h1>The 20 Best Movies in Home</h1>
            <span>It will update every month!</span>
          </div>
          <div className="movies">
            {data?.movies?.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.description_full}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                isLiked={movie.isLiked}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
