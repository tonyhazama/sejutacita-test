import React from 'react'

interface Props {
  children: React.ReactNode
};

export default function Container({children}: Props) {
  
  return (
    <div className="container px-4 md:px-0 m-auto">{children}</div>
  )
}
