import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'
import ChoiceButton from '../components/ChoiceButton.jsx';

const Game = () => {

  const [rockRockVisible, setRockRockVisible] = useState(false);
  const [rockPaperVisible, setRockPaperVisible] = useState(false);
  const [rockScissorsVisible, setRockScissorsVisible] = useState(false);

  const [paperPaperVisible, setPaperPaperVisible] = useState(false);
  const [paperRockVisible, setPaperRockVisible] = useState(false);
  const [paperScissorsVisible, setPaperScissorsVisible] = useState(false);

  const [scissorsScissorsVisible, setScissorsScissorsVisible] = useState(false);
  const [scissorsRockVisible, setScissorsRockVisible] = useState(false);
  const [scissorsPaperVisible, setScissorsPaperVisible] = useState(false);

  

  const [idleLoop, setIdleLoop] = useState(true);
  const idleRef = useRef(null);



  const [rockRockPlaying, setRockRockPlaying] = useState(false);
  const [rockPaperPlaying, setRockPaperPlaying] = useState(false);
  const [rockScissorsPlaying, setRockScissorsPlaying] = useState(false);

  const [paperPaperPlaying, setPaperPaperPlaying] = useState(false);
  const [paperRockPlaying, setPaperRockPlaying] = useState(false);
  const [paperScissorsPlaying, setPaperScissorsPlaying] = useState(false);

  const [scissorsScissorsPlaying, setScissorsScissorsPlaying] = useState(false);
  const [scissorsRockPlaying, setScissorsRockPlaying] = useState(false);
  const [scissorsPaperPlaying, setScissorsPaperPlaying] = useState(false);



  const rockRockRef = useRef(null);
  const rockPaperRef = useRef(null);
  const rockScissorsRef = useRef(null);

  const paperPaperRef = useRef(null);
  const paperRockRef = useRef(null);
  const paperScissorsRef = useRef(null);

  const scissorsScissorsRef = useRef(null);
  const scissorsRockRef = useRef(null);
  const scissorsPaperRef = useRef(null);



  const [choice, setChoice] = useState(null);
  const [npcChoice, setNpcChoice] = useState(null);
  const [winLoss, setWinLoss] = useState(null);

  const [buttonsVisible, setButtonsVisible] = useState(true);

  const handleClick = ({ playerChoice }) => {

    // make buttons invisible on click
    setButtonsVisible(false);

    // set player's choice
    setChoice(playerChoice);

    // generate computer choice
    const computerChoice = Math.floor((Math.random() * 3) + 1);
    const compChoice = computerChoice ===  1 ? 'rock' : computerChoice === 2 ? 'paper' : 'scissors';
    setNpcChoice(compChoice);
    console.log(computerChoice);

    // set win or lose
    if(compChoice === 'rock' && playerChoice === 'rock' || compChoice === 'paper' && playerChoice === 'paper' || compChoice === 'scissors' && playerChoice === 'scissors') {
      setWinLoss('draw');
    }
    else if(compChoice === 'rock' && playerChoice === 'paper' || compChoice === 'paper' && playerChoice === 'scissors' || compChoice === 'scissors' && playerChoice === 'rock') {
      setWinLoss('win');
    }
    else
    {
      setWinLoss('lose');
    }


    if (compChoice === 'rock' && playerChoice === 'rock') {
      setIdleLoop(false);
      setRockRockPlaying(true);
    }
    else if(compChoice === 'paper' && playerChoice === 'rock')
    {
      setIdleLoop(false);
      setRockPaperPlaying(true);
    }
    else if(compChoice === 'scissors' && playerChoice === 'rock')
    {
      setIdleLoop(false);
      setRockScissorsPlaying(true);
    }
    else if (compChoice === 'paper' && playerChoice === 'paper') {
      setIdleLoop(false);
      setPaperPaperPlaying(true);
    }
    else if(compChoice === 'rock' && playerChoice === 'paper')
    {
      setIdleLoop(false);
      setPaperRockPlaying(true);
    }
    else if(compChoice === 'scissors' && playerChoice === 'paper')
    {
      setIdleLoop(false);
      setPaperScissorsPlaying(true);
    }
    else if (compChoice === 'scissors' && playerChoice === 'scissors') {
      setIdleLoop(false);
      setScissorsScissorsPlaying(true);
    }
    else if (compChoice === 'rock' && playerChoice === 'scissors') {
      setIdleLoop(false);
      setScissorsRockPlaying(true);
    }
    else if (compChoice === 'paper' && playerChoice === 'scissors') {
      setIdleLoop(false);
      setScissorsPaperPlaying(true);
    }
  }

  const handleIdleEnd = () => {
    if (rockRockPlaying) {
      if (rockRockRef.current) {
        rockRockRef.current.currentTime = 0;
        rockRockRef.current.play();
      }
      setRockRockVisible(true);
      // to prevent rock playing again.
      setRockRockPlaying(false);
    }
    else if(rockPaperPlaying)
    {
      if(rockPaperRef.current)
      {
        rockPaperRef.current.currentTime = 0;
        rockPaperRef.current.play();
      }
      setRockPaperVisible(true);
      setRockPaperPlaying(false);
    }
    else if(rockScissorsPlaying)
    {
      if(rockScissorsRef.current)
      {
        rockScissorsRef.current.currentTime = 0;
        rockScissorsRef.current.play();
      }
      setRockScissorsVisible(true);
      setRockScissorsPlaying(false);
    }
    else if (paperPaperPlaying) {
      if (paperPaperRef.current) {
        paperPaperRef.current.currentTime = 0;
        paperPaperRef.current.play();
      }
      setPaperPaperVisible(true);
      // to prevent paper playing again.
      setPaperPaperPlaying(false);
    }
    else if (paperRockPlaying) {
      if(paperRockRef.current)
      {
        paperRockRef.current.currentTime = 0;
        paperRockRef.current.play();
      }
      setPaperRockVisible(true);
      setPaperRockPlaying(false);
    }
    else if (paperScissorsPlaying) {
      if(paperScissorsRef.current)
      {
        paperScissorsRef.current.currentTime = 0;
        paperScissorsRef.current.play();
      }
      setPaperScissorsVisible(true);
      setPaperScissorsPlaying(false);
    }
    else if (scissorsScissorsPlaying) {
      if (scissorsScissorsRef.current) {
        scissorsScissorsRef.current.currentTime = 0;
        scissorsScissorsRef.current.play();
      }
      setScissorsScissorsVisible(true);
      // to prevent scissors playing again
      setScissorsScissorsPlaying(false);
    }
    else if (scissorsRockPlaying) {
      if (scissorsRockRef.current) {
        scissorsRockRef.current.currentTime = 0;
        scissorsRockRef.current.play();
      }
      setScissorsRockVisible(true);
      setScissorsRockPlaying(false);
    }
    else if (scissorsPaperPlaying) {
      if (scissorsPaperRef.current) {
        scissorsPaperRef.current.currentTime = 0;
        scissorsPaperRef.current.play();
      }
      setScissorsPaperVisible(true);
      setScissorsPaperPlaying(false);
    }
  }

  const printEnd = () => {
    console.log('rock video ended');
    setRockRockVisible(false);
  }

  return (
    <div className="relative w-full h-screen bg-neutral-700">
      {/* <video src={assets.idle} alt="" className="absolute z-10 w-full h-full object-cover" /> */}
      <video src={assets.idle} autoPlay muted loop={idleLoop} ref={idleRef} onEnded={handleIdleEnd} className='absolute z-20 w-full h-full object-cover'></video>
      <video
        ref={rockRockRef}
        src={assets.rock_rock}
        muted
        loop={false}
        onEnded={printEnd}
        playsInline
        className={`absolute z-30 w-full h-full object-cover transition-opacity duration-300 ${rockRockVisible ? "opacity-100" : "opacity-0"
          }`}
      />
      <video src={assets.rock_paper} autoPlay muted loop={false} ref={rockPaperRef} className={`absolute z-40 w-full h-full object-cover ${rockPaperVisible ? 'opacity-100' : 'opacity-0'}`}></video>
      <video src={assets.rock_scissors} autoPlay muted loop={false} ref={rockScissorsRef} className={`absolute z-40 w-full h-full object-cover ${rockScissorsVisible ? 'opacity-100' : 'opacity-0'}`}></video>
      <video src={assets.paper_paper} autoPlay muted loop={false} ref={paperPaperRef} className={`absolute z-40 w-full h-full object-cover ${paperPaperVisible ? 'opacity-100' : 'opacity-0'}`}></video>
      <video src={assets.paper_rock} autoPlay muted loop={false} ref={paperRockRef} className={`absolute z-40 w-full h-full object-cover ${paperRockVisible ? 'opacity-100' : 'opacity-0'}`}></video>
      <video src={assets.paper_scissors} autoPlay muted loop={false} ref={paperScissorsRef} className={`absolute z-40 w-full h-full object-cover ${paperScissorsVisible ? 'opacity-100' : 'opacity-0'}`}></video>
      <video src={assets.scissors_scissors} autoPlay muted loop={false} ref={scissorsScissorsRef} className={`absolute z-40 w-full h-full object-cover ${scissorsScissorsVisible ? 'opacity-100' : 'opacity-0'}`}></video>
      <video src={assets.scissors_rock} autoPlay muted loop={false} ref={scissorsRockRef} className={`absolute z-40 w-full h-full object-cover ${scissorsRockVisible ? 'opacity-100' : 'opacity-0'}`}></video>
      <video src={assets.scissors_paper} autoPlay muted loop={false} ref={scissorsPaperRef} className={`absolute z-40 w-full h-full object-cover ${scissorsPaperVisible ? 'opacity-100' : 'opacity-0'}`}></video>
      <div className='absolute top-[75%] justify-evenly items-center z-40 flex gap-[10vw] w-full'>

        <div className={`${buttonsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-300`} onClick={() => handleClick({ playerChoice: 'rock' })}>
          <ChoiceButton text={'rock'}
            onClick={() =>
              handleClick({ playerChoice: 'rock' })}
            className="border-4 border-white bg-neutral-200 text-[2vw] px-10 py-2 hover:border-black"
          />
        </div>

        <div className={`${buttonsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-300`} onClick={() => handleClick({ playerChoice: 'paper' })}>
          <ChoiceButton text={'paper'}
            onClick={() =>
              handleClick({ playerChoice: 'paper' })}
            className="border-4 border-white bg-neutral-200 text-[2vw] px-10 py-2 hover:border-black"
          />
        </div>

        <div className={`${buttonsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-300`} onClick={() => handleClick({playerChoice: 'scissors'})}>
          <ChoiceButton text={'scissors'}
            onClick={() =>
              handleClick({ playerChoice: 'scissors' })}
            className="border-4 border-white bg-neutral-200 text-[2vw] px-10 py-2 hover:border-black"
          />
        </div>
      </div>
      <div className='absolute z-40'>
        <span className='text-white text-[2.1vw] font-semibold font-mono'>Player choice: {choice}</span><br/>
        <span className='text-white text-[2.1vw] font-semibold font-mono'>Computer choice: {npcChoice}</span><br/>
        <span className='text-white text-[2.1vw] font-semibold font-mono'>{winLoss === 'win' ? 'You win' : winLoss === 'lose' ? 'You Lose' : winLoss === 'draw' ? 'draw' : '' }</span>
      </div>
    </div>
  )
}

export default Game
