import React, { Fragment, useState, useEffect } from 'react';
import { Input } from 'antd';
// import Movie from './Movie';
// import Item from 'antd/es/list/Item';
// import FetchMovie from './FetchMovie';
import { apiKEY } from '../apiKEY';
// import SearchPage from "../pages/SearchPage";


const { Search } =  Input;
const searchMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKEY}&language=ko&page=1`;


const MovieSearch  = (props) => {
    
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    // const searchHandler = (event) => {
    //     setSearch(event.currentTarget.value);
    //     props.MovieCard(event.currentTarget.value);
    // };
    
    useEffect(() => {
        const fetchSuggestions = async () => {
          const response = await fetch({searchMovieUrl});
          const data = await response.json();
          setSuggestions(data);
        };
    
        if (search !== "") {
          fetchSuggestions();
        } else {
          setSuggestions([]);
        }
      }, [search]);
    
      const handleInputChange = (e) => {
        setSearch(e.target.value);
      };
      console.log(setSearch)
    // submitSearch = (event) => {
    //     const keyword = event.target.value;
    //     window.open('/search?keyword=' + keyword , '_self');
    //   };
      
    // const onSearch = (value, _e, info) => console.log(info?.source, value);
        return (
            <Fragment>
                <div style={{display:'flex', justifyContent:'center', padding:'2rem'}}>
                    <Search 
                        placeholder='영화를 검색하세요'
                        inputMode='search'
                        // onSearch={onSearch}
                        // onSearch={(e) => onchange(e.target)}
                        // onSearch={(value) => console.log(value)}
                        style={{width : 400, color : 'black'}}
                        // onClick={searchMovieUrl}
                        onChange={handleInputChange}
                        // allowClears
                        // enterButton
                        size="large"
                        value={search}
                        
                    />
                    <ul>
                        {suggestions.map((suggestion)=>(
                            <li key = {suggestion.id}>{suggestion.keyword}</li> 
                        ))}
                    </ul>
                </div>

            </Fragment>
        );
    
}

export default MovieSearch;