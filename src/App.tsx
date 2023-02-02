import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Keyboard } from './components/keyboard/Keyboard'
import { HandManDrawing } from './components/hangman-drawing/HandManDrawing'
import { HangmanWord } from './components/hangman-word/HangmanWord'

const palavras = ['walisson', 'elzani', 'jadelson']
function App() {
  const [palavraAdivinhar, setPalavraAdivinhar] = useState(() => {
    return palavras[Math.floor(Math.random() * palavras.length)];
  })



  const [letrasClicadas, setLetrasClicadas] = useState<string[]>(['e'])




  const incorretosAdivinhados = letrasClicadas.filter((letra) => !palavraAdivinhar.includes(letra))
  // se no array das letras setadas eu filtrar e não incluir a letra na palavra para adivinhar
  // eu conto quantas letras existem nesse array.
  
  console.log(incorretosAdivinhados)

  return (
    <div className="App">
      <h2>  Jogo da velha </h2>
      <HandManDrawing numerosAdivinhados={incorretosAdivinhados.length} />
      <HangmanWord letrasAdivinhadas={letrasClicadas} word={palavraAdivinhar} />
      <Keyboard />
    </div>
  )
}

export default App
