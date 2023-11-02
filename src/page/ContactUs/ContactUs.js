import React, { useRef } from 'react'
import { useState } from 'react'
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';


import toast from 'react-hot-toast';


const ContactUs = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c62kjtg', 'template_rg0bg8h', form.current, 'vEyX7UqGgaXcKNZbd')
      .then((result) => {

        toast.success('Email Sent')

        console.log(result.text);
        setFormData({
          user_name: '',
          user_email: '',
          message: '',
        });
      }, (error) => {
        console.log(error.text);
      });

  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Contact Us</h1>
          </div>

          <form ref={form} onSubmit={handleSubmit} action="">
            <div className="card flex-shrink-0 shadow-2xl bg-base-100">
              <div className="card-body w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>

                  <input
                    onChange={handleInputChange}
                    value={formData.user_name}
                    name='user_name'
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>

                  <input
                    name='user_email'
                    value={formData.user_email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control w-96">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>

                  <textarea
                    value={formData.message}
                    name='message'
                    onChange={handleInputChange}
                    placeholder="Write Something"
                    className="textarea textarea-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <button type='submit' className="btn btn-primary">Send Email</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
