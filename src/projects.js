import React from "react";
import Ibeen from "./ibeen";
import Easemart from "./eas-e-mart";
import Dategrub from "./dategrub";
import Farmchoir from "./farm-choir";
import Tictactoe from "./tictactoe";
import Sunny from "./sunny";
import Llama from "./llama";
import Miatelier from "./miatelier";


function Projects() {
  return (
    <div>
      <h2 className="projects">Projects:</h2>
      <Miatelier />
      <Llama />
      <Dategrub />
      <Ibeen />
      <Easemart />
      <Sunny />
      <Farmchoir />
      <Tictactoe />
    </div>
  );
}

export default Projects;
