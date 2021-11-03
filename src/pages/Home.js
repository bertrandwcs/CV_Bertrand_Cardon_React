import React from "react";
import Navigation from "../components/Navigation";


const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Bertrand Cardon</h1>
          <h2>Web developer</h2>
          <div className="pdf">
            <a href="./media/CvBertrandCardon.pdf" target="_blank">Download the CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
