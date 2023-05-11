
import './App.css';
import Dev from './Components/Dev/Dev';
import Mainfield from './Components/Mainfield/Mainfield';
import Theme from './Components/Theme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Theme/>
        {/* <h1>Jobayer</h1> */}
        <Mainfield/>
        <Dev/>
      </header>
    </div>
  );
}

export default App;
