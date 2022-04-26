import React from 'react'
import { FaSearch } from 'react-icons/fa';

interface Props {
  onSearch: (keyword: string) => void;
}



export default function SearchBox({onSearch}: Props) {

  const handleKeyup = (e: any) => {
    console.log(e.target.value);
  }

  return (
    <div className="flex border-thin border-gray-300 rounded-sm px-3 py-1  items-center">
      <FaSearch className="mr-3 text-gray-400" />
      <input className="outline-none" placeholder="Search here" onKeyUp={handleKeyup} />
    </div>
  )
}
