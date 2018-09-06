import React from "react";
import Ibeen from "./ibeen";
import Easemart from "./eas-e-mart";
import Dategrub from "./dategrub";
import Farmchoir from "./farm-choir";
import Tictactoe from "./tictactoe";

function Projects() {
  return (
  <div>
    <h2 className="projects">Projects:</h2>
    <Dategrub />
    <Ibeen />
    <Easemart />
    <Farmchoir />
    <Tictactoe />
  </div>
  );
}

export default Projects;
