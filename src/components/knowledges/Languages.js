import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 3 },
      { id: 2, value: "Html5 / Css3", xp: 3 },
      { id: 3, value: "NodeJs /Express", xp: 0.8 },
      { id: 4, value: "React", xp: 2.5 },
      { id: 5, value: "Redux", xp: 0.6 },
      { id: 6, value: "SQL", xp: 0.5 },
    ],
    frameworks: [
      { id: 1, value: "VS code", xp: 3 },
      { id: 2, value: "Bootstrap", xp: 2 },
      { id: 3, value: "Sass", xp: 1 },
      { id: 4, value: "Material UI", xp: 1 },
      { id: 5, value: "GIT", xp: 2 },
      { id: 6, value: "Agile medodology", xp: 2.6 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages & frameworks"
        />
        <ProgressBar
          languages={frameworks}
          title="Devlopment tools & libraries"
          className="frameworksDisplay"
        />
      </div>
    );
  }
}

export default Languages;
