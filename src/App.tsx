import { useState } from 'react'
import appLogo from './assets/logo-transparent.png'
import useSound from 'use-sound';
import ost from './assets/you-say-run-ost.mp3';
import './App.css'

function App() {
  const [play] = useSound(ost);
  const [animate, setAnimate] = useState(false);

  const startAnimation = () => {
    play();
    setTimeout(() => setAnimate(true), 750)
    
  }

  // useEffect(() => {
  //   play()
  // }, [play])

  return (
    <div className={`container ${animate?'animate':''}`}>
      <div className='content'>
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={appLogo} className={`logo ${animate?'animate':''}`} alt="React logo" />
          </a>
        </div>
        <h1>Ready to Plus Ultra ?</h1>
        <div className={`card ${animate?'fade-out':''}`}>
          <button onClick={startAnimation}>
            Play !
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
