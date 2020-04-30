import React from 'react';
import FriendsCard from '../FriendsCard/FriendsCard';
import './Friends.scss';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, SplitLetters } from 'react-gsap';
import lion from './lion.png';
import monkey from './monkey.png';
import giraffe from './giraffe.png';

const Friends = () => (
  <div className='friendsWrapper'>
    <Controller>
      <Scene pin={false} reverse={false} duration={500} offset={-200}>
        <Tween
          wrapper={<div className='textContainer' />}
          staggerFrom={{
            left: -2000,
            rotation: -720,
            opacity: 0,
            color: '#dcd0ff',
            ease: 'Expo.easeOut',
          }}
          stagger={0.15}
        >
          <SplitLetters>
            <span className='text'>Parallax &nbsp; with &nbsp; Friends!</span>
          </SplitLetters>
        </Tween>
      </Scene>
    </Controller>

    <div className='friends'>
      <FriendsCard
        header='Lions'
        meta='lions'
        icon={lion}
        url='https://www.folly-farm.co.uk/zoo/meet-the-zoo-animals/african-lion/'
        cta='Click Me'
        description='Female lions are the main hunters. While they’re out looking for food, the males guard the pride’s territory and their young.'
      />
      <FriendsCard
        header='Monkeys'
        meta='monkeys'
        url='https://www.coolkidfacts.com/monkey-facts/'
        icon={monkey}
        cta='Learn More'
        description='There are around 260 monkey species in the world. Most of them live in trees except for a few who seem to prefer the ground like baboons.'
      />
      <FriendsCard
        header='Giraffes'
        meta='giraffes'
        url='https://www.dosomething.org/us/facts/11-facts-about-giraffes'
        icon={giraffe}
        cta='See More'
        description=' Well known for their long necks, these gentle giants are the world’s tallest living land animals.'
      />
    </div>
  </div>
);

export default Friends;