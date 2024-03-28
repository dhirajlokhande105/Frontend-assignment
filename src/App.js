import { Component } from 'react';
import './App.css';
import PopulationGraph from './PopulationGraph/PopulationGraph';
import CryptoCards from './Card/Card';
import ConnectWallet from './Wallet/Wallet';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      activeNavItem: 'Home',
      cryptoData: null
    };
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  handleNavItemClick = (itemName) => {
    this.setState({ activeNavItem: itemName, isMenuOpen: false });
  };

  

  

  

  render() {
    const { isMenuOpen, activeNavItem } = this.state;

    return (
      <div className='app-container'>
        <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
          <a className={`nav-item ${activeNavItem === 'Home' ? 'active' : ''}`} href="#home" onClick={() => this.handleNavItemClick('Home')}>Home</a>
          
          <a className={`nav-item ${activeNavItem === 'Contact' ? 'active' : ''}`} href="#contact" onClick={() => this.handleNavItemClick('Contact')}>Contact</a>
          <a className={`nav-item ${activeNavItem === 'About' ? 'active' : ''}`} href="#about" onClick={() => this.handleNavItemClick('About')}>About</a>
        </div>
        
        <div className="content">
          <button className="hamburger" onClick={this.toggleMenu}>
            <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          </button>
        </div>
        
      
        <div className='main-content'>
        <PopulationGraph/>
        <CryptoCards/>
        <ConnectWallet/>
        </div>
      </div>
    );
  }
}

export default App;
