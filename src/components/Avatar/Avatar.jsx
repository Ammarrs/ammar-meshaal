import React from 'react'
import myAvatar from "../../../public/avatar/my-av-front.png"

const Avatar = () => {
  return (
    <div className=''>
      <img src={myAvatar} className='w-100 drop-shadow-[0_0_150px_rgba(209,255,92,0.4)]' />
    </div>
  )
}

export default Avatar