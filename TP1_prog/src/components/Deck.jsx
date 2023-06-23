import { useState } from 'react'
import Card from './Card'
import './Deck.css'

const NO_CARD_SELECTED = 0;

const Deck = () => {
  const [active, setActive] = useState(NO_CARD_SELECTED);

  const expandCard = (index) => {
    if (index === active) {
      setActive(NO_CARD_SELECTED);
      return;
    }
    setActive(index);
  };

  const collapseCard = () => {
    setActive(NO_CARD_SELECTED);
    return;
  }

  return (
    <div className='deck'>
      <Card 
        value={1}
        active={active}
        onMouseEnter={expandCard}
        onMouseLeave={collapseCard}
        name={'Pikachu'} 
        img={'/images/Pikachu.png'} 
      >
          Static & Lightning Rod
      </Card>
      <Card 
        value={2}
        active={active}
        onMouseEnter={expandCard}
        onMouseLeave={collapseCard}
        name={'Bulbasaur'} 
        img={'/images/Bulbasaur.png'}
      >
        Overgrow & Chlorophyll
      </Card>
      <Card 
        value={3}
        active={active}
        onMouseEnter={expandCard}
        onMouseLeave={collapseCard}
        name={'Charmander'} 
        img={'/images/Charmander.png'}
      >
        Blaze & Solar Power
      </Card>
      <Card 
        value={4}
        active={active}
        onMouseEnter={expandCard}
        onMouseLeave={collapseCard}
        name={'Squirtle'} 
        img={'/images/Squirtle.png'}
      >
        Torrent & Rain Dish
      </Card>
      <Card 
        value={5}
        active={active}
        onMouseEnter={expandCard}
        onMouseLeave={collapseCard}
        name={'Caterpie'} 
        img={'/images/Caterpie.png'}
      >
        Shield Dust & Run Away
      </Card>
      <Card 
        value={6}
        active={active}
        onMouseEnter={expandCard}
        onMouseLeave={collapseCard}
        name={'Butterfree'} 
        img={'/images/Butterfree.png'}
      >
        Compound Eyes & Tinted Lens
      </Card>
      <Card 
        value={7}
        active={active}
        onMouseEnter={expandCard}
        onMouseLeave={collapseCard}
        name={'Weedle'} 
        img={'/images/Weedle.png'}
      >
        Shield Dust & Run Away
      </Card>
      <Card 
        value={8}
        active={active}
        onMouseEnter={expandCard}
        onMouseLeave={collapseCard}
        name={'Pidgey'} 
        img={'/images/Pidgey.png'}
      >
        Tangled & Big Pecks
      </Card>
      <Card 
        value={9}
        active={active}
        onMouseEnter={expandCard}
        onMouseLeave={collapseCard}
        name={'Rattata'} 
        img={'/images/Rattata.png'}
      >
        Guts & Run Away
      </Card>
      <Card 
        value={10}
        active={active}
        onMouseEnter={expandCard}
        onMouseLeave={collapseCard}
        name={'Spearow'} 
        img={'/images/Spearow.png'}
      >
        Keen Eye & Sniper
      </Card>
    </div>
  )
}

export default Deck