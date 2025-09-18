import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'
import ChoiceButton1 from '../components/ChoiceButton1.jsx';
import EndingScreen from '../components/EndingScreen.jsx';
import RouletteButton from '../components/RouletteButton.jsx';

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

  const [playerAliveVisible, setPlayerAliveVisible] = useState(false);
  const [playerDieVisible, setPlayerDieVisible] = useState(false);
  const [npcAliveVisible, setNpcAliveVisible] = useState(false);
  const [npcDieVisible, setNpcDieVisible] = useState(false);

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

  const [playerAlivePlaying, setPlayerAlivePlaying] = useState(false);
  const [playerDiePlaying, setPlayerDiePlaying] = useState(false);
  const [npcAlivePlaying, setNpcAlivePlaying] = useState(false);
  const [npcDiePlaying, setNpcDiePlaying] = useState(false);



  const rockRockRef = useRef(null);
  const rockPaperRef = useRef(null);
  const rockScissorsRef = useRef(null);

  const paperPaperRef = useRef(null);
  const paperRockRef = useRef(null);
  const paperScissorsRef = useRef(null);

  const scissorsScissorsRef = useRef(null);
  const scissorsRockRef = useRef(null);
  const scissorsPaperRef = useRef(null);

  const playerAliveRef = useRef(null);
  const playerDieRef = useRef(null);
  const npcAliveRef = useRef(null);
  const npcDieRef = useRef(null);



  const [choice, setChoice] = useState(null);
  const [npcChoice, setNpcChoice] = useState(null);
  const [winLoss, setWinLoss] = useState(null);
  const [rouletteButtonVisible, setRouletteButtonVisible] = useState(false);
  const [whoDieORAlive, setWhoDieORAlive] = useState(null);
  const [showEndingScreen, setShowEndingScreen] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(true);
  const [isGameWin, setIsGameWin] = useState(null);

  const resetGameState = () => {
    // reset visibility
    setRockRockVisible(false);
    setRockPaperVisible(false);
    setRockScissorsVisible(false);

    setPaperPaperVisible(false);
    setPaperRockVisible(false);
    setPaperScissorsVisible(false);

    setScissorsScissorsVisible(false);
    setScissorsRockVisible(false);
    setScissorsPaperVisible(false);

    setPlayerAliveVisible(false);
    setPlayerDieVisible(false);
    setNpcAliveVisible(false);
    setNpcDieVisible(false);

    // reset playing
    setRockRockPlaying(false);
    setRockPaperPlaying(false);
    setRockScissorsPlaying(false);

    setPaperPaperPlaying(false);
    setPaperRockPlaying(false);
    setPaperScissorsPlaying(false);

    setScissorsScissorsPlaying(false);
    setScissorsRockPlaying(false);
    setScissorsPaperPlaying(false);

    setPlayerAlivePlaying(false);
    setPlayerDiePlaying(false);
    setNpcAlivePlaying(false);
    setNpcDiePlaying(false);

    // reset game state
    setIdleLoop(true);
    setChoice(null);
    setNpcChoice(null);
    setWinLoss(null);
    setRouletteButtonVisible(false);
    setWhoDieORAlive(null);
    setShowEndingScreen(false);
    setButtonsVisible(true);
    setIsGameWin(null);

    // reset videos back to idle
    if (idleRef.current) {
      idleRef.current.currentTime = 0;
      idleRef.current.loop = true;
      idleRef.current.play().catch(err => console.warn("Idle restart failed:", err));
    }
  };


  const handlePlayEnd = () => {
    if (winLoss === 'win' || winLoss === 'lose') {
      // Reset visibility
      setRockRockVisible(false);
      setRockPaperVisible(false);
      setRockScissorsVisible(false);

      setPaperPaperVisible(false);
      setPaperRockVisible(false);
      setPaperScissorsVisible(false);

      setScissorsScissorsVisible(false);
      setScissorsRockVisible(false);
      setScissorsPaperVisible(false);

      // Reset playing
      setRockRockPlaying(false);
      setRockPaperPlaying(false);
      setRockScissorsPlaying(false);

      setPaperPaperPlaying(false);
      setPaperRockPlaying(false);
      setPaperScissorsPlaying(false);

      setScissorsScissorsPlaying(false);
      setScissorsRockPlaying(false);
      setScissorsPaperPlaying(false);

      // Reset game controls
      setIdleLoop(true);
      setChoice(null);
      setNpcChoice(null);

      // activate button for roulette
      setRouletteButtonVisible(true);
    }
    else if (winLoss === 'draw') {
      setRockRockVisible(false);
      setRockPaperVisible(false);
      setRockScissorsVisible(false);

      setPaperPaperVisible(false);
      setPaperRockVisible(false);
      setPaperScissorsVisible(false);

      setScissorsScissorsVisible(false);
      setScissorsRockVisible(false);
      setScissorsPaperVisible(false);

      // Reset playing
      setRockRockPlaying(false);
      setRockPaperPlaying(false);
      setRockScissorsPlaying(false);

      setPaperPaperPlaying(false);
      setPaperRockPlaying(false);
      setPaperScissorsPlaying(false);

      setScissorsScissorsPlaying(false);
      setScissorsRockPlaying(false);
      setScissorsPaperPlaying(false);

      // Reset game controls
      setIdleLoop(true);
      setChoice(null);
      setNpcChoice(null);

      // reset play buttons
      setButtonsVisible(true);
    }
  }

  useEffect(() => {
    if (idleLoop && idleRef.current) {
      idleRef.current.currentTime = 0;
      idleRef.current.play().catch(err => {
        console.warn("Idle video could not autoplay:", err);
      });
    }
  }, [idleLoop]);

  const handleRouletteButtonClick = () => {
    // hide roulette button
    setRouletteButtonVisible(false);
    // 1/6 chance to get hit by bullet
    const isBullet = Math.floor((Math.random() * 6) + 1);
    // remove idle looping
    if (idleRef.current) {
      idleRef.current.loop = false; //this works directly on dom better than using state
    }
    // player hit by bullet
    if (isBullet === 1 && winLoss === 'lose') {
      setPlayerDiePlaying(true);
    }
    // npc does not die
    else if (isBullet !== 1 && winLoss === 'win') {
      setNpcAlivePlaying(true);
    }
    // npc dies
    else if (isBullet === 1 && winLoss === 'win') {
      setNpcDiePlaying(true);
    }
    // player does not die
    else if (isBullet !== 1 && winLoss === 'lose') {
      setPlayerAlivePlaying(true);
    }
  }

  const handleClick = ({ playerChoice }) => {

    // make buttons invisible on click
    setButtonsVisible(false);

    // set player's choice
    setChoice(playerChoice);

    // generate computer choice
    const computerChoice = Math.floor((Math.random() * 3) + 1);
    const compChoice = computerChoice === 1 ? 'rock' : computerChoice === 2 ? 'paper' : 'scissors';
    setNpcChoice(compChoice);
    console.log(computerChoice);

    // set win or lose
    if (compChoice === 'rock' && playerChoice === 'rock' || compChoice === 'paper' && playerChoice === 'paper' || compChoice === 'scissors' && playerChoice === 'scissors') {
      setWinLoss('draw');
    }
    else if (compChoice === 'rock' && playerChoice === 'paper' || compChoice === 'paper' && playerChoice === 'scissors' || compChoice === 'scissors' && playerChoice === 'rock') {
      setWinLoss('win');
    }
    else {
      setWinLoss('lose');
    }


    if (compChoice === 'rock' && playerChoice === 'rock') {
      setIdleLoop(false);
      setRockRockPlaying(true);
    }
    else if (compChoice === 'paper' && playerChoice === 'rock') {
      setIdleLoop(false);
      setRockPaperPlaying(true);
    }
    else if (compChoice === 'scissors' && playerChoice === 'rock') {
      setIdleLoop(false);
      setRockScissorsPlaying(true);
    }
    else if (compChoice === 'paper' && playerChoice === 'paper') {
      setIdleLoop(false);
      setPaperPaperPlaying(true);
    }
    else if (compChoice === 'rock' && playerChoice === 'paper') {
      setIdleLoop(false);
      setPaperRockPlaying(true);
    }
    else if (compChoice === 'scissors' && playerChoice === 'paper') {
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
    console.log('idle ended');
    if (rockRockPlaying) {
      if (rockRockRef.current) {
        rockRockRef.current.currentTime = 0;
        rockRockRef.current.play();
      }
      setRockRockVisible(true);
      // to prevent rock playing again.
      setRockRockPlaying(false);
    }
    else if (rockPaperPlaying) {
      if (rockPaperRef.current) {
        rockPaperRef.current.currentTime = 0;
        rockPaperRef.current.play();
      }
      setRockPaperVisible(true);
      setRockPaperPlaying(false);
    }
    else if (rockScissorsPlaying) {
      if (rockScissorsRef.current) {
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
      if (paperRockRef.current) {
        paperRockRef.current.currentTime = 0;
        paperRockRef.current.play();
      }
      setPaperRockVisible(true);
      setPaperRockPlaying(false);
    }
    else if (paperScissorsPlaying) {
      if (paperScissorsRef.current) {
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
    else if (npcDiePlaying) {
      if (npcDieRef.current) {
        npcDieRef.current.currentTime = 0;
        npcDieRef.current.play();
        setNpcDieVisible(true);
        setNpcDiePlaying(false);
      }
    }
    else if (npcAlivePlaying) {
      if (npcAliveRef.current) {
        npcAliveRef.current.currentTime = 0;
        npcAliveRef.current.play();
        setNpcAliveVisible(true);
        setNpcAlivePlaying(false);
      }
    }
    else if (playerAlivePlaying) {
      if (playerAliveRef.current) {
        playerAliveRef.current.currentTime = 0;
        playerAliveRef.current.play();
        setPlayerAliveVisible(true);
        setPlayerAlivePlaying(false);
      }
    }
    else if (playerDiePlaying) {
      if (playerDieRef.current) {
        playerDieRef.current.currentTime = 0;
        playerDieRef.current.play();
        setPlayerDieVisible(true);
        setPlayerDiePlaying(false);
      }
    }
  }

  const handleRouletteEnd = ({ didPlayerDie, didNpcDie }) => {
    console.log("handle roulette worked");
    console.log(didPlayerDie, didNpcDie);
    setIdleLoop(true);
    if (idleRef.current) {
      idleRef.current.currentTime = 0;
      idleRef.current.play();
      idleRef.current.loop = true;
    }
    // Reset visibility
    setRockRockVisible(false);
    setRockPaperVisible(false);
    setRockScissorsVisible(false);

    setPaperPaperVisible(false);
    setPaperRockVisible(false);
    setPaperScissorsVisible(false);

    setScissorsScissorsVisible(false);
    setScissorsRockVisible(false);
    setScissorsPaperVisible(false);

    setNpcAliveVisible(false);
    setPlayerAliveVisible(false);
    setPlayerDieVisible(false);
    setNpcDieVisible(false);

    // Reset playing
    setRockRockPlaying(false);
    setRockPaperPlaying(false);
    setRockScissorsPlaying(false);

    setPaperPaperPlaying(false);
    setPaperRockPlaying(false);
    setPaperScissorsPlaying(false);

    setScissorsScissorsPlaying(false);
    setScissorsRockPlaying(false);
    setScissorsPaperPlaying(false);

    setNpcAlivePlaying(false);
    setPlayerAlivePlaying(false);
    setPlayerDiePlaying(false);
    setNpcDiePlaying(false);

    if (didPlayerDie || didNpcDie) {
      console.log('somebody died, game over');
      // show ending screen
      setShowEndingScreen(true);
      if (didPlayerDie) {
        setIsGameWin(false);
      }
      if (didNpcDie) {
        setIsGameWin(true);
      }
    }
    else {
      // reset play buttons to play again 
      setButtonsVisible(true);
      // reset choices
      setChoice(null);
      setNpcChoice(null);
      console.log('nobody died, playing again')
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
        onEnded={() => handlePlayEnd(true)}
        playsInline
        className={`absolute z-30 w-full h-full object-cover transition-opacity duration-300 ${rockRockVisible ? "opacity-100" : "opacity-0"
          }`}
      />
      <video src={assets.rock_paper} muted loop={false} onEnded={() => handlePlayEnd(true)} ref={rockPaperRef} className={`absolute z-40 w-full h-full object-cover ${rockPaperVisible ? 'opacity-100' : 'opacity-0'}`}></video>
      <video src={assets.rock_scissors} muted loop={false} onEnded={() => handlePlayEnd(true)} ref={rockScissorsRef} className={`absolute z-40 w-full h-full object-cover ${rockScissorsVisible ? 'opacity-100' : 'opacity-0'}`}></video>
      <video src={assets.paper_paper} muted loop={false} onEnded={() => handlePlayEnd(true)} ref={paperPaperRef} className={`absolute z-40 w-full h-full object-cover ${paperPaperVisible ? 'opacity-100' : 'opacity-0'}`}></video>
      <video src={assets.paper_rock} muted loop={false} onEnded={() => handlePlayEnd(true)} ref={paperRockRef} className={`absolute z-40 w-full h-full object-cover ${paperRockVisible ? 'opacity-100' : 'opacity-0'}`}></video>
      <video src={assets.paper_scissors} muted loop={false} onEnded={() => handlePlayEnd(true)} ref={paperScissorsRef} className={`absolute z-40 w-full h-full object-cover ${paperScissorsVisible ? 'opacity-100' : 'opacity-0'}`}></video>
      <video src={assets.scissors_scissors} muted loop={false} onEnded={() => handlePlayEnd(true)} ref={scissorsScissorsRef} className={`absolute z-40 w-full h-full object-cover ${scissorsScissorsVisible ? 'opacity-100' : 'opacity-0'}`}></video>
      <video src={assets.scissors_rock} muted loop={false} onEnded={() => handlePlayEnd(true)} ref={scissorsRockRef} className={`absolute z-40 w-full h-full object-cover ${scissorsRockVisible ? 'opacity-100' : 'opacity-0'}`}></video>
      <video src={assets.scissors_paper} muted loop={false} onEnded={() => handlePlayEnd(true)} ref={scissorsPaperRef} className={`absolute z-40 w-full h-full object-cover ${scissorsPaperVisible ? 'opacity-100' : 'opacity-0'}`}></video>
      <video src={assets.npc_die} muted loop={false} ref={npcDieRef} onEnded={() => handleRouletteEnd({ didPlayerDie: false, didNpcDie: true })} className={`absolute z-40 w-full h-full object-cover ${npcDieVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></video>
      <video src={assets.npc_alive} muted loop={false} ref={npcAliveRef} onEnded={() => handleRouletteEnd({ didPlayerDie: false, didNpcDie: false })} className={`absolute z-40 w-full h-full object-cover ${npcAliveVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></video>
      <video src={assets.player_die} muted loop={false} ref={playerDieRef} onEnded={() => handleRouletteEnd({ didPlayerDie: true, didNpcDie: false })} className={`absolute z-40 w-full h-full object-cover ${playerDieVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></video>
      <video src={assets.player_alive} muted loop={false} ref={playerAliveRef} onEnded={() => handleRouletteEnd({ didPlayerDie: false, didNpcDie: false })} className={`absolute z-40 w-full h-full object-cover ${playerAliveVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></video>
      <EndingScreen resetGameState={resetGameState} showEndingScreen={showEndingScreen} isGameWin={isGameWin} />

      <div className='absolute top-[75%] justify-evenly items-center z-40 flex gap-[10vw] w-full select-none'>

        <div className={`${buttonsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-300`} onClick={() => handleClick({ playerChoice: 'rock' })}>
          <ChoiceButton1 text={'rock'}
            onClick={() =>
              handleClick({ playerChoice: 'rock' })}
            className="border-4 border-white bg-neutral-200 text-[2vw] px-10 py-2 hover:border-black"
          />
        </div>

        <div className={`${buttonsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-300`} onClick={() => handleClick({ playerChoice: 'paper' })}>
          <ChoiceButton1 text={'paper'}
            onClick={() =>
              handleClick({ playerChoice: 'paper' })}
            className="border-4 border-white bg-neutral-200 text-[2vw] px-10 py-2 hover:border-black"
          />
        </div>

        <div className={`${buttonsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-300`} onClick={() => handleClick({ playerChoice: 'scissors' })}>
          <ChoiceButton1 text={'scissors'}
            onClick={() =>
              handleClick({ playerChoice: 'scissors' })}
            className="border-4 border-white bg-neutral-200 text-[2vw] px-10 py-2 hover:border-black"
          />
        </div>
      </div>
      <button onClick={() => handleRouletteButtonClick()} className={`${rouletteButtonVisible ? 'inline-block' : 'hidden'} absolute top-2/3 left-1/2 -translate-x-1/2 cursor-pointer font-semibold z-40`}>
        <RouletteButton text={winLoss === 'win' ? 'Enjoy The Show' : 'Test Your Fate'}/>
      </button>
      <div className='absolute hidden z-40'>
        <span className='text-white text-[2.1vw] font-semibold font-mono'>Player choice: {choice}</span><br />
        <span className='text-white text-[2.1vw] font-semibold font-mono'>Computer choice: {npcChoice}</span><br />
        <span className='text-white text-[2.1vw] font-semibold font-mono'>{winLoss === 'win' ? 'You win' : winLoss === 'lose' ? 'You Lose' : winLoss === 'draw' ? 'draw' : ''}</span>
      </div>
    </div>
  )
}

export default Game
