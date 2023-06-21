import { useState } from 'react'
import Card from './Card'

const NO_CARD_SELECTED = 0;

const Deck = () => {
  const [active, setActive] = useState(NO_CARD_SELECTED);

  

  return (
    <div className='deck'>
      <Card 
        name={'Pikachu'} 
        img={'/images/Pikachu.png'}
      />
      <Card 
        name={'Bulbasaur'} 
        img={'/images/Bulbasaur.png'}
      />
      <Card 
        name={'Charmander'} 
        img={'/images/Charmander.png'}
      />
      <Card 
        name={'Squirtle'} 
        img={'/images/Squirtle.png'}
      />
      <Card 
        name={'Caterpie'} 
        img={'/images/Caterpie.png'}
      />
      <Card 
        name={'Butterfree'} 
        img={'/images/Butterfree.png'}
      />
      <Card 
        name={'Weedle'} 
        img={'/images/Weedle.png'}
      />
      <Card 
        name={'Pidgey'} 
        img={'/images/Pidgey.png'}
      />
      <Card 
        name={'Rattata'} 
        img={'/images/Rattata.png'}
      />
      <Card 
        name={'Spearow'} 
        img={'/images/Spearow.png'}
      />
    </div>
  )
}

export default Deck