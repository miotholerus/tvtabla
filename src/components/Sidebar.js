import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

const Sidebar = ({ setChannel }) => {
  let history = useHistory();

  function handleChannelChange(e, channel, link) {
    e.preventDefault();

    // Gå till rätt adress
    // setChannel?
  }

  return (
    <div className="menu">
      <a className="menu__link" onClick={(e) => handleChannelChange(e, "SVT 1", "/svt1")}>SVT 1</a> {/* Hantera länkarna i handle... */}
      <a className="menu__link" onClick={(e) => handleChannelChange(e, "SVT 1", "/svt1")}>SVT 2</a>
      <a className="menu__link" onClick={() => setChannel("SVT Barn")}>SVT Barn</a>
      <a className="menu__link" onClick={() => setChannel("Kunskapskanalen")}>Kunskapskanalen</a>
      <a className="menu__link" onClick={() => setChannel("SVT 24")}>SVT 24</a>
    </div>
  )
}

// const Sidebar = (setChannel) => {

//     const [channels, setChannelsFromJson] = useState([]);

//     useEffect(() => {

//         const fetchChannels = async () => {
//             const response = await fetch('channellist.json');
//             const channelData = await response.json();

//             setChannelsFromJson(channelData);
//         };

//         if (!channels.length) { // om den är tom
//             fetchChannels();
//         }

//     });

//     // Genvägen:
//     // useEffect(() => {
//     //     fetch("channellist.json").then(response => response.json().then(channelData => setChannelsFromJson(channelData)))
//     // })

//     /*const renderListItem = () =>*/ return (
//         <ul class="menu">
//             {
//                 // channels.map(
//                 //     /*<li onclick="setChannel('SVT 1')">
//                 //         SVT 1
//                 //     </li> */

//                 //     <li class="menu__link" >
//                 //         {program.start}
//                 //         <br />
//                 //         {program.name}
//                 //     </li>
//                 // )
//                 channels.map((channel) => // channel - en entitet i json-listan
//                     // <li onclick={() => setChannel(channel.title)}> {/* "setChannel('SVT 1')"*/}
//                     //     {/*::marker*/
//                     //     channel.title}
//                     // </li>
//                     <a class="menu__link" href={channel.url} onklick={() => setChannel(channel.title)}>
//                         {channel.title} {// de attribut vi vill visa
//                         // vad gör vi med url och endpoint
//                         }
//                     </a>
//                 )

//             }

//         </ul>
//     )
// }

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