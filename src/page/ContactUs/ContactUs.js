import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col">

          <div className="text-center">
            <h1 className="text-5xl font-bold">Contact Us</h1>
          </div>

          <div className="card flex-shrink-0 shadow-2xl bg-base-100">
            <div className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered" />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" className="input input-bordered" />
              </div>

              <div className="form-control w-96">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea type="text" placeholder="Write Something" className="textarea textarea-bordered" />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Sent Email</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs