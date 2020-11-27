import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Header from './components/Header';
import LoaderStyle from './components/Loader'

function App() {

   const [tracks, setTracks] = useState([]);

   const [Loader, setLoader] = useState(true);


  useEffect(() => {
    
    setLoader(true)


    const API_URL = 'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=5&country=us&f_has_lyrics=1&apikey=a515d9a9d48ed2aa1d1b25c39e6584d4'

      axios.get(API_URL).then((res) => (
        setTracks(res.data.message.body.track_list)
      ))

      setLoader(false)
  }, [])

  


  return (
    <div className="App">
      
      {Loader && <LoaderStyle />}
        <Header tracks={tracks} loader={Loader}/>
      
    </div>
  );
}

export default App;