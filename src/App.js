import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: #f1f1f1;
`

const Cell = styled.div`
  width: 25%;
  height: 100vh;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${(props) => props.hover};
  }
`

const App = () => {
  return (
    <Container>
      <Cell hover={"#e56b6f"}>1</Cell>
      <Cell hover={"#b56576"}>1</Cell>
      <Cell hover={"#6d597a"}>1</Cell>
      <Cell hover={"#355070"}>1</Cell>
    </Container>
  )
}

export default App
