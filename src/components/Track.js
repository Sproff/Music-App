import React, {useState} from 'react';
import axios from 'axios'


const Track = ({tracks}) => {

    
    const [getLyrics, setLyrics] = useState('');

    const [showModal, setModal] = useState (false);

   


   let clickHandler = (track_id) => {
     const getLyrics = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${track_id}&apikey=a515d9a9d48ed2aa1d1b25c39e6584d4`

     
     axios.get(getLyrics).then((res) => (
       setLyrics(res.data.message.body.lyrics.lyrics_body)
     ))

   setModal(true)

   };

   let closeHandler = () => {
     setModal(false)
   };


    return (
        <div className="container">
        <div className="tabs">
          <div className="tab">
            <input type="radio" id="tab-1" name="tab-group-1" checked />
            <label htmlFor="tab-1">Recent</label>
            <div className="content">
            <h2>Top Tracks
              <br/>
              <i>Tap on each song for its lyrics</i>
            </h2>
            
              <table>
                <thead>
                  <tr className="table-header-tr">
                    <th>#</th>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Favourite</th>
                  </tr>
                </thead>
                {tracks.map((track, index) => (
                  <tbody key={track.track.album_id}>
                    <tr onClick={() => clickHandler(track.track.track_id)}  className="table-tr">
                      <td>{index}</td>
                      <td>{track.track.album_name}</td>
                      <td>{track.track.artist_name}</td>
                      <td className="heart">&hearts; {track.track.num_favourite}</td>
                    </tr>
                  </tbody>
              ))}
                
              </table>
            </div>
          </div>

          <div className="tab">
            <input type="radio" id="tab-2" name="tab-group-1" />
            <label htmlFor="tab-2">Previous</label>
            <div className="content">
              <p>Loading...</p>
            </div>
          </div>

          <div className="tab">
            <input type="radio" id="tab-3" name="tab-group-1" />
            <label htmlFor="tab-3">All Time</label>
            <div className="content">
              <p>Loading...</p>
            </div>
          </div>
        </div>

        { showModal && 
      <div className="modal">
        {getLyrics}

        <button onClick={closeHandler} className="close">X</button>
      </div>
    }
      </div>

    
    )
}

export default Track;