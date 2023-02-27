import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

import BigText from './Bigtext'
import submitButton from '../imgs/submitbutton.svg'

const ContactForm = (props) => {

  // This form uses Formpress. To change the recipient email, generate a new key
  const formpressKey = "xnqyvqnj"

  const [state, handleSubmit] = useForm(formpressKey)
  if (state.succeeded) {
    return (
      <div className="flex justify-center items-center h-scree mt-28">
        <div className="flex flex-col items-center">
          <div className="text-4xl">
            {props.title}
          </div>
          <BigText description={"Message sent!"} />
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center h-scree mt-28">
      <div className="flex flex-col items-center">
        <div className="text-4xl">
          {props.title}
        </div>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>

          <input className="w-[45rem] shadow border rounded-lg py-5 px-3 mt-10 text-center text-black text-lg leading-tight focus:outline-none focus:shadow-outline focus:border-purple " type="email" name="email" id="email" placeholder="Email" />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <input className="w-[45rem] shadow border rounded-lg py-5 px-3 mt-10 text-center text-black text-lg leading-tight focus:outline-none focus:shadow-outline focus:border-purple " type="text" name="message" id="message" placeholder="Question" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button className="w-52 mt-10 mb-14" type="submit" disabled={state.submitting}>
            <img src={submitButton} alt="submit button" className="hover:shadow-md" />
          </button>

        </form>
      </div>
    </div>


  )
}

export default ContactForm