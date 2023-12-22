import { useState } from "react";
import data from "../countryData.json";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleKeySearch = (e) => {
    if (e.key !== "Escape") {
      document.getElementById("dropdown").style.display = "inline";
    } else {
      console.log(e.key);
      document.getElementById("dropdown").style.display = "none";
    }
  };

  const onSearch = (term) => {
    setSearch(term);
  };

  return (
    <div>
      <h1>Search</h1>
      <div>
        <div>
          <input
            type="text"
            value={search}
            onChange={onChangeSearch}
            onKeyDown={handleKeySearch}
          />
          <button onClick={() => onSearch(search)}> Search </button>
        </div>
        <div id="dropdown">
          {data
            .filter((item) => {
              const term = search.trim().toLowerCase();
              const fName = item.name.trim().toLowerCase(); 
              return term && fName.startsWith(term) && fName !== term;
            })
            .slice(0, 15)
            .map((item) => (
              <div onClick={() => onSearch(item.name)} key={item.name}>
                {item.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
