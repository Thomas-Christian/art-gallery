import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import Buttons from "./Buttons";
import "./App.css";

function App() {
  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value));
  };

  let [artId, setArtId] = useState(11111);
  let [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`
    )
      .then((response) => response.json())
      .then((resData) => setData(resData));
    document.title = `${data.title}`;
  }, [artId, data.title]);

  return (
    <div className="App">
      <div className="Container">
        <Gallery
          objectImg={data.primaryImage}
          artist={data.artistDisplayName}
          title={data.title}
          isPublicDomain={data.isPublicDomain}
        />

        <Buttons handleIterate={handleIterate} />
      </div>
    </div>
  );
}

export default App;
