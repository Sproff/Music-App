import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios'
import headerImage2 from '../images/header-img2.jpg';
// import Track from './Track';


function Header({tracks}) {

    const Header = styled.header`
      font-family: 'Comic Neue', cursive;
      width: 100%;
      color: #fff;
      padding-bottom: 3rem;

    .header-image2 {
        height: 30vh;
        margin-right: 2rem;
        border: 10px solid #ea4c89;
    }

    .title {
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
      padding: 2rem 0;
    }

    .container { margin: 0 10rem;}

    .btn-fill {
        padding: 1rem 5rem;
        margin-right: 2rem;
        background-color: #ea4c89;
        color: #fff;
        border-radius: 50px;
        border: none;
        outline: none;
        text-transform: uppercase;

        :hover { 
            background-color: #dd3978;
            cursor: pointer; 
        }
    }



    .btn-ghost {
        padding: 1rem 5rem;
        margin-right: 2rem;
        background-color: transparent;
        color: #fff;
        border-radius: 50px;
        border: 1px solid #ea4c89;
        outline: none;
        text-transform: uppercase;

        :hover { 
            background-color: #ea4c89;
            cursor: pointer; 
        }
    }

    .col-2 div p {
      font-weight: 300;
      line-height: 1.5;
    }


    .header-title_span { 
      font-size: .8rem;
      font-weight: 300;
      font-style: italic;
    }

    .row { display: flex;}

    h2 { 
      font-weight: 300;
      padding-left: 4.5rem;
    }


    .tabs {
      position: relative;
      min-height: 100%;
      clear: both;
      margin-top: 5rem;
    }

    .tab { float: left;}

    .tab label {
      padding: .5rem 5rem;
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 3px;
      position: relative;
    }
    
    .tab [type="radio"] { opacity: 0;}

    .content {
      position: absolute;
      top: 28px;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 1.1rem;
      border-top: 3px solid #555;
    }
    .content > * {
      opacity: 0;
      transition: all 0.6s ease;
    }

    [type="radio"]:checked ~ label {
      border-bottom: 3px solid #ea4c89;
      z-index: 2;
    }

    [type="radio"]:checked ~ .content { z-index: 1;}

    [type="radio"]:checked ~ .content > * { opacity: 1;}

    table {
      border-collapse: collapse;
      width: 100%;
    }

    td, th {
      border-bottom: 1px solid #5555;
      text-align: center;
      padding: 1rem;
    }

    th { 
      text-transform: uppercase;
      font-weight: 500;
    }
     

    .table-tr:hover { 
      background-color: rgba(97, 96, 96, 0.5);
      cursor: pointer;
    }

    .heart { 
      color: #ea4c89;
      font-size: 1.2rem;
    }

    .modal {
      display: flex;
      position: relative;
      margin: 0 auto;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 50%;
      font-size: 1.125rem;
      font-weight: 300;
      padding: 3rem;
      line-height: 1.8;
      background-color: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.9));
      color: #fff;
      box-shadow: 0 8px 16px 0 rgba(160, 158, 158, 0.2);
    }

    .close {
      background-color: #ea4c89;
      color: #fff;
      font-size: 1.125rem;
      padding: .5rem 1rem;
      position: absolute;
      top: 0;
      right: 0;
      outline: none;
      border: none;
    }

    .close:hover { cursor: pointer;}

    @media only screen and (min-width: 0px) {
      .container { margin: 0 1rem;}

      .row { display: block;}

      .col-1 { text-align: center;}
      
      .col-2 div .header-title { text-align: center;}
      .col-2 div p { text-align: center;}

      .header-btn { 
        display: flex;
        justify-content: center;
        margin-left: 2rem;
      }

      .btn-fill { 
        padding: .8rem 3rem;
        margin-right: .5rem;
      }

      .btn-ghost { padding: .8rem 2rem;}

      .tab label { 
        padding: .5rem 0;
        letter-spacing: 1px;
      }

      .content { padding: 0;}

      h2 { padding-left: .5rem;}

      .modal {
        width: 70%;
        padding: 2rem;
        margin-bottom: 2rem;
        line-height: 1.5;
        background-color: rgb(128, 126, 126);
        z-index: 2;
      }

    }

    @media only screen and (min-width: 375px) {
      .container { margin: 0 1rem;}

      .row { display: block;}

      .col-1 { text-align: center;}
      
      .col-2 div .header-title { text-align: center;}
      .col-2 div p { text-align: center;}

      .header-btn { display: flex;}

      .btn-fill { padding: .8rem 3rem;}
      .btn-ghost { padding: .8rem 2rem;}

    .tab label { 
        padding: .5rem;
        letter-spacing: 1px;
      }

      .content { padding: 0;}

      h2 { padding-left: .5rem;}

      .modal {
        width: 70%;
        padding: 2rem;
        margin-top: 15rem;
        line-height: 1.5;
      }
    }

    @media only screen and (min-width: 576px) and (max-width: 767px) {
      
      .tab label { 
        padding: .5rem 2rem;}
}

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      .container { margin: 0 5rem;}

      .row { display: flex;}

      .col-1 { text-align: left;}
      
      .col-2 div .header-title { text-align: left;}
      .col-2 div p { text-align: left;}

      .header-image2 { height: 50vh;}

      .header-btn { display: flex;}
      .btn-fill { 
        padding: .7rem 3rem;
        margin-left: -5rem;
      }
      .btn-ghost { padding: .5rem 1.5rem;}

      .tab label { 
        padding: .5rem 2.7rem;
        letter-spacing: 1px;
      }

      h2 { padding-left: 1.7rem;}

    }

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      .container { padding: 0 10rem};

      .row { display: flex;}

      .header-image2 { height: 45vh;}

      .col-1 { text-align: left;}
      
      .col-2 div .header-title { text-align: left;}
      .col-2 div p { text-align: left;}

     .header-btn { 
       justify-content: left;
       margin-left: 0;
      } 

      .btn-fill { padding: 1rem 4rem;}
      .btn-ghost {  padding: 1rem 4rem;}

      .tab label { padding: .5rem 5rem;}

      h2 { padding-left: 2rem;}
    }

    @media only screen and (min-width: 1200px) {
      .container { padding: 0 10rem};

      .row { display: flex;}

      .header-image2 { height: 30vh;}

      .col-1 { text-align: left;}
      
      .col-2 div .header-title { text-align: left;}
      .col-2 div p { text-align: left;}

     .header-btn { 
       justify-content: left;
       margin-left: 0;
      } 

      .tab label { padding: .5rem 5rem;}

    }
    `

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
          <Header>
            <div>
              <h2 className="title">MUSIC APP</h2>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-1">
                  <img src={headerImage2} className="header-image2" alt="" />
                </div>

                <div className="col-2">
                  <div>
                    <h1 className="header-title">Astrid 
                      <span className="header-title_span"> Electro, New Pop, Vibes  
                      </span>
                    </h1>
                    <p>Known professionally as Astrid S or simply Astrid is a Norwegian singer and songwriter. She came fifth in the Norwegian version of the reality television show Pop idol, aired on TV 2 in 2013. She is currently residing in Norway and...</p>
                  </div>

                  <div className="header-btn">
                    <button className="btn-fill">View</button>
                    <button className="btn-ghost">Favourites</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="tabs">
                <div className="tab">
                  <input type="radio" id="tab-1" name="tab-group-1" checked />
                  <label for="tab-1">Recent</label>
                  <div className="content">
                  <h2>Top Tracks</h2>
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
                        <tbody>
                          <tr onClick={() => clickHandler(track.track.track_id)} key={track.track.album_id} className="table-tr">
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
                  <label for="tab-2">Previous</label>
                  <div className="content">
                    <p>Loading...</p>
                  </div>
                </div>

                <div className="tab">
                  <input type="radio" id="tab-3" name="tab-group-1" />
                  <label for="tab-3">All Time</label>
                  <div className="content">
                    <p>Loading...</p>
                  </div>
                </div>
              </div>
            </div>

           { showModal && 
            <div className="modal">
              {getLyrics}

              <button onClick={closeHandler} className="close">X</button>
            </div>
          }
          </Header>
    )
}

export default Header
