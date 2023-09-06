// import React from 'react';
// import neon from "./assets/neon2.webp";
import styles from "./App.module.css";
import Nav from "./Nav/Nav";
import Landing from "./Landing/Landing";

const App = () => {
  return (
    <div className={`${styles.app}`}>
      <Nav />
      <Landing />
      {/* <img src={neon} /> */}
    </div>
  );
};

export default App;
