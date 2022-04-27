import React from 'react'
import {RiLoader5Fill} from 'react-icons/ri';  

export default function Loading() {
  return (
    <div className="flex py-8 w-full justify-center text-2xl"><RiLoader5Fill className="animate-spin duration-1000" /></div>
  )
}
