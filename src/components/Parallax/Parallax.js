import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import './Parallax.scss';
import elephant from './elephant-landscape.jpg';
import Intro from '../Intro/Intro';
import Friends from '../Friends/Friends';
import Content from '../Content/Content';

const Parallax = () => (
  <Controller>
    <Intro />
    <Scene duration='200%' triggerHook='onEnter'>
      <Timeline wrapper={<div className='parallax' id='parallax' />}>
        <Tween
          position='0'
          from={{
            yPercent: -50,
          }}
          to={{
            yPercent: 0,
          }}
        >
          <img src={elephant} alt='' />
          <Friends />
        </Tween>
        <Tween
          position='0'
          from={{
            top: '0%',
            scale: 1.5,
          }}
          to={{
            top: '70%',
            scale: 2,
          }}
        ></Tween>
      </Timeline>
    </Scene>
    <Content />
  </Controller>
);

export default Parallax;