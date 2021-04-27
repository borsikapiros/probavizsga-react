import "./App.css";
import { useState, useEffect } from "react";
import Client from "./components/Client";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [data, setData] = useState([]);

  const fetchData = (searchTerm) => {
    const url = `/api/clients?search=${searchTerm}`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    fetchData(searchTerm);
  };

  /*  useEffect(() => {
    fetchData();
  }, []); */

  const renderedList = data.map((client) => {
    return <Client name={client.name} pets={client.pets} />;
  });

  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          value="Search"
          disabled={searchTerm.length < 3}
          onClick={handleChange}
        >
          Submit
        </button>
      </form>
      {renderedList}
    </div>
  );
};

export default App;
