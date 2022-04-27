/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import BackButton from '../../components/back-button';
import BookCard from '../../components/book-card';
import Container from '../../components/container';
import { AppContext, useAppContext } from '../../context/app-context-provider';
import Layout from '../../components/layout';
import SearchBox from '../../components/search-box';
import { AppAction, AppState } from '../../types/app-state';
import { Book } from '../../types/book';
import Category from '../../types/category';
import { getAllBooks } from '../../services/books-service';
import BookDetail from '../../components/book-detail';
import Pagination from '../../components/pagination';

export default function Books() {
  const [store, dispatch] = useAppContext();
  const [category, setCategory] = useState<Category>();
  const router = useRouter()
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(0);
  const [bookDetail, setBookDetail] = useState<Book>();


  const booksPaging = [...books].splice(page * 12, 12);
  const categoryId: number = parseInt(router.query.categoryId as string, 10);
  const bookId: number = parseInt(router.query.bookId as string, 10);

  useEffect(() => {
    if (store.categories) {
      const cat = store.categories.find(c => c.id === categoryId);
      if (cat) {
        setCategory(cat);
      }
    }
  }, [store.categories]);
  
  useEffect(() => {
    if (categoryId) {
      getBookData(categoryId);
    }
  }, [categoryId]);
  
  const getBookData = async (categoryId: number) => {
    try {
      let [bookData] = await getAllBooks(categoryId);
      bookData = bookData.map((book: Book) => ({...book, category: category?.name}));
      setBooks(bookData);
    } catch (e) {
      console.error(e);
    }
  };

  const handleBack = () => {
    router.back();
  }

  const handleClickBook = (book: Book) => {
    setBookDetail(book);
  }

  const handleClose = () => {
    setBookDetail(undefined);
  }

  const handleSearch = (keyword: string) => {
    
  }

  const handleChangePage = (page: number) => {
    setPage(page);
  }

  return (
    <div>
      <Head>
        <title>Books</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="" id="main">
        <Layout>
          <div className="pt-4 pb-8">
            <BackButton onBack={handleBack} title={category?.name} />
            <SearchBox onSearch={handleSearch} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-8">
            {booksPaging?.map(book => (
              <BookCard key={book.id} data={book} onClickBook={handleClickBook} />
            ))}
          </div>
          <Pagination totalData={books.length} size={12} currentPage={page} onChangePage={handleChangePage} />
        </Layout>
        {bookDetail && <BookDetail book={bookDetail} onClose={handleClose} />}
      </main>
    </div>
  )
}
