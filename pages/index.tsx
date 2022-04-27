import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BookCard from '../components/book-card'
import { AppContext, useAppContext } from '../context/app-context-provider'
import Layout from '../components/layout'
import { useState } from 'react'
import BookDetail from '../components/book-detail'
import { Book } from '../types/book'
import Loading from '../components/loading'

const Home: NextPage = () => {
  const [store, dispatch] = useAppContext();
  const [bookDetail, setBookDetail] = useState<Book>();

  const handleBookDetail = (book: Book) => {
    setBookDetail(book);
  };

  const handleClose = () => {
    setBookDetail(undefined);
  };


  return (
    <div>
      <Head>
        <title>Sejutacita Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="" id="main">
        <Layout>
          
          {/* Categories */}
          <div id="categories" className="py-4">
            <h2 className="text-lg font-bold mb-4">Explore Categories</h2>
            <div className="flex flex-wrap">
              {(!store.categories || store.categories.length <= 0) ? (
                <Loading />
              ) : (
                store.categories.map(category => (
                  <Link href={`/books/${category.id}`} key={category.name}>
                    <a className="py-1 px-2 rounded-md border-thin border-gray-300 mr-2 mb-2 text-sm">{category.name}</a>
                  </Link>
                ))
              )}
            </div>
          </div>
          
          {/* Bookmarks */}
          <div id="bookmarks" className="py-4">
            <h2 className="text-lg font-bold mb-4">Bookmarks</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
              {store.bookmarks?.map(book => (
                <BookCard key={book.id} data={book} onClickBook={handleBookDetail} />
              ))}
            </div>
            {(!store.bookmarks || store.bookmarks?.length <= 0) && (
              <div>No bookmark yet</div>
            )}
          </div>
        </Layout>
        {bookDetail && <BookDetail book={bookDetail} onClose={handleClose} />}
      </main>
    </div>
  )
}

export default Home
