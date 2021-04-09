import React, {useEffect, useState} from 'react';

/*const Sidebar = () => {
    return (
        <div class="menu">
            <a class="menu__link" href="/svt1">SVT 1</a>
            <a class="menu__link" href="/svt2">SVT 2</a>
            <a class="menu__link" href="/svtbarn">SVT Barn</a>
            <a class="menu__link" href="/kunskapskanalen">Kunskapskanalen</a>
            <a class="menu__link" href="/svt24">SVT 24</a>
        </div>
    )
}*/



const Sidebar = ({setChannel}) => {

    const [channels, setChannelsFromJson] = useState([]);

    useEffect(() => {
        
        const fetchChannels = async () => {                     // kom tillbaka hit när map() är löst
            const response = await fetch('channels.json');
            const channelData = await response.json();

            /* samma sak som ovan, tror jag
            const channelData = await fetch('channels.json').then((response) => response.json()); */

            setChannelsFromJson(channelData);
        };

        if (!channels.length) { // om den är tom
            fetchChannels();
        }
        
    });

    // Genvägen:
    // useEffect(() => {
    //     fetch("channels.json").then(response => response.json().then(channelData => setChannelsFromJson(channelData)))
    // })

    return (
        <ul class="menu">
            {
                // channels.map(
                //     /*<li onclick="setChannel('SVT 1')">
                //         SVT 1
                //     </li> */

                //     <li class="menu__link" >
                //         {program.start}
                //         <br />
                //         {program.name}
                //     </li>
                // )
                channels.map((channel) => // channel - en entitet i json-listan
                    <li class="program-list__item">
                        {channel.title} {// de attribut vi vill visa
                        }
                    </li>
                )
                
            }
            
        </ul>
    )
}

export default Sidebar


/*{
    channels.map((channel) => // channel - en entitet i json-listan
        <li class="program-list__item">
            {channel.title} {// de attribut vi vill visa
            }
        </li>
    )
}*/


/* i inspect element på förlagan ser länkarna ut typ såhär:
<li onclick="setChannel('SVT 1')">
    ::marker
    SVT 1
</li>
*/