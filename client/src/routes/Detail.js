import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";
import "./Detail.css";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      language
      rating
      description_full
      isLiked @client
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

const LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });
  const [toggleMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: parseInt(id), isLiked: data?.movie?.isLiked },
  });

  return (
    <React.Fragment>
      <h1 className="detail__title">
        {loading
          ? "Loading..."
          : `${data?.movie?.title} ${data?.movie?.isLiked ? "💖" : "😞"}`}
      </h1>

      <div className="detail__container">
        <img
          src={data?.movie?.medium_cover_image}
          alt={data && data.movie && data.movie.title}
        />
        <div className="detail__container__summary">
          <h2>{data?.movie?.title}</h2>
          <span>
            {data?.movie?.language} · {data?.movie?.rating}
          </span>
          <button onClick={toggleMovie}>
            {data?.movie?.isLiked ? "Unlike" : "Like"}
          </button>
          <p>{data?.movie?.description_full}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Detail;
