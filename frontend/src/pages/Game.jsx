import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'
import ChoiceButton from '../components/ChoiceButton.jsx';

const Game = () => {
  const [rockVisible, setRockVisible] = useState(false);
  const [paperVisible, setPaperVisible] = useState(false);
  const [scissorsVisible, setScissorsVisible] = useState(false);
  const [idleLoop, setIdleLoop] = useState(true);
  const [rockPlaying, setRockPlaying] = useState(false);
  const [paperPlaying, setPaperPlaying] = useState(false);
  const [scissorsPlaying, setScissorsPlaying] = useState(false);
  const rockRef = useRef(null);
  const idleRef = useRef(null);
  const paperRef = useRef(null);
  const scissorsRef = useRef(null);

  const handleClick = ({ playerChoice }) => {

    const computerChoice = Math.floor((Math.random() * 3) + 1);
    console.log(computerChoice);

    // replace this with computer choice in future.
    if (computerChoice === 1) {
      setIdleLoop(false);
      setRockPlaying(true);
    }
    else if (computerChoice === 2) {
      setIdleLoop(false);
      setPaperPlaying(true);
    }
    else if (computerChoice === 3) {
      setIdleLoop(false);
      setScissorsPlaying(true);
    }
  }

  const handleIdleEnd = () => {
    if (rockPlaying) {
      if (rockRef.current) {
        rockRef.current.currentTime = 0;
        rockRef.current.play();
      }
      setRockVisible(true);
      // to prevent rock playing again.
      setRockPlaying(false);
    }
    else if (paperPlaying) {
      if (paperRef.current) {
        paperRef.current.currentTime = 0;
        paperRef.current.play();
      }
      setPaperVisible(true);
      // to prevent paper playing again.
      setPaperPlaying(false);
    }
    else if (scissorsPlaying) {
      if (scissorsRef.current) {
        scissorsRef.current.currentTime = 0;
        scissorsRef.current.play();
      }
      setScissorsVisible(true);
      // to prevent scissors playing again
      setScissorsPlaying(false);
    }
  }

  const printEnd = () => {
    console.log('rock video ended');
    setRockVisible(false);
  }

  return (
    <div className="relative w-full h-screen bg-neutral-700">
      {/* <video src={assets.idle} alt="" className="absolute z-10 w-full h-full object-cover" /> */}
      <video src={assets.idle} autoPlay muted loop={idleLoop} ref={idleRef} onEnded={handleIdleEnd} className='absolute z-20 w-full h-full object-cover'></video>
      <video
        ref={rockRef}
        src={assets.rock}
        autoPlay
        muted
        loop={false}
        onEnded={printEnd}
        playsInline
        className={`absolute z-30 w-full h-full object-cover transition-opacity duration-300 ${rockVisible ? "opacity-100" : "opacity-0"
          }`}
      />
      <video src={assets.paper} autoPlay muted loop={false} ref={paperRef} className={`absolute z-40 w-full h-full object-cover ${paperVisible ? 'opacity-100' : 'opacity-0'}`}></video>
      <video src={assets.scissors} autoPlay muted loop={false} ref={scissorsRef} className={`absolute z-40 w-full h-full object-cover ${scissorsVisible ? 'opacity-100' : 'opacity-0'}`}></video>
      <div className='absolute top-[75%] justify-evenly items-center z-40 flex gap-[10vw] w-full'>

        <div onClick={() => handleClick({ playerChoice: 'rock' })}>
          <ChoiceButton text={'rock'}
            onClick={() =>
              handleClick({ playerChoice: 'rock' })}
            className="border-4 border-white bg-neutral-200 text-[2vw] px-10 py-2 hover:border-black"
          />
        </div>

        <div onClick={() => handleClick({ playerChoice: 'paper' })}>
          <ChoiceButton text={'paper'}
            onClick={() =>
              handleClick({ playerChoice: 'paper' })}
            className="border-4 border-white bg-neutral-200 text-[2vw] px-10 py-2 hover:border-black"
          />
        </div>

        <div onClick={() => handleClick({playerChoice: 'scissors'})}>
          <ChoiceButton text={'scissors'}
            onClick={() =>
              handleClick({ playerChoice: 'scissors' })}
            className="border-4 border-white bg-neutral-200 text-[2vw] px-10 py-2 hover:border-black"
          />
        </div>
      </div>
    </div>
  )
}

export default Game
