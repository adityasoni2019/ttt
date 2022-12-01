// this is the function for counting the frequencies of every word.

import axios from "axios";
import React, { useState, useEffect } from "react";
import Histogram_visual from "../Components/Histogram_visual";

const baseURL = "https://www.terriblytinytales.com/test.txt";

const WordFreq = () => {
  const [data1, setData1] = useState(null);
  const [url, setUrl] = useState(null);
  const [frequencyMapSorted, setFrequencyMapSorted] = useState([]);
  const [loading, setLoading] = useState(false);
  const [xlabel, setXlabel] = useState([]);
  const [ylabel, setYlabel] = useState([]);

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

    // let words = data.split(/[" " ? \n]/);
    // let words = data.split(/[" " ? \n . \d \s]/);
    // let words = data.split(/[" " "" ? \n . , \d \s \W]/);
    setLoading(true);
    // try {
    const words = data1.split(/[" "  ? \n . , \d \s \W]/);
    // } catch (error) {
    //   const words = " "
    // }
    console.log(words)
    // ., " ", /n, ?

    for (let i = 0; i < words.length; i++) {
      if (wordMap[words[i].toLowerCase()] >= 1) {
        wordMap[words[i].toLowerCase()] += 1;
      } else {
        wordMap[words[i].toLowerCase()] = 1;
        // wordMap.set(words[i].toLowerCase(),1);
      }
    }
    //console.log(wordMap.entries());
    //console.log(wordMap);

    const obj = Object.entries(wordMap).sort((a, b) => b[1] - a[1]);

    //console.log(obj)

    // console.log(obj.keys())
    // console.log(obj.values())

    const x = Object.values(obj)

    var labels = []
    var values = []

    for (let i = 0; i < 20; i++) {
      labels.push(x[i][0])
      values.push(x[i][1])
    }

    console.log(labels);
    console.log(values);

    setXlabel(labels);
    setYlabel(values);

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

      {data1 && <Histogram_visual labels={xlabel} data={ylabel} />}

    </>

  );
};

export default WordFreq;