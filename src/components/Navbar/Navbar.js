import React from 'react';
import classes from './Navbar.module.css';

export const Navbar = () => {
  return (
    <section id="navbar">
      <div className={`${classes.position}`}>
        <div className={`${classes.logo}`}>
          Sunny Bhandal
        </div>
        <div className={`${classes.menu}`}>
          Projects Education Skills Contact
        </div>
      </div>
    </section>
  )
}
