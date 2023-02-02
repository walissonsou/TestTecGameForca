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
min-width: 2rem;
`
interface wordProps {
  palavraAdivinhar: string;
  letrasAdivinhadas: string[];
}
export const HangmanWord = ({palavraAdivinhar, letrasAdivinhadas} : wordProps ) => {  
  

  return (
    <div>
      <>
        <Wrapper> {palavraAdivinhar.split("").map((letras, index) => (
          <span style={{ borderBottom: '0.1em solid black', height: '35px', minWidth: '50px' }} key={index}>
            <span style={{ visibility: letrasAdivinhadas.includes(letras) ? 'visible' : 'hidden' }}> {letras}
            </span>
          </span>

        ))} </Wrapper>
      </>
    </div>
  )
}
