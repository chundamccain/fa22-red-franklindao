import React from 'react'
import { useState } from 'react'
import submitButton from '../imgs/submitbutton.svg'

const ContactForm = () => {

  const [mailSent, setMailSent] = useState(false)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({})

  return (
    <form className="flex flex-col items-center" method="post" name="contact_form" action="contact-form-handler.php">

      <input className="w-[45rem] shadow border rounded-lg py-5 px-3 mt-14 text-center text-black text-lg leading-tight focus:outline-none focus:shadow-outline focus:border-purple " type="text" name="name" placeholder="Name" />
      <input className="w-[45rem] shadow border rounded-lg py-5 px-3 mt-10 text-center text-black text-lg leading-tight focus:outline-none focus:shadow-outline focus:border-purple " type="text" name="email" placeholder="Email" />
      <input className="w-[45rem] shadow border rounded-lg py-5 px-3 mt-10 text-center text-black text-lg leading-tight focus:outline-none focus:shadow-outline focus:border-purple " type="text" name="question" placeholder="Question" />

      <button className="w-52 mt-10 mb-14" type="submit">
        <img src={submitButton} alt="submit button" className="hover:shadow-md" />
      </button>

    </form>
  )
}

export default ContactForm