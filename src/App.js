import { useEffect } from 'react';
import './App.css';
import { Series, readCSV } from "danfojs-nightly";
import {DataFrame} from "danfojs";

function App() {

  
  useEffect(() => {

const df = new DataFrame({'walk': [20, 18, 489, 675, 1776],
                               'ride': [4, 25, 281, 600, 1900]}, {index: [1990, 1997, 2003, 2009, 2014]})


 const layoutXXX = {
          title: {
            text: "Time series plot of AAPL open and close points",
            x: 0
          },
          legend: {
            bgcolor: "#fcba03",
            bordercolor: "#444",
            borderwidth: 1,
            font: { family: "Arial", size: 10, color: "#fff" }
          },
          width: 1000,
          yaxis: {
            title: 'AAPL open points',
          },
          xaxis: {
            title: 'Date',
          },
        }

const layout = {
 
          width: 1000,
          plot_bgcolor:"#00BBAA",
          paper_bgcolor:"#00BB55",
          yaxis: {
            title: '1000 km',
          },
          xaxis: {
            title: 'Year',
          }          
}

const config = {
}

        const configXXX = {
          columns: ["AAPL.Open", "AAPL.Close"], //columns to plot
          displayModeBar: true,
          displaylogo: false,
        }
        //df.plot("plot_div").line({ layout, config })


        df.plot("plot_div").bar({ layout, config })

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