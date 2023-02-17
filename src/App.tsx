import React, {useEffect, useState} from 'react';
import './App.css';
import {TrainingTable} from "./components/TrainingTable/TrainingTable";


function App() {
  return (
    <div className={"list-container"}>
      <h1>Kamaé List project</h1>
      <TrainingTable/>
    </div>
  );
}

export default App;
