import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from './container'

export default function AppHeader() {
  return (
    <>
      <div className="pt-4 pb-2 shadow-md fixed w-full bg-white z-10">
        <Container>
          <div className="flex">
            <Link href="/">
              <a><Image src="/logo.webp" height="40" width="89" alt="sejutacita icon" /></a>
            </Link>
          </div>
        </Container>
      </div>
      <div className="h-header"></div>
    </>
  )
}
