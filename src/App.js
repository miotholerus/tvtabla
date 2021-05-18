//import logo from './logo.svg';
import './App.css';
import ProgramList from './components/ProgramList';
import Sidebar from './components/Sidebar';
import {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [channel, setChannel] = useState("SVT 1");

  //var currentChannel = "SVT Barn"; // temp

  // useEffect(() => {
    
  //   // return () => {
  //   //   cleanup
  //   // }
  // }, [channel])

  // function switchChannel(newChannel) {
  //   setChannel(newChannel);
  // }

  const svt1 = "SVT 1";
  const svt2 = "SVT 2";
  const svtBarn = "SVT Barn";
  const kunskap = "Kunskapskanalen";
  const svt24 = "SVT 24";

  return (
    <div className="App">
      <Router>
        <Sidebar setChannel={setChannel} /> {/* <Sidebar setChannel={(newChannel) => setChannel(newChannel)}/> skrev av från Henning, funkade ej*/}
        
        <Switch>
          <Route path="/svt1">
            <ProgramList channel={svt1} /*channelName={channel}*/ />
          </Route>
          <Route path="/svt2">
            <ProgramList channel={svt2} /*channelName={channel}*/ />
          </Route>
          <Route path="/svtbarn">
            <ProgramList channel={svtBarn} /*channelName={channel}*/ />
          </Route>
          <Route path="/kunskapskanalen">
            <ProgramList channel={kunskap} /*channelName={channel}*/ />
          </Route>
          <Route path="/svt24">
            <ProgramList channel={svt24} /*channelName={channel}*/ />
          </Route>
        </Switch>
      </Router>
      
      
      <ProgramList channel={channel} /*channelName={channel}*/ />
      
    </div>
  );
}

export default App;
