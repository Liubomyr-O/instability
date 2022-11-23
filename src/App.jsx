import { useState, useEffect } from "react";
import "./App.scss";
import SearchBar from "./components/SearchBar.jsx";
import ResultNormalizer from "./components/ResultNormalizer.jsx";
import GetDataByKeyword from "./components/GetDataByKeyword.jsx";

function App() {
  const [SEARCH_KEYWORD, setKeyword] = useState("react");
  const [searchResults, setSearchResults] = useState();

  const findLessons = (results) => {
    setSearchResults(results);
  };

  const onKeywordChange = (keyword) => {
    setKeyword(keyword);
  };

  return (
    <div className="App">
      <h1>Find the relevant lecture by keyword</h1>
      <h2>enter your search query in the field below:</h2>
      <SearchBar onKeywordChange={onKeywordChange} />
      <GetDataByKeyword
        SEARCH_KEYWORD={SEARCH_KEYWORD}
        findLessons={findLessons}
      />
      {searchResults && <ResultNormalizer lessonsData={searchResults} />}
    </div>
  );
}

export default App;
