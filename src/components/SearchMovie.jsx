import React, { useState } from "react";
import { apiKEY } from "../apiKEY";
import { useNavigate } from "react-router-dom";

const searchMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKEY}&language=ko&page=1`;


const SearchBar = (props) => {
//   const [search, setSearch] = useState(""); // 검색어를 상태로 관리
  
// //   const response = fetch({searchMovieUrl});
// //   const data = response.json();
// //   const data = ['apple', 'banana'];
//   const handleInputChange = (event) => {
//     setSearch(event.target.value); // 검색어 변경 시 상태 업데이트
//   };
//   console.log(setSearch)
  
//   const filteredData = data.filter(
//     (item) => item.toLowerCase().includes(search.toLowerCase()) // 검색어에 맞는 데이터 필터링
//   );
    const navigate = useNavigate();

    const movieToSearch = () => {
        navigate('/search', {
        state : props,
        });
    };
  return (
    <div style={{display:'flex', justifyContent:'center', padding:'2rem'}}>
      <input
        type="text"
        placeholder="영화를 검색하세요"
        // value={search}
        style={{width : 400, height : 50,  color : 'black'}}
        onClick={movieToSearch} // 입력값 변경 시 호출
      />
      {/* <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li> // 필터링된 데이터를 리스트로 출력
        ))}
      </ul> */}
    </div>
  );
};

export default SearchBar;
