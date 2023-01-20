import styled from "styled-components"

const Keys = [
 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y'
]

const Wrapper = styled.div`

grid-template-columns: repeat(auto-fit,minmax(50px, 2fr));
gap: 0.5rem;
display: grid;
`
export const Keyboard = () => {
  return (
    
      <Wrapper> 
        {Keys.map((item) => (
          <button key={item}> { item } </button>
        ))}

      </Wrapper>
  )
}
