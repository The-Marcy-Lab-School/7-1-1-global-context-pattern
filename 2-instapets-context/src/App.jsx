import "./App.css";
import Header from "./components/Header";
import PicturesList from "./components/PicturesList";
import { useState } from "react";

// 1. import the Context
import InstagramContext from "./context/InstagramContext";

const App = () => {
  const [totalLikes, setTotalLikes] = useState(0);
  const incrementTotalLikes = () => {
    setTotalLikes((totalLikes) => totalLikes + 1);
  }

  // 2. gather the context values
  const contextValues = { totalLikes, incrementTotalLikes }

  // 3. wrap the components in the Provider
  return (
    <>
      <InstagramContext.Provider value={contextValues}>
        <Header />
        <PicturesList />
      </InstagramContext.Provider>
    </>
  );
};

export default App;