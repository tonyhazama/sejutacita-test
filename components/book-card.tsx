import Image from 'next/image';
import React from 'react'
import { Book } from '../types/book'
import AppImage from './app-image';

interface Props {
  data: Book;
}

export default function BookCard({data}:Props) {
  return (
    <div>
      <div className="mb-2">
        <AppImage src={data.cover_url} alt={data.title} />
      </div>
      <div className="font-bold">{data.title}</div>
      <div>{data.category_id}</div>
    </div>
  )
}
