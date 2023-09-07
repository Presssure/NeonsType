// import React from 'react';
// import neon from "./assets/neon2.webp";
import styles from "./App.module.css";
import Nav from "./Nav/Nav";
import Landing from "./Landing/Landing";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div className={`${styles.app}`}>
      <Nav />
      <Landing />
      <Footer />
      {/* <img src={neon} /> */}
    </div>
  );
};

export default App;
