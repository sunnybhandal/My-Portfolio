import React from 'react'
import classes from './About.module.css'

export const About = () => {
  return (
    <section id="about">
      <div className={`${classes.container}`}>
        <h1>Sunny Bhandal</h1>
        <p> I'm a Data Scientist & Software Developer who is
          passionate about sports, health/fitness, and all things data.
          Besides analyzing data, you can
          find me playing basketball or hiking in the
          Rocky Mountains.
        </p>
        <div className={`${classes.linkContainer}`}>
          <div className={`${classes.links}`}>GitHub</div>
          <div className={`${classes.links}`}>LinkedIn</div>
          <div className={`${classes.links}`}>Email</div>
        </div>
      </div>
    </section>
  )
}
