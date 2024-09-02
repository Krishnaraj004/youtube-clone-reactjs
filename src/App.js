import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { AiFillYoutube } from "react-icons/ai";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineYoutubeSearchedFor } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import athlete from './assests/athlete.jpg'
import bike from './assests/bike.jpg'
import car from './assests/car.jpg'
import cycle from './assests/cycle.jpg'
import drifting from './assests/drifting.jpg'
import parachute from './assests/parachute.jpg'
import hockey from './assests/hockey.jpg'
import cricket from './assests/cricket (1).jpg'
import base from './assests/baseball.jpg'


function App() {
  return (
    <div className="App">
       <div className='list'>
          <ul>
            <li>
              <SiYoutubeshorts style={{width:"30px",height:"40px"}} />
            </li>
            <li>
              <SiYoutubemusic style={{width:"30px",height:"40px"}} />
            </li>
            <li>
              <MdOutlineYoutubeSearchedFor style={{width:"30px",height:"40px"}} />
            </li>
            <li>
              <SiYoutubestudio style={{width:"30px",height:"40px"}} />
            </li>
          </ul>
       </div>
       <div className='container'>
              <div className='row'>
              <nav class="navbar navbar-light">
                <div class="container-fluid">
                  <a class="navbar-brand"><FaYoutube style={{width:"40px",height:"30px"}} />  YouTube</a>
                  <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    <MdAccountCircle style={{width:"200px",height:"30px",marginTop:"5px"}} />
                  </form>
                </div>
              </nav>
        </div>
          <div className='row image'>
            <div className='col-2'>
              <img src={athlete} />
              <div className='social'>
                <AiFillLike  style={{width:"40px"}}/>
                <FaComment  style={{width:"40px"}} />
                <FaShare   style={{width:"40px"}}/>
              </div>
              <p>Olympics 2024 100 meters running</p>
              <p>1 day ago</p>   
            </div>
            <div className='col-2'>
              <img src={car} />
              <div className='social'>
                <AiFillLike  style={{width:"40px"}}/>
                <FaComment  style={{width:"40px"}} />
                <FaShare   style={{width:"40px"}}/>
              </div>
              <p>world longest Car drifting in the aeroplane track</p>
              <p>10 months ago</p>
            </div>
            <div className='col-2'>
              <img src={cycle} />
              <div className='social'>
                <AiFillLike  style={{width:"40px"}}/>
                <FaComment  style={{width:"40px"}} />
                <FaShare   style={{width:"40px"}}/>
              </div>
              <p>Olympics 2024  Road cycling held at Paris</p>
              <p>1 day ago</p>
            </div>
            <div className='col-2'>
              <img src={drifting} />
              <div className='social'>
                <AiFillLike  style={{width:"40px"}}/>
                <FaComment  style={{width:"40px"}} />
                <FaShare   style={{width:"40px"}}/>
              </div>
              <p>Bike Racing is the very hard or not explained by rossi ?</p>
              <p>1 day ago</p>
            </div>
            <div className='col-2'>
              <img src={parachute} />
              <div className='social'>
                <AiFillLike  style={{width:"40px"}}/>
                <FaComment  style={{width:"40px"}} />
                <FaShare   style={{width:"40px"}}/>
              </div>
              <p>World longest parachute driving in the year of 2024</p>
              <p>2 Years Ago</p>
            </div>
            <div className='col-2'>
              <img src={hockey} />
              <div className='social'>
                <AiFillLike  style={{width:"40px"}}/>
                <FaComment  style={{width:"40px"}} />
                <FaShare   style={{width:"40px"}}/>
              </div>
              <p>World fastest game ice hockey or hockey ?</p>
              <p>1 years ago</p>
            </div>
            <div className='col-2'>
              <img src={cricket} />
              <div className='social'>
                <AiFillLike  style={{width:"40px"}}/>
                <FaComment  style={{width:"40px"}} />
                <FaShare   style={{width:"40px"}}/>
              </div>
              <p>India vs australia test series , india won by 333 runs.</p>
              <p>55 minutes ago</p>
            </div>
            <div className='col-2'>
              <img src={base} />
              <div className='social'>
                <AiFillLike  style={{width:"40px"}}/>
                <FaComment  style={{width:"40px"}} />
                <FaShare   style={{width:"40px"}}/>
              </div>
              <p>The heaviest sports in the world base ball or wrestling ?</p>
              <p>2 days ago</p>
            </div>
            
          </div>

       </div>
    </div>
  );
}

export default App;
