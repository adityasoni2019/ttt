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
  const [obj_hook, setObjHook] = useState([]);

  useEffect(() => {
    if (url) {
      axios.get(url).then((response) => {

        setData1(response.data);
      });
    }
  }, [url]);

  let wordMap = {};

  if (data1 && !loading) {

    setLoading(true);
    const words = data1.split(/[" "  ? \n . , \d \s \W]/);
    
    // adding words to the map.
    for (let i = 0; i < words.length; i++) {
      if (wordMap[words[i].toLowerCase()] >= 1) {
        wordMap[words[i].toLowerCase()] += 1;
      } else {
        wordMap[words[i].toLowerCase()] = 1;
      }
    }
    
    // 'obj' this is the sorted wordMap.
    let obj = Object.entries(wordMap).sort((a, b) => b[1] - a[1]);
    setObjHook(obj);
    const x = Object.values(obj);
  
    
    var labels = [];
    var values = [];

    for (let i = 1; i < 21; i++) {
      labels.push(x[i][0]);
      values.push(x[i][1]);
    }

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
      {/* <div>helo ths is some custom shit</div> */}
      {/* <div>{url && data1}</div> */}

      <div>{url && <Histogram_visual labels={xlabel} data={ylabel} />}</div>
      <div>{url && <div><Frequency mapi = {obj_hook}/></div>}</div>

    </>
  );
};

export default WordFreq;