import React, {useEffect, useState} from 'react';

const ProgramList = () => {
    
    const [programs, setPrograms] = useState([]); // från början en tom array

    useEffect(() => {
        const fetchPrograms = async () => {
            const programData = await fetch(
                'https://tv-api-p2x2o.ondigitalocean.app/SVT 1.json'
            ).then((res) => res.json());
            
            setPrograms(programData);
        };
        if(!programs.length) {
            fetchPrograms();
        }
    })


    return (<div>
        <h1 class="channel-title">
            SVT 1
        </h1>
        <ul class="program-list">
            {
                programs.map((program) => 
                    <li class="program-list__item">
                        {program.start}
                        <br />
                        {program.name}
                    </li>
                )
            }
            

            {/* <li class="program-list__item">
                13:30<br/>
                Alpint: VM
            </li>
            <li class="program-list__item">
                14:30<br/>
                Vinterstudion
            </li> */}
        </ul>
    </div>)
}

export default ProgramList;