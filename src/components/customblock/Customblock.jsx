import React from 'react'
import "./customblock.scss"

export default function Customblock({title, onClick}) {
  return (
    <div onClick={onClick} className='block'>{title}</div>
  )
}
