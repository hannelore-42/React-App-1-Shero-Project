import React from 'react';
import './About.css';

function Sources() {
  return (
    <div className="Sources">
      <header className="App-header">
      </header>
      <div className="sourcecontainer1">
        <h3>Shero Information Sources</h3>
        <a href="https://en.wikipedia.org/wiki/Main_Page" rel="noreferrer" target="_blank">Wikipedia</a>
        <br></br>
        <a href="https://www.nobelprize.org/" rel="noreferrer" target="_blank">Nobel Prize Winners</a>
        <br></br>
        <p>
        Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a>
        </p>

      </div>
    </div>
  );
}

export default Sources;
