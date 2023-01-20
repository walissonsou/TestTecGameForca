import { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
justify-content: center;
gap: 0.5rem;
font-size: 4rem;
font-weight: bold;
text-transform: uppercase;
margin-top: 1rem;
`
interface HandManWordsProps {
  word: string;
}
export const HangmanWord = ({word} : HandManWordsProps) => {
  
  const adivinhaLetra = ['']  
  
 

  return (
    <div>
      <>
        <Wrapper> {word.split("").map((letras, index) => (
          <span style={{ borderBottom: '0.1em solid black', height: '35px' }} key={index}>
            <span style={{ visibility: adivinhaLetra.includes(letras) ? 'visible' : 'hidden' }}> {letras}
            </span>
          </span>

        ))} </Wrapper>
      </>
      {/* <form>
        <label>     
          Letras:     
          <input type="text" onChange={(e) => setLetras(e.target.value)}/>
          <button disabled={letras.length > 1}> Enviar </button>
        </label>          
      </form> */}

    </div>
  )
}
