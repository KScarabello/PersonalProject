import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap-carousel';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';

export default class Slider extends Component{
    render(){
        return(
            <div>
<React_Bootstrap_Carousel
            animation={true}
            onSelect={this.onSelect}
            className="carousel-fade"
          >
            <div style={{height:700,
            width:"100vw",
            backgroundImage:'url("http://www.standard.net/image/2017/02/20/800x_a16-9_b0_q80_p1_ca5,0,1822,1033/BZ-Box-Elder-flooding.jpg")', 
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
            }}>              
                {/* <img src="http://www.standard.net/image/2017/02/20/800x_a16-9_b0_q80_p1_ca5,0,1822,1033/BZ-Box-Elder-flooding.jpg" />   */}
              <h1 style={{ color: "darkred",
              fontFamily: "Anton",
              fontSize: "65px",
              textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"


              }}>Box Elder County Flooding </h1>
              <p style={{fontWeight: "bold",
              fontSize: "35px"



              }}        
              
              >17 Lenders Requesting Help</p>
              <button className="btn">Lend A Hand</button>
            
            </div>
            <div style={{height:700,
            width:"100vw",
            backgroundImage:'url()',
            backgroundColor:"aqua",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
            
            }}>
              <h1>SarahBearUh1 wants to make Christmas cards for the elderly.</h1>
              <p>3 Lenders Still Needed</p>
              <button>Lend A Hand</button>
            </div>
            <div style={{height:700,width:"100vw",backgroundColor:"lightpink"}}>
              <h1>City of Provo needs staffing for _____ Festival</h1>
              <p>13 Lenders Still Needed</p>
              <button>Lend A Hand</button>              
            </div>
            <div style={{height:700,width:"100vw",backgroundColor:"orange"}}>
              <video autoplay loop id="video-background" muted plays-inline>
                 {/* <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4" /> */}
              </video>
            </div>
          </React_Bootstrap_Carousel>




           </div>
        )
    }
}