// This component would basically have the frequency of every word.
// For which, we would require to get the "frequencyMap" (hash map, which has data in a sorted format) from somewhere. 

import React from "react";
import { Table } from 'reactstrap';

function Frequency(props){

    console.log(props.mapi);
    return(
        <>
            <Table dark>
                <thead>
                    <tr>
                        <th>Words</th>
                        <th>Frequency</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        props.mapi.map((map_element) => (
                            <tr>
                                <td>{map_element[0]}</td>
                                <td>{map_element[1]}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
}

export default Frequency; 

        //     Hello
        //    {/* <div>total words{props.mapi.length}</div> */}
        //    <div>
        //         {
        //             props.mapi.map((word) =>(
        //                 <p>Word is : {word[0]} &  Count is: {word[1]}</p>
        //             ))
        //         }
        //    </div>