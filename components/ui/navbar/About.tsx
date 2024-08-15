'use client'
import Link from 'next/link'
import React from 'react'

const About: React.FC = () => {
  return (
    <div className=" ">
      <Link href="/about">
        <h2 className=" text-primary text-base font-bold">About</h2>
      </Link>
    </div>
  )
}

export default About
