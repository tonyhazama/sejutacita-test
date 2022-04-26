import Image from 'next/image';
import React from 'react'
import { Book } from '../types/book'
import AppImage from './app-image';

interface Props {
  data: Book;
  onClickBook: (id: number) => void
}

export default function BookCard({data, onClickBook}:Props) {
  return (
    <div onClick={() => onClickBook(data.id)}>
      <div className="mb-2">
        <AppImage src={data.cover_url} alt={data.title} />
      </div>
      <div className="font-semibold">{data.title}</div>
      <div>{data.category}</div>
    </div>
  )
}
