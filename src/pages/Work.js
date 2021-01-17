import React from "react"
import { Button } from "../components/Button"

const Work = () => {
  return (
    <div className='container'>
      <h1>Work</h1>
      <hr />
      <h3>Work 1</h3>
      <br />
      <i className='fas fa-umbrella fa-3x'></i>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas
        ipsam voluptatem.
      </p>
      <Button hover={"#6d597a"}>More...</Button>

      <hr />

      <h3>Work 2</h3>
      <br />
      <i className='fas fa-sun fa-3x'></i>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas
        ipsam voluptatem.
      </p>
      <Button hover={"#6d597a"}>More...</Button>
    </div>
  )
}

export default Work
