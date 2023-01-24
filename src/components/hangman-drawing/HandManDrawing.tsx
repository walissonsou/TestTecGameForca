import styled from 'styled-components'

const Base = styled.div`
height: 10px;
width: 250px;
background-color: #693333;;
`
const Pau = styled.div`
height: 350px;
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
const Cordinha = styled.div`
height: 50px;
width: 10px;
margin-left: 230px;
background-color: #693333;
position: absolute;
top: 0;
`
const Cabeça = styled.div`
position: absolute;
top: 50px;
right: 38px;
border: 5px solid black;
border-radius: 100%;
width: 50px;
height: 50px;
`
const Corpo = styled.div`
position: absolute;
top: 108px;
right: 63.5px;
background: black;
height: 98px;
width: 7px;
`
const BraçoEsq = styled.div`
position: absolute;
top: 120px;
right: 65px;
height: 7px;
width: 40px;
background: black;
rotate: -30deg;
`
const BraçoDir = styled.div`
position: absolute;
top: 120px;
right: 30px;
height: 7px;
width: 40px;
background: black;
rotate: -150deg;
`

const PernaDir = styled.div`
position: absolute;
top: 210px;
right: 30px;
height: 7px;
width: 40px;
background: black;
rotate: -150deg;
`
const PernaEsq = styled.div`
position: absolute;
top: 210px;
right: 65px;
height: 7px;
width: 40px;
background: black;
rotate: -30deg;
`
interface numerosAdivinhadosProps {
  numerosAdivinhados: number;
}

const bodyPart = [Cabeça,
  Corpo,
  BraçoEsq,
  BraçoDir,
  PernaDir,
  PernaEsq]


export const HandManDrawing = ({ numerosAdivinhados }: numerosAdivinhadosProps) => {
  return (

    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ position: 'relative', display: 'flex', marginRight: -365 }}>
        {bodyPart.slice(0, numerosAdivinhados).map((Body, index) => {
          return <Body key={index} />
        })}
      </div>
      <Corda />
      <Cordinha />
      <Pau />
      <Base />
    </div>
  )
}
