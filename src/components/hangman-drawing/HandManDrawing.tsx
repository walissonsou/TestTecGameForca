import styled from 'styled-components'

const Base = styled.div`
height: 10px;
width: 250px;
background-color: #693333;;
`
const Pau = styled.div`
height: 250px;
width: 10px;
background-color: #693333;;
`
const Corda = styled.div`
margin-left: 115px;
height: 10px;
width: 125px;
background-color: #693333;
position: absolute;
`
export const HandManDrawing = () => {
  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
    <Corda/>
    <Pau />
    <Base />
    </div>
  )
}
