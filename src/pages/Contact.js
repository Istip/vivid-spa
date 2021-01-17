import React from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { Textarea } from "../components/Textarea"

const Contact = () => {
  return (
    <div className='container'>
      <h1>Contact Us</h1>
      <hr />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium,
        quasi ad. Modi veniam perferendis nostrum?
      </p>
      <br />
      <p>
        <b>Lorem ipsum dolor sit amet consectetur.</b>
      </p>

      <hr />

      <form onSubmit={(e) => e.preventDefault()}>
        <h4>Full Name:</h4>
        <Input type='text' placeholder='Enter name' />
        <h4>Email adress:</h4>
        <Input type='email' placeholder='Enter email' />

        <br />
        <br />

        <h4>Message:</h4>
        <Textarea placeholder='Your message' />

        <br />

        <Button hover={"#355070"}>Submit</Button>
      </form>
    </div>
  )
}

export default Contact
