import React, {useEffect, useState} from 'react';

const ProgramList = ({channelName}) => { // const channelName = "SVT 1"

    const url = "https://tv-api-p2x2o.ondigitalocean.app/" + channelName + ".json"; // `https://tv-api-p2x2o.ondigitalocean.app/${channelName}.json`
    
    const [programs, setProgramsFromJson] = useState([]); // från början en tom array

    useEffect(async () => {
        const response = await fetch(url); 
        const programData = await response.json();
        
        setProgramsFromJson(programData);    
        
    }, [channelName]); // the way we determine when to call this function is that we pass an array of properties (all our dependencies)

    return (<div>
        <h1 className="channel-title">
            {channelName}
        </h1>
        <ul className="program-list">
            {
                programs.map((program) => 
                    <li className="program-list__item">
                        {program.start.substring(11, 16)}
                        <br />
                        {program.name}
                    </li>
                )
            }
            
            {/* programs.map((program) => // channel - en entitet i json-listan
                <li class="program-list__item">
                    {channel.title} {// de attribut vi vill visa
                    }
                </li>
            ) */}

            {/* <li class="program-list__item">
                13:30<br/>
                Alpint: VM
            </li>
            <li class="program-list__item">
                14:30<br/>
                Vinterstudion
            </li> */}
        </ul>
    </div>
    )
}

export default ProgramList;