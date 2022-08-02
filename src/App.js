import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import './App.css';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Mint from './components/mint/Mint';

import Nav from './components/nav/Nav';

function App() {
  const [accounts, setAccounts] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  const isConnect = Boolean(accounts[0]);

  useEffect(() => {
    // Setup Listeners on Metamast event changes
    if (window.ethereum) {
      // Add Listener when accounts switch
      window.ethereum.on("accountsChanged", (accounts) => {
        toast.info('Your account has been changed', {
          position: "top-center",
          autoClose: 9000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        
        setAccounts(accounts);
      });
      // Do something when chain changes
      window.ethereum.on("chainChanged", (chainId) => {
        toast.info('Login again to switch to Ethereum mainnet', {
          position: "top-center",
          autoClose: 9000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        setAccounts([]);
        setIsConnected(false);
      });
    } else {
      toast.error('Please install Metamask to use this app', {
        position: "top-center",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }, [isConnected]);

  return (
    <div className="App">
      <Nav accounts={accounts} setAccounts={setAccounts} setIsConnected={setIsConnected} />
      <Hero />
      { isConnect && <Mint />}
      <About />
    </div>
  );
}

export default App;
