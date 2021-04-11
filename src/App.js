//import logo from './logo.svg';
import './App.css';
import ProgramList from './components/ProgramList';
import Sidebar from './components/Sidebar';
import {useState} from 'react';

function App() {
  const [channel, setChannel] = useState("SVT 1");

  return (
    <div className="App">
      <Sidebar setChannel={setChannel}/> {/* <Sidebar setChannel={(newChannel) => setChannel(newChannel)}/> skrev av från Henning, funkade ej*/}
      <ProgramList channelName={channel} />
      
    </div>
  );
}

export default App;
