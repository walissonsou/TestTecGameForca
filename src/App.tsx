import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Keyboard } from './components/keyboard/Keyboard'
import { HandManDrawing } from './components/hangman-drawing/HandManDrawing'
import { HangmanWord } from './components/hangman-word/HangmanWord'

const palavras = ['walisson', 'elzani', 'jadelson']

function App() {

  const [palavraAdivinhar, setPalavraAdivinhar] = useState(() => {
    return palavras[1]
  })
  const [letrasAdivinhadas, setLetrasClicadas] = useState<string[]>([])
  const letrasIncorretas = letrasAdivinhadas.filter((letra) => !palavraAdivinhar.includes(letra))
  console.log(letrasIncorretas)
  const quantasLetrasIncorretas = letrasIncorretas.length
  const addLetraAdivinhada = (letter : string) => {
    if(letrasAdivinhadas.includes(letter)) {
      return
    }
    setLetrasClicadas((letrasAdivinhadas) => [...letrasAdivinhadas, letter])
  }
  useEffect(() => {
    const lidandoComTecla = ((e: KeyboardEvent) => {
      const { key } = e

      if(!key.match(/^[a-z]$/)) return 
      e.preventDefault
      addLetraAdivinhada(key)
      
    })
    document.addEventListener('keypress', lidandoComTecla)

    return(() => {
      document.removeEventListener('keypress', lidandoComTecla)
    })
  })
  
  const [ numeroChances, setNumeroChances] = useState(0)
  const chances =  6 - quantasLetrasIncorretas   
  const letrasErradas = letrasIncorretas.toString().split('   ')
  useEffect(() => {    
    setNumeroChances(chances)    
  })

  return (
    <div className="App">
      <h2>  Jogo da velha </h2>
      <h3> LETRAS DIGITADAS INCORRETAS: {letrasErradas} </h3>
      {quantasLetrasIncorretas >= 6 ?  <h1> VOCÊ PERDEU</h1> : <h1> Você  tem {numeroChances} chances </h1> }
      <HandManDrawing quantasLetrasIncorretas={quantasLetrasIncorretas} />
      <HangmanWord letrasAdivinhadas={letrasAdivinhadas} palavraAdivinhar={palavraAdivinhar} />
      <Keyboard />
    </div>
  )
}

export default App
