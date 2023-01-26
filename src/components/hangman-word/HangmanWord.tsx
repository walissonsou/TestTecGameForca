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
interface wordProps {
  word: string;
  letrasAdivinhadas: string[];
}
export const HangmanWord = ({word, letrasAdivinhadas} : wordProps ) => {  
  

  return (
    <div>
      <>
        <Wrapper> {word.split("").map((letras, index) => (
          <span style={{ borderBottom: '0.1em solid black', height: '35px' }} key={index}>
            <span style={{ visibility: letrasAdivinhadas.includes(letras) ? 'visible' : 'hidden' }}> {letras}
            </span>
          </span>

        ))} </Wrapper>
      </>
    </div>
  )
}
