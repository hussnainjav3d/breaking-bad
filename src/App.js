import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./components/ui/Header";
import { ChrachterList } from "./components/characters/ChrachterList";
import "./App.css";
import Search from "./components/ui/Search";

const App = () => {
  const [items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [query, setQuery] = useState("");
  console.log(query);
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const results = await axios(
        "https://www.breakingbadapi.com/api/characters"
      );
      setItem(results.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);
  const filterItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <ChrachterList chracters={filterItems} isLoading={isLoading} />
    </div>
  );
};

export default App;
