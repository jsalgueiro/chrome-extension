import React from 'react';
import './App.scss';

function App() {
  const bmacURL = 'https://www.buymeacoffee.com/jsalgueiro';
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={'bmc_qr.png'}
          className="qr-code"
          alt={`BuyMeACoffee Jose Salgueiro ${bmacURL}`}
          onClick={() => window.open(bmacURL, '_blank')} />
      </header>
    </div>
  );
}

export default App;
