import { useState, useEffect } from 'react';
import './App.css';



function App() {

  const [counter, setCounter] = useState(1);
  const [message, setMessage] = useState('loading...');
  const [useSignal, setUseSignal] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    console.log(`Hitting http://localhost:8080/${counter}`)
    fetch(`http://localhost:8080/${counter}`, { signal: useSignal ? signal : undefined })
      .then(async (res) => {
        const response = await res.text();
        setMessage(response);
      })
      .catch(err => {
        console.warn(err);
      });
    return () => {
      controller.abort();
    }
  }, [counter]);

  return (
    <div className="App">
      <h1>
        Value: {counter}
      </h1>
      <h2>
        {message}
      </h2>
      <button onClick={() => { setCounter(counter + 1)}}>Increment!</button>
      <br/>
      <button onClick={() => { setUseSignal(!useSignal) }}>
        {
          useSignal ? 'Disable signal' : 'Enable signal'
        }
      </button>
    </div>
  );
}

export default App;
