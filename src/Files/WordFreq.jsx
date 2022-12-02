// This is for rendering histogram, and printing histogram.

import axios from "axios";
import React, { useState, useEffect } from "react";
import Histogram_visual from "../Components/Histogram_visual";
import Frequency from "../Components/Frequency";

const baseURL = "https://www.terriblytinytales.com/test.txt";

const WordFreq = () => {
  const [data1, setData1] = useState(null);
  const [url, setUrl] = useState(null);
  const [frequencyMapSorted, setFrequencyMapSorted] = useState([]);
  const [loading, setLoading] = useState(false);
  const [xlabel, setXlabel] = useState([]);
  const [ylabel, setYlabel] = useState([]);
  const [table, setTable] = useState([]);

  useEffect(() => {
    if (url) {
      axios.get(url).then((response) => {
        console.log(response.data);
        setData1(response.data);
      });
    }
  }, [url]);

  let wordMap = {};

  if (data1 && !loading) {
    setLoading(true);
    
    const words = data1.split(/[" "  ? \n . , \d \s \W]/);
    
    console.log(words)

    for (let i = 0; i < words.length; i++) {
      if (wordMap[words[i].toLowerCase()] >= 1) {
        wordMap[words[i].toLowerCase()] += 1;
      } else {
        wordMap[words[i].toLowerCase()] = 1;
        
      }
    }

    const obj = Object.entries(wordMap).sort((a, b) => b[1] - a[1]);

    const x = Object.values(obj);

    var labels = []
    var values = []

    var temp = [];

    
    for (let i = 0; i < 20; i++) {
      labels.push(x[i][0]);

      values.push(x[i][1]);
      let y = {};
      y[x[i][0]] = x[i][1];
      temp.push(y); 
    }

    console.log(labels);
    console.log(values);

    setXlabel(labels);
    setYlabel(values);
    setTable(temp);
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
      <div>{url && data1}</div>
      {data1  && <Histogram_visual labels={xlabel} data={ylabel} />}
    </>

  );
};

export default WordFreq;