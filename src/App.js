import Histogram_visual from "./Components/Histogram_visual";

import Frequency from "./Components/Frequency";
import Submit from "./Components/Submit";
import WordFreq from "./Files/WordFreq";
/*

Develop a frontend in Reactjs or Nextjs, which does the following:

1. On first load, only has a Submit button
2. On clicking on Submit, it will fetch the contents of terriblytinytales.com/test.txt
3. Parse the content and find the frequency of occurrence of each word (some words will occur only once, some twice and so on, and some will occur N times)
4. Then on the frontend, plot a histograms of the 20 most occurring words.

X-axis = top 20 words with highest occurrence
Y-axis = how many times they occurred in the file

Expected solution:
1. The source code should be uploaded to github along with a readme file. Readme must explain components of the code and mention all libraries and plugins used.

2. Extra points for hosting this solution on Heroku/Netlify or somewhere online.

*/

function App() {
  return (
    <div className="App">
      
      {/* <Submit/> */}
      <WordFreq/>
      {/* <Histogram_visual/> */}

    </div>
  );
}

export default App;
