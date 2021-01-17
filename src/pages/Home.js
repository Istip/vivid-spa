import React from "react"
import { Button } from "../components/Button"

const Home = () => {
  return (
    <div className='container'>
      <h1>Welcome</h1>
      <hr />
      <h3>Lorem, ipsum dolor.</h3>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        nostrum debitis magni non nemo iste cumque voluptatibus consequuntur
        itaque! Ducimus?
      </p>
      <Button hover={"#ff8e72"}>Hello!</Button>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        quaerat enim velit. Voluptates magni nulla perspiciatis voluptatem
        molestiae non veritatis enim modi. Adipisci molestias et deserunt
        voluptates similique veniam! Accusantium sapiente hic porro voluptate
        dolor distinctio, assumenda sint atque quod vel earum consectetur
        excepturi ad modi! A aut repellat et?
      </p>

      <br />

      <p>
        <b>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
          repellendus!
        </b>
      </p>
      <Button hover={"#ff8e72"}>More...</Button>
    </div>
  )
}

export default Home
