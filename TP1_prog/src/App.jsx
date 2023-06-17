import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  // const ability = {
  //   abilities: {
  //     Static: 'Shock the target, with a potential to inflict paralysis. ',
  //     Celebrate: 'The Pokémon can move again after defeating an enemy.',
  //     Lightningrod: 'Absorbs all Electric-type moves to raise Attack.'
  //   }
  // }

  return (
    <div>
      <Card name={'Pikachu'} img={'/images/Pikachu.png'}/>
      <Card name={'Bulbasaur'} img={'/images/Bulbasaur.png'}/>
      <Card name={'Charmander'} img={'/images/Charmander.png'}/>
      <Card name={'Squirtle'} img={'/images/Squirtle.png'}/>
      <Card name={'Caterpie'} img={'/images/Caterpie.png'}/>
      <Card name={'Butterfree'} img={'/images/Butterfree.png'}/>
      <Card name={'Weedle'} img={'/images/Weedle.png'}/>
      <Card name={'Pidgey'} img={'/images/Pidgey.png'}/>
      <Card name={'Rattata'} img={'/images/Rattata.png'}/>
      <Card name={'Spearow'} img={'/images/Spearow.png'}/>
    </div> 
  )
}

export default App
