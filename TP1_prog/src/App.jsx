import { useState } from 'react'
import Deck from './components/Deck'
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
      <Deck />
    </div> 
  )
}

export default App
