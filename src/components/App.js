import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { Loader } from "./Loader";
import { PhotoFrame } from "./PhotoFrame";

const App = () => {
  const [id, setId] = useState();
  const [loading, setLoading] = useState(false);
  const [imgData, setImgData] = useState();

  const handleNumber = (e) => {
    const number = e.target.value;
  };
  return (
    <div id="main">
      Id number&nbsp;
      <input type="number" value={id} onChange={handleNumber} />
      {loading ? (
        <Loader />
      ) : !loading && imgData && id !== 0 ? (
        <PhotoFrame id={imgData.id} url={imgData.url} title={imgData.title} />
      ) : null}
    </div>
  );
};

export default App;
