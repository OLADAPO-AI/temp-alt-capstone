import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
const SearchButton = () => {
  return (
    <Button asChild size="sm" className="w-20 ">
      <Link href="/">Search</Link>
    </Button>
  )
}

export default SearchButton
