import React from 'react'

interface Props {
  name: string;
  id: number;
  onClick: (id: number) => void;
}

export default function CategoryButton({name, id, onClick}: Props) {
  return (
    <div className="px-4 py-1 border-2 border-gray-400 rounded-sm mr-2 mb-2 text-sm cursor-pointer" onClick={() => onClick(id)}>{name}</div>
  )
}
