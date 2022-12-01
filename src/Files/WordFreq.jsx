// this is the function for counting the frequencies of every word.

import axios from "axios";
import React, { useState, useEffect } from "react";
import Histogram_visual from "../Components/Histogram_visual";

const baseURL = "https://www.terriblytinytales.com/test.txt";

const WordFreq = () => {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(null);
  const [frequencyMapSorted, setFrequencyMapSorted] = useState([]);

  const [xlabel, setXlabel] = useState([]);
  const [ylabel, setYlabel] = useState([]);

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
      if (wordMap[words[i].toLowerCase()] >= 1) {
        wordMap[words[i].toLowerCase()] += 1;
      } else {
        wordMap[words[i].toLowerCase()] = 1;
        // wordMap.set(words[i].toLowerCase(),1);
      }
    }

    const _frequencyMapSorted = new Map([...wordMap.entries()].sort((a, b) => a[1] - b[1]));
    // this ^ has the data in a sorted (descneding) format. And, this is a map. 

    // Now, we want
    // 1.  the data of the first 20 pairs in this map.
    //      a. delete values after 20 
    //      b. or store the first 20 values in a different map. -> this is more pref.
    // 
    // 2.  and then, divide the data in 2 arrays like this - 
    //      a. const labels = ['2016', '2017', '2018'];
    //      b. const data = [324, 45, 672];

    // creating a new map, which would have the data of first 20. or even better, removing the data of anything more than 20.

    setFrequencyMapSorted(_frequencyMapSorted);

    const first_20_values = new Map();

    let i=0;
    for (let [key, value] of _frequencyMapSorted) {
      i++;
      if(i>=20) break;
      else first_20_values.set(key, value);
    }

    console.log(frequencyMapSorted);
    console.log("Hello, there are the 20 values");
    console.log(first_20_values);

    let labels = []; 
    let data = []; 

    let j =0;
    for (let [key, value] of first_20_values) {
      j++;
      labels[j] = key;
      data[j] = value;
    }

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