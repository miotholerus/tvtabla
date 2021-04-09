import logo from './logo.svg';
import './App.css';
import ProgramList from './components/ProgramList';
import Sidebar from './components/Sidebar';

function App() {
  // const [channel, setChannel] = useState("SVT 1") ...

  return (
    <div className="App">
      <Sidebar /> {/* <Sidebar setChannel={(newChannel) => setChannel(newChannel)}/> skrev av från Henning, funkade ej*/}
      <ProgramList channelName="SVT 1" />
      
    </div>
  );
}

export default App;
