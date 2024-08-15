import Link from 'next/link'
import { Button } from '../ui/button'

import React from 'react'

const ResetButton = () => {
  return (
    <div>
      <Button asChild size="lg" variant="secondary" className="w-44">
        <Link href="/">Reset</Link>
      </Button>
    </div>
  )
}

export default ResetButton
