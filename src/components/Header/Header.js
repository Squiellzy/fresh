import React from 'react';
import logo from "../../assets/icons/logo.svg";
import basket from "../../assets/icons/Vector.svg";

const Header = () => {
  return (
    <nav>
        <div className='menu'>
            <div className='logo'>
                <img src={logo} alt="Logo" className='logo_text'/>
            </div>
            <ul className='links'>
              <li>Home</li>
              <li>Menu</li>
              <li>Novelty</li>
              <li>Contacts</li>
            </ul>
            <div className='basket'>
              <img src={basket} alt="Basket" className='basket_img'/>
              <button className='basket_button'>Reserve a table</button>
            </div>
        </div>
    </nav>
  )
}

export default Header;
