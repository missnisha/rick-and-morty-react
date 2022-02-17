import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import CardList from "./components/Card/CardList";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import CardDetails from "./components/Card/CardDetails";
import Header from "./components/Header/Header";
import "./scss/App.scss";

function App() {
  return (
        <Router>
          <Header />
          <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/:id" element={<CardDetails />} />
          </Routes>
        </Router>
  );
}


const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  const [fetchedData, updateFetchedData] = useState([]);
  const { info, results } = fetchedData; //destructuring result for characters into cards & info to pagination and you dont have to use fetchedData.results
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <Filter
        pageNumber={pageNumber}
        status={status}
        setStatus={setStatus}
        setGender={setGender}
        setSpecies={setSpecies}
        setPageNumber={setPageNumber}
      />
      <CardList results={results} />
        <footer>
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
         </footer>
    </div>
  );
}

export default App;
