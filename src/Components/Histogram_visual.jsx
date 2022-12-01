import Histogram from 'react-chart-histogram';
import WordFreq from '../Files/WordFreq';

// WordFreq 

function Histogram_visual(props){
    const labels = ['2016', '2017', '2018'];
    const data = [324, 45, 672];
    const options = { fillColor: '#FFFFFF', strokeColor: '#0000FF' };


    console.log(WordFreq);

    return(
        
          <div>
          <Histogram
              xLabels={props.labels}
              yValues={props.data}
              width='400'
              height='200'
              options={options}
              />
        </div>
      
    ) 

}

export default Histogram_visual;