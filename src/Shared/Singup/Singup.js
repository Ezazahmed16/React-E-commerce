import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, getRedirectResult, signInWithPopup, updateProfile, } from "firebase/auth";
import app from '../../firebase/firebase.config';
import toast from 'react-hot-toast';

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

  
const Singup = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // console.log(data)
        const email = data.email
        const password = data.password
        const displayName = data.name
        const photoURL = data.photoURL


        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                updateProfile(auth.currentUser, {
                    displayName: displayName,
                    photoURL: photoURL
                })
                .then(result => {
                    toast.success('User Create Success')
                })
                .catch(error => {
                    console.log(error.message)
                })


            })
            .catch(error => {
                console.log(error.message)
                toast.error('Something is wrong. Please try again.')
            })
    };

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const handleGithub = () => {
        getRedirectResult(auth)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error.message)
        })
    }



    return (
        <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            {...register('name', {
                                required: 'Name is required',
                            })}
                            type="text"
                            placeholder="Name"
                            className="input input-bordered"
                        />
                        {errors.email && (
                            <span className="text-error">{errors.email.message}</span>
                        )}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            {...register('photoURL', {
                                required: 'photoURL is required',
                            })}
                            type="text"
                            placeholder="photoURL"
                            className="input input-bordered"
                        />
                        {errors.photoURL && (
                            <span className="text-error">{errors.photoURL.message}</span>
                        )}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                        />
                        {errors.email && (
                            <span className="text-error">{errors.email.message}</span>
                        )}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input


                            {...register('password', {
                                required: 'Password is required',
                            })}


                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                        />
                        {errors.password && (
                            <span className="text-error">{errors.password.message}</span>
                        )}

                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                            Sing Up
                        </button>
                    </div>
                </form>

                <div className="block m-auto">
                    <button onClick={handleGoogleLogin} className='btn'>Google</button>
                </div>

                <div className="block m-auto">
                    <button onClick={handleGithub} className='btn'>Github</button>
                </div>

                <Link to='/login'>
                    <h1 className='text-center mb-5'>Alredy have a account? Please Login </h1>
                </Link>
            </div>
        </div>
    )
}

export default Singup