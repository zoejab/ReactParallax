import React from "react";
import { Button } from "semantic-ui-react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, SplitLetters } from "react-gsap";
import "./Content.scss";

const Content = () => (
  <div className='contentContainer'>
    <div className='content'>
      <Controller>
        <Scene pin={false} reverse={false} duration={500} offset={-200}>
          <Tween
            wrapper={<div className='textContainer' />}
            staggerFrom={{
              left: -2000,
              rotation: -720,
              opacity: 0,
              color: "#ff0000",
              ease: "Expo.easeOut",
            }}
            stagger={0.15}
          >
            <SplitLetters>
              <span className='text'> About &nbsp;Elephants </span>
            </SplitLetters>
          </Tween>
        </Scene>
      </Controller>

      <div className='content'>
        A healthy adult elephant can drink up to 60 gallons of water each day – which is the same as about 275 big bottles of Coke.
      </div>

      <div className='ctaContainer'>
        <div className='contentHeader'> Choose one: </div>
        <div className='buttonsContainer desktop'>
          <Button.Group size='huge'>
            <a href='https://www.youtube.com/watch?v=AdSpm574rUU' target='_blank' rel="noopener noreferrer"> <Button>Watch a Video</Button> </a>
            <Button.Or />
            <a href='https://www.coloring.ws/elephant.htm' target='_blank' rel="noopener noreferrer">  <Button>Coloring!</Button> </a>
            <Button.Or />
            <a href='https://www.amazon.com/slp/plush-elephant/pt57kbjuac376bh' target='_blank' rel="noopener noreferrer"> <Button>Stuffed Animals</Button> </a>
          </Button.Group>
        </div>

        <div className='buttonsContainer mobile'>
          <a href='https://www.youtube.com/watch?v=AdSpm574rUU' target='_blank' rel="noopener noreferrer"> <Button>Watch a Video</Button> </a>
          <a href='https://www.coloring.ws/elephant.htm' target='_blank' rel="noopener noreferrer"> <Button>Spotify</Button> </a>
          <a href='https://www.amazon.com/slp/plush-elephant/pt57kbjuac376bh' target='_blank' rel="noopener noreferrer"> <Button>Stuffed Animals</Button> </a>
        </div>
      </div>
    </div>

  </div>
);

export default Content;
