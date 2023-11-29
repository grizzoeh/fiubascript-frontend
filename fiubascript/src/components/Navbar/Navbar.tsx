import triviaTitle from '../../assets/TrivIA.png';
import { UserLogo } from '../UserLogo/UserLogo'
import Coin from '../../assets/coin.png';
import './Navbar.css';

export const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="nav-item">
        <img src={triviaTitle} alt="TrivIA Title" className="nav-logo" />
      </div>
      <div className="nav-item">
        <img src={Coin} alt="Coin" className="nav-icon" />
      </div>
      <div className="nav-item">
        <UserLogo />
      </div>
    </nav>
  );
};