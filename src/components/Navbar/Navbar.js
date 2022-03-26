import React from 'react';
import classes from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={`${classes.position}`}>
      <div className={`${classes.logo}`}>
        Sunny Bhandal | Data Scientist | Software Developer
      </div>
      <div className={`${classes.menu}`}>
        Coming soon...
      </div>
    </div>
  )
}
