import { useEffect } from 'react';
import './App.css';
import { Series, readCSV } from "danfojs-nightly";
import {DataFrame} from "danfojs";

function App() {

  
  useEffect(() => {

const df = new DataFrame({'pig': [20, 18, 489, 675, 1776],
                               'horse': [4, 25, 281, 600, 1900]}, {index: [1990, 1997, 2003, 2009, 2014]})
        df.plot("plot_div").bar()

/*    
readCSV("https://raw.githubusercontent.com/pandas-dev/pandas/master/doc/data/titanic.csv")
      .then(df => {

        df.plot("plot_div").table()
      }).catch(err => {
        console.log(err);
      })
*/

  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <div id="plot_div"></div>
      </header>
    </div>
  );
}

export default App;

/*
import "./App.css";
import * as dfd from "danfojs";

function App() {

  const df = new dfd.DataFrame(
    { pig: [20, 18, 489, 675, 1776], horse: [4, 25, 281, 600, 1900] },
    { index: [1990, 1997, 2003, 2009, 2014] }
  );
  //df.head().print()
  df.plot("plot_div").table()


  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://danfo.jsdata.org/getting-started"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Danfojs 
        </a>
        <div id="plot_div"></div>
        <div></div>
        
      </header>
    </div>
  );
}

export default App;
*/