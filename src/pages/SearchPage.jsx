// import React, {useState} from 'react';
// import MovieCard from '../components/MovieCard';
// import { apiKEY } from '../apiKEY';
// // import MovieSearch from '../components/MovieSearch';
// // const searchMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKEY}&language=ko&page=1`;
// function searchMovie() {
// //   const [movies, setMovies] = useState([]);
// //   const options = {
// //     method: "GET",
// //     headers: {
// //       "Content-Type": "application/json; charset=utf-8",
// //     },
// //   };
//   const options = {method: 'GET', headers: {accept: 'application/json; charset=utf-8'}};
//   fetch('https://api.themoviedb.org/3/search/movie?include_adult=true&language=ko&page=1', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
// //   const searchMov = async () => {
// //     try {
// //       const response = await fetch(searchMovieUrl, options);
// //       const data = await response.json();
// //       setMovies(data.results);
// //     } catch (error) {
// //       console.error('데이터를 불러오는 중 에러가 발생했습니다:', error);
// //     }
// //   };

// }
// const renderDivs = (result.map((item)) => (
//     <MovieCard
//         title={item.title}
//         vote_average={item.vote_average}
//         backdrop_path={item.backdrop_path}
//         release_date={item.release_date}
//         overview={item.overview}
//         poster_path={item.poster_path}
//         genre_ids={item.genre_ids}
//         vote_count={item.vote_count}
//         popularity={item.popularity}
//     />
//   ));
// function SearchPage({ props }) {
//   const [filterText, setFilterText] = useState("");
//   // const [inStockOnly, setInStockOnly] = useState(false);

  
//   return (
//     <div>
//       <SearchBar
//         filterText={filterText}
//         onFilterTextChange={setFilterText}
//       />
//       <searchMovie

//         />
//     </div>
//   );
// }


// function SearchBar({ props, filterText, onFilterTextChange }) {
//   return (
//     <form>
//       <input
//         type="text"
//         value={filterText}
//         placeholder="Search..."
//         onChange={(e) => onFilterTextChange(e.target.value)}
//       />
//     </form>
//   );
// }
// export default SearchPage;





