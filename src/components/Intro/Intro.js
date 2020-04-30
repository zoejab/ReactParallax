import React from 'react';
import './Intro.scss';

const Intro = () => (
  <div className='intro'>
    <div>
      <h1> See What I Can Do </h1>
    </div>
    <div className='introText'>
      Random tidbits of animation and parallax with ReactJS while you learn about elephants!
    </div>
    <a
      href='https://www.morningbrew.com/daily/latest'
      target='_blank'
      rel="noopener noreferrer"
      className='newsletter'
    >
    </a>
    <a href='#parallax' class='btnContainer'>
      <button class='btn'>
        <svg width='180px' height='60px' viewBox='0 0 180 60' class='border'>
          <polyline points='179,1 179,59 1,59 1,1 179,1' class='bg-line' />
          <polyline points='179,1 179,59 1,59 1,1 179,1' class='hl-line' />
        </svg>
        <span> Hover over me. </span>
      </button>
    </a>
      <div className="elephant"></div>
  </div>

);

export default Intro;
