import Image from 'next/image';
import React from 'react'
import { Book } from '../types/book'

interface Props {
  data: Book;
}

export default function BookCard({data}:Props) {
  return (
    <div>
      <div className="rounded-lg overflow-hidden mb-2">
        <img src={data.cover_url} alt={data.title} className="w-full" />
        
      </div>
      <div className="font-bold">{data.title}</div>
      <div>{data.category_id}</div>
    </div>
  )
}
