import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import MovieCard from "./MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineAlignCenter } from "react-icons/ai";
// import './Slider.scss'


function FetchMovie({ url }) {
  const [movies, setMovies] = useState([]);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    AiOutlineAlignCenter,
    prevArrow: <prevArrow />,
    nextArrow: <nextArrow />,
  };
  console.log(movies);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('데이터를 불러오는 중 에러가 발생했습니다:', error);
    }
  };
  const renderDivs = movies.map((item,idx) => (
    <MovieCard
        title={item.title}
        vote_average={item.vote_average}
        backdrop_path={item.backdrop_path}
        release_date={item.release_date}
        overview={item.overview}
        poster_path={item.poster_path}
        genre_ids={item.genre_ids}
        vote_count={item.vote_count}
        popularity={item.popularity}
    />
  ))
  useEffect(() => {
    fetchData();
    // console.log(";;");
    
}, [url]);

// const [movieIndex, setSliderIndex] = useState([0]);

// const settings = {
//     Slider: <movieIndex/>,
//     slide: <movieIndex />, 
//     infinite: false,
//     arrows: false,
//     autoplay: true,
//     slidesToShow: 5, 
//     slidesToScroll: 3,
//     prevArrow: <prevArrow />,
//     nextArrow: <nextArrow />
//   };
  return (
    <section>
      <div className="slider-container">
      {movies.length && <Slider {...settings}>
        {renderDivs}
      </Slider>}
    </div>
    </section>
  );
}

export default FetchMovie;
