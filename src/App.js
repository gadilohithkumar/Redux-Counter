import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/Counter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Counter Application using Redux </h1>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
