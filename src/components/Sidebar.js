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

    const [channels, setChannelFromJson] = useState([]);

    useEffect = () => {
        if (!channels.length) { // om den är tom
            const channelData = await fetch(
                'channels.json'
            ).then((response) => response.json());

            setChannelFromJson(channelData);
        }
    }

    return (
        <ul class="menu">
            {
                channels.map(
                    /*<li onclick="setChannel('SVT 1')">
                        SVT 1
                    </li>

                    <li class="menu__link" >
                        {program.start}
                        <br />
                        {program.name}
                    </li>*/
                )
            }
            
        </ul>
    )
}

export default Sidebar



/* i inspect element på förlagan ser länkarna ut typ såhär:
<li onclick="setChannel('SVT 1')">
    ::marker
    SVT 1
</li>
*/