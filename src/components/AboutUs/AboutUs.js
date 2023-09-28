import React from 'react'
import about from '../../assets/banner6.jpg'

const AboutUs = () => {
    return (
        <div>
            <h1 className='text-center mt-5 text-2xl font-bold'>About US</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse grid grid-cols-2 gap-5">
                    <img src={about} className="rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs