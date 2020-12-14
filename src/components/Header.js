import React from 'react';
import headerImage2 from '../images/header-img2.jpg';
import Track from './Track';
import HeaderStyle from '../styles/HeaderStyle';


function Header({tracks, Loader}) {

    return (
          <HeaderStyle>
            <div>
              <h2 className="title">MyMusic</h2>
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

            <Track tracks={tracks} loader={Loader}/>
          </HeaderStyle>
    )
}

export default Header
