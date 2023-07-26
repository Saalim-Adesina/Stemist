import wave from '../images/wave.svg'
import { Route, Link } from "react-router-dom";
import Home from './Home'
import Friends from './Friends'



function Navbar() {
    return (
        <div className="Navbar">
            <div className='logo_wrapper'>
                <img src={wave} className='logo'></img>
                <p>Notewave</p>
            </div>
            <ul>
                <li><Link to="/">Notes Hub</Link></li>
                <li><Link to="/friends">Friends</Link></li>
                <li className="Navbar__userprofile"><div>Hello, Saalim!</div></li>
            </ul>
        </div>
    )
}

export default Navbar