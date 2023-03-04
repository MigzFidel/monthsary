
import './App.css';
import Countdown from 'react-countdown';
import SpotifyPlayer from 'react-spotify-web-playback';
import cuteflower from './Assets/cat-farsi-cat.gif'
import sakura from './Assets/sakura-leaves.gif'
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
import ReactAudioPlayer from 'react-audio-player';




function App() {
  const today = Date.now();

  const CD_site = () =>{

    return(
      <div className='countdown'>
          Happy 3rd Monthsary bebe ko!!!<br/>
          <img className='cute' src={cuteflower}/>
          <Countdown date={new Date('March 05, 2023 00:00:00')} />
      </div>
    );
  }

  const Site = () =>{
    return(
      <div>

      </div>
    );
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  return (
    <div className="App">
      <div className='what'>
      <ReactAudioPlayer
        src={process.env.PUBLIC_URL + '/audio/bg.mp3'}
        controls
        autoPlay
      />
      </div>
      <header className="App-header">
      {/* <img className='flowers 'src={sakura}/> */}
      {today >= new Date('March 05, 2023 00:00:00')? <Site/> : <CD_site/>}

      </header>
    </div>
  );
}

export default App;
