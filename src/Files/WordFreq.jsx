// this is the function for counting the frequencies of every word.

import axios from "axios";
import React, { useState, useEffect } from "react";
import Histogram_visual from "../Components/Histogram_visual";


const baseURL = "https://www.terriblytinytales.com/test.txt";

const WordFreq = () => {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(null);
  const [frequencyMapSorted, setFrequencyMapSorted] = useState([]);

  const[xlabel, setXlabel] = useState([]);
  const[ylabel, setYlabel] = useState([]);

  useEffect(() => {
    if (url) {
      axios.get(url).then((response) => {
        console.log(response.data);
        setData(response.data);
      });
    }
  }, [url]);

  let wordMap = new Map();

  if (data) {

    // let words = data.split(/[" " ? \n]/);
    // let words = data.split(/[" " ? \n . \d \s]/);
    // let words = data.split(/[" " "" ? \n . , \d \s \W]/);
    let words = data.split(/[" "  ? \n . , \d \s \W]/);

    // ., " ", /n, ?

    for (let i = 0; i < words.length; i++) {
      if (wordMap[words[i].toLowerCase()] >=1) {
        wordMap[words[i].toLowerCase()] += 1;
      } else {
        wordMap[words[i].toLowerCase()] = 1;
        // wordMap.set(words[i].toLowerCase(),1);
      }
    }
    const _frequencyMapSorted = new Map([...wordMap.entries()].sort((a, b) => a[1] - b[1]));
    setFrequencyMapSorted(_frequencyMapSorted);



    console.log(frequencyMapSorted);

    // sorting. wordMap  {name, freq} 
  }

  const handleClick = () => {
    if (url) {
      setUrl(null);
    } else {
      setUrl(baseURL);
    }
  };

  
  return (
    <>
      <button onClick={handleClick}>SUBMIT</button>

      <div>{url && data}</div>
      {/* {url && <Histogram_visual props = {wordMap}/>} */}

    </>

   
  );
};

export default WordFreq;