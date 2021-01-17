import React from "react"
import styled from "styled-components"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Work from "./pages/Work"
import logo from "./assets/logo.png"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: #f1f1f1;
  background-color: #111122;
  color: #f1f1f1;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`

const Cell = styled.div`
  width: 25%;
  min-height: 100vh;
  transition: background-color 0.5s ease;
  padding-top: 5rem;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.hover};
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`

const App = () => {
  return (
    <>
      <div className='logo'>
        <img src={logo} alt='Logo' />
      </div>
      <Container>
        <Cell hover={"#ff8e72"}>
          <Home />
        </Cell>
        <Cell hover={"#b56576"}>
          <About />
        </Cell>
        <Cell hover={"#6d597a"}>
          <Work />
        </Cell>
        <Cell hover={"#355070"}>
          <Contact />
        </Cell>
      </Container>
    </>
  )
}

export default App
