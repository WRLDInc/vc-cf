import logo from './wrld.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WRLD.ltd is in Development
        </p>
        <a
          className="App-link"
          href="https://wrld.tech/contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Involved / Learn More
        </a>
      </header>
    </div>
  );
}

export default App;
