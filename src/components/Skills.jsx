import React from 'react'

export default function Skills(props) {
  return (
    <div className=''>
    <div className='text-left text-zinc-800 text-md font-semibold pb-2'> {props?.title}</div>
    <div className='flex flex-row flex-wrap'>
    { props?.skills?.map(skill => (
    <div className='chip'> {skill}</div>
    ))}
    </div>
  </div>
  )
}