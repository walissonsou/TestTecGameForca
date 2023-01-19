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
export const HangmanWord = () => {
  const palavra = "t e s t e"
  const adivinhaLetra = ['t', 'e', 'h']
  return (
    <Wrapper> {palavra.split("").map((letras, index) => (
      <span style={{borderBottom: '0.1em solid black', height: '35px'}} key={index}> 
      <span style={{visibility: adivinhaLetra.includes(letras) ? 'visible' : 'hidden'}}> { letras }</span>    
</span>
      
    ))} </Wrapper>
  )
}
