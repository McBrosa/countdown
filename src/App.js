import './App.css';
import './style/countdown.css';
import DateCountdown from './containers/DateCountdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Countdown</h1>
      </header>
      <DateCountdown />
    </div>
  );
}

export default App;
