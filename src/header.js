import React from 'react';
import logo2 from './images/logo2.png';

function Header() {
  return(
    <header>
      <section>
        <img src="https://farm1.staticflickr.com/859/42917553354_c17c1f86aa_z.jpg" alt="Andrey" className="me" />
        <img src={logo2} alt='logo' className="logo" />
      </section>
    </header>
  )
}

export default Header;
