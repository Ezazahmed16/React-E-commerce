import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react'

const Order = () => {

  const [userNaame, setUserName] = useState('')
  const [user, setUser] = useState('')

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userName = user.displayName;
      setUser(user)
      setUserName(userName)
    } else {

    }
  });

  console.log(userNaame)

  return (
    <div>


      {
        userNaame ? <>
          <h1 className='text-5xl'>Payment Page</h1>
        </> : <>
          <h1 className='text-5xl'>Please login</h1>
        </>
      }

    </div>
  )
}

export default Order